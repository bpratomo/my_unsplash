import React, { useState } from "react";
import ImageContainer from "../ImageContainer/ImageContainer";

export default function Gallery(props) {
  let imageContained = [];

  try {
    props.images.forEach((image) => {
      // console.log(image.id)
      imageContained.push(
        <ImageContainer
          key={image.id}
          datakey={image.id}
          image={image}
          incrementNumberOfChanges={props.incrementNumberOfChanges}
        />
      );
    });
  } catch (e) {
    console.log(e);
  }

  return <div className="grid grid-cols-3 gap-3">{imageContained}</div>;
}
