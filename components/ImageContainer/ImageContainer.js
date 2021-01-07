import React from 'react';


export default  function ImageContainer(props) {
  let image = props.image.data()
  function addClass(evt){
    let h = evt.target.height;
    let w = evt.target.width;
    if(h> w){ evt.target.parentElement.classList.add("row-span-2") } 
  }
  
  return(
    <div>
      <img src={image.url} data-key={props.key} className = "rounded-lg" onLoad={addClass}/>
    </div>
  )

}
