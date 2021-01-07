import Head from 'next/head'
import HeaderBar from "../components/HeaderBar/HeaderBar";
import Gallery from "../components/Gallery/Gallery";
import { useState, useEffect } from 'react';
import { retrieveImages } from "../lib/dbInterface";



export default function Home(props) {
  const [searchLabel, setSearchQuery] = useState(null);
  const [images, setImages] = useState(null)


  useEffect(() => {
    async function updateImages() {
      const dbsnapshot = await retrieveImages(searchLabel);
      setImages(dbsnapshot);
    }
     updateImages()
  }, [])

  return (

    <div className="p-5">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <header>
          <HeaderBar setSearchQuery={setSearchQuery} searchLabel={searchLabel} />
        </header>


        <main className="my-5">
          <Gallery images={images} searchLabel={searchLabel} />
        </main>

      </body>

    </div>
  )
}
