import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function HeaderBar(props) {


  return (
    <div className="flex justify-between">
      {/* Profile Picture */}
      <div className="flex text-sm ">
<img src="/my_unsplash_logo.svg"></img>
      </div>



      {/* Search Bar  */ }
  <div className="border flex-grow-4 flex items-center text-gray-400 px-3">
  <input type="text" id="fname" name="fname" value="Search by name" />
  </div>

  {/* Button to add photo */ }
  <div>
    <button className="bg-green-500 p-2 border rounded-lg text-white">Add a photo</button>
  </div>





    </div >
  )

}
