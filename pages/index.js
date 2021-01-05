import Head from 'next/head'
import HeaderBar from "../components/HeaderBar/HeaderBar";
import Gallery from "../components/Gallery/Gallery";
import path from 'path'
import fs from 'fs'
import { useState } from 'react';


export async function getStaticProps() {
  const dataFilePath = path.join(process.cwd(), 'data', 'images.json')
  const images = fs.readFileSync(dataFilePath, 'utf-8')
  console.log(images)
  return {
    props: {
      images
    },
    revalidate: 1
  }
}


export default function Home({ images }) {
  const [searchLabel, setSearchQuery] = useState(null);




  return (
    <div className="p-5">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <div>
          <HeaderBar setSearchQuery = {setSearchQuery} />
        </div>


        <div className="my-5">
          <Gallery images={images} searchLabel = {searchLabel}/>
        </div>

      </body>

    </div>
  )
}
