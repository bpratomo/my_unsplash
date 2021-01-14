import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

export default function HeaderBar(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const [searchText, setSearchText] = useState(props.searchLabel);

  useEffect(() => {
    setSearchText(null);
  });
  function onSubmit(data) {
    props.setSearchQuery(data["search"]);
    console.log(data);
    props.incrementNumberOfChanges();
  }

  return (
    <div className="flex justify-between">
      {/* Profile Picture */}
      <div className="flex text-sm ">
        <img src="/my_unsplash_logo.svg"></img>
      </div>

      {/* Search Bar  */}
      <form
        className="border flex-grow-4 flex items-center px-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          id="fname"
          name="search"
          value={searchText}
          className="placeholder-gray-500 placeholder-opacity-100 ..."
          placeholder="Search by label"
        ref={register}

        />
      </form>

      {/* Button to add photo */}
      <div>
        <button
          className="bg-green-500 p-2 border rounded-lg text-white"
          onClick={props.invokeAddModal}
        >
          Add a photo
        </button>
      </div>
    </div>
  );
}
