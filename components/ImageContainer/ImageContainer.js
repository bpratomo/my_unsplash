import React from 'react';


export default  function ImageContainer({ image }) {
  function addClass(evt){
    let h = evt.target.height;
    let w = evt.target.width;
    if(h> w){ evt.target.parentElement.classList.add("row-span-2") } 
  }
  
  return(
    <div>
      <img src={image.url} className = "rounded-lg" onLoad={addClass}/>
    </div>
  )

}
