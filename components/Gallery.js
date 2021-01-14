import React, { useState } from "react";
import ImageContainer from "./ImageContainer";

export default function Gallery(props) {
  let imageContained = [];

  if(props.images == null){
    return <div>Loading....</div>
  }

  try {
    props.images.forEach((image) => {
      // console.log(image.id)
      imageContained.push(
        <ImageContainer
          key={image.id}
          datakey={image.id}
          image={image}
          invokeDeleteModal = {props.invokeDeleteModal}
          setDataKey = {props.setDataKey}
          incrementNumberOfChanges={props.incrementNumberOfChanges}
        />
      );
    });
  } catch (e) {
    console.log(e);
  }

  return <div className="galleryGrid">{imageContained}</div>;
}
