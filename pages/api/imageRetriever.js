// import fs from 'fs'
// import path from 'path'

// const dataFilePath = path.join(process.cwd(), 'data', 'images.json')


// export default function retrieveImages(searchQuery=null) {
//      let images = fs.readFileSync(dataFilePath, 'utf-8')
//      let filteredImages

//      searchQuery
//          ? filteredImages = Object.fromEntries(Object.entries(images).filter(([key, value]) => value.label.includes(searchQuery)))
//          : filteredImages = images;


//     return filteredImages
// }