import Head from 'next/head'
import HeaderBar from "../components/HeaderBar/HeaderBar";
import Gallery from "../components/Gallery/Gallery";
import AddDialog from "../components/AddDialog";
import { useState, useEffect } from 'react';
import { retrieveImages } from "../lib/dbInterface";



export default function Home(props) {
  const [searchLabel, setSearchQuery] = useState(null);
  const [images, setImages] = useState(null)
  const [visibleUIElement, setVisibleUIElement] = useState('Gallery')

  const [numberOfChanges, setNumberOfChanges] = useState(0)

  async function updateImages() {
    console.log('Use Effect is called!')
    const dbsnapshot = await retrieveImages(searchLabel);
    setImages(dbsnapshot);
  }


  useEffect(() => {
    updateImages()
  }, [numberOfChanges])


  function incrementNumberOfChanges(){
    setNumberOfChanges(numberOfChanges + 1)
  }

  function invokeAddModal() {
    console.log('invoking add dialog')
    setVisibleUIElement('Add')
  }

  function invokeDeleteModal() {
    console.log('invoking delete dialog')
    setVisibleUIElement('Delete')
    
  }

  function closeModal() {
    console.log('closing modal dialogs')
    setVisibleUIElement('Gallery')
  }



  return (

    <div className="p-5  w-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="justify-center flex-column text-center ">
        <header>
          <HeaderBar setSearchQuery={setSearchQuery} searchLabel={searchLabel} invokeAddModal={invokeAddModal} incrementNumberOfChanges={incrementNumberOfChanges}/>
        </header>

        {/* Overlay in case view mode is not gallery  */}

        {visibleUIElement === 'Gallery'
          ? ""

          : <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>}


        {/* Modal dialog to add new photo */}
        {visibleUIElement === 'Add'
          ? 
            <AddDialog incrementNumberOfChanges={incrementNumberOfChanges} closeModal={closeModal}/>
  
          : <div className="hidden"/>
        }


        {/* Modal dialog to delete photo */}

        {visibleUIElement === 'Delete'
          ? <div></div>
          : <div className="hidden"/>
        }




        <main className="my-5">
          <Gallery images={images} searchLabel={searchLabel} closeModal={closeModal} invokeDeleteModal={invokeDeleteModal} incrementNumberOfChanges={incrementNumberOfChanges}/>
        </main>

      </body>

    </div>
  )
}
