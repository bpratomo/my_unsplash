import React, { useState } from "react";
import { removeImage } from "../../lib/dbInterface";

export default function ImageContainer(props) {
  let image = props.image.data();
  if (image['url']===null | image['url'] == '') {
    return(
      <div className="hidden"></div>
    )
    
  }
  function addClass(evt) {
    let h = evt.target.height;
    let w = evt.target.width;
    console.log(h)
    if (h > w) {
      evt.target.parentElement.parentElement.classList.add("row-span-2");
    }
  }

  function handleDelete(evt) {
    props.invokeDeleteModal(props.datakey);
  }

  if (image) {
    return (
      <div>
        <div className="relative max-h-full group">
          <img src={image.url} className="rounded-lg" onLoad={addClass} />
          <button className="bg-green-500 absolute top-0 left-0 p-1 text-white rounded m-2 text-xs bg-opacity-0 text-opacity-0 group-hover:text-opacity-100 group-hover:bg-opacity-100">
            {image.label}
          </button>
          <button
            className="bg-red-500 absolute top-0 right-0 p-1 text-white rounded m-2 text-xs bg-opacity-0 text-opacity-0 group-hover:text-opacity-100 group-hover:bg-opacity-100"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
