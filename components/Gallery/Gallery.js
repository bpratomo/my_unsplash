import React from 'react';
import ImageContainer from '../ImageContainer/ImageContainer'
import retrieveImages from '../../pages/api/imageRetriever'



export default function Gallery(props) {
  const imageContained = []
  let filteredImages = filterImages(props.images,props.searchLabel)
  
  for (const [key, image] of Object.entries(JSON.parse(filteredImages))) {
    containerArray.push(<ImageContainer key={key} image={image} />)
  }
  // function ImageContainerGeneration(images, containerArray) {
    
    
  // }

  return (<div className="grid grid-cols-3 gap-3">
    {imageContained}
  </div>);
}


