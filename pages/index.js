import Head from "next/head";
import HeaderBar from "../components/HeaderBar";
import Gallery from "../components/Gallery";
import AddDialog from "../components/AddDialog";
import DeleteDialog from "../components/DeleteDialog";
import { useState, useEffect } from "react";
import { retrieveImages } from "../lib/dbInterface";

export default function Home(props) {
  const [searchLabel, setSearchQuery] = useState(null);
  const [images, setImages] = useState(null);
  const [keyToDelete, setKeyToDelete] = useState(null);
  const [visibleUIElement, setVisibleUIElement] = useState("Gallery");

  const [numberOfChanges, setNumberOfChanges] = useState(0);

  async function updateImages() {
    console.log("Use Effect is called!");
    const dbsnapshot = await retrieveImages(searchLabel);
    setImages(dbsnapshot);
  }

  useEffect(() => {
    updateImages();
  }, [numberOfChanges]);

  function incrementNumberOfChanges() {
    setNumberOfChanges(numberOfChanges + 1);
  }

  function invokeAddModal() {
    console.log("invoking add dialog");
    setVisibleUIElement("Add");
  }

  function invokeDeleteModal(keyToDelete) {
    console.log("invoking delete dialog for " + keyToDelete);
    setKeyToDelete(keyToDelete)
    
    setVisibleUIElement("Delete");
  }

  function closeModal() {
    console.log("closing modal dialogs");
    setVisibleUIElement("Gallery");
  }

  return (
    <div className="p-5  w-screen">
      <Head>
        <title>My Unsplash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="justify-center flex-column text-center ">
        <header>
          <HeaderBar
            setSearchQuery={setSearchQuery}
            searchLabel={searchLabel}
            invokeAddModal={invokeAddModal}
            incrementNumberOfChanges={incrementNumberOfChanges}
          />
        </header>



        <main className="my-5">
          <Gallery
            images={images}
            searchLabel={searchLabel}
            closeModal={closeModal}
            invokeDeleteModal={invokeDeleteModal}
            setDataKey = {setKeyToDelete}
            incrementNumberOfChanges={incrementNumberOfChanges}
          />
        {/* Overlay in case view mode is not gallery  */}

          {visibleUIElement === "Gallery"? <div className="hidden"/> :<div className="fixed inset-0 bg-gray-500 opacity-75 h-screen"></div>}
        </main>
    

        {/* Modal dialog to add new photo */}
        {visibleUIElement === "Add" && (
          <div className="fixed inset-0 w-full">
            <AddDialog
              incrementNumberOfChanges={incrementNumberOfChanges}
              closeModal={closeModal}
            />
          </div>
        ) }




        {/* Modal dialog to delete photo */}

        {visibleUIElement === "Delete" && (
          <div className="fixed inset-0 w-full">
            <DeleteDialog
              incrementNumberOfChanges={incrementNumberOfChanges}
              closeModal={closeModal}
              dataKey = {keyToDelete}

            />
          </div>
        ) }

      </body>
    </div>
  );
}
