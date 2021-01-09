// const firebase = require("firebase");
import firebase from 'firebase'
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: 'AIzaSyDcxeGFq0ostrgu39Dft6tjr09sZG4VFME',
        authDomain: 'my-unsplash-ff03a.firebaseapp.com',
        projectId: 'my-unsplash-ff03a'
    });
}
var db = firebase.firestore();

async function dbTest() {

    const docRef = db.collection('users').doc();

    await docRef.set({
        first: 'test',
        last: 'without id',
        born: 1815
    });


    const snapshot = await db.collection('users').get();
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
    });
};

// dbTest();




export async function retrieveImages(searchQuery){
    const collectionRef = await db.collection('images')
    let snapshot;

    if(searchQuery){
     snapshot = await collectionRef.where('label','>=', searchQuery).where('label','<=',searchQuery+'\uf8ff').get()
    }
    else {
        snapshot = await collectionRef.get()
    }
    snapshot.forEach((image) => {
        console.log(image.id, '=>', image.data());
    });

    return snapshot;

}

export async function addImage(label, url){
    const docRef = db.collection('images').doc()
    const res = await docRef.set({
        label : label,
        url: url
    })
    return res

}

export async function removeImage(imageId){
    
    const docRef = db.collection('images').doc(imageId)
    const res = await docRef.delete();
    return res

}