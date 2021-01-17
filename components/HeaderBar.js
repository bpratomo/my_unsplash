import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function HeaderBar(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const [searchText, setSearchText] = useState(props.searchLabel);

  useEffect(() => {
    setSearchText(null);
  });
  function onSubmit(data) {
    props.setSearchQuery(data["search"]);
    props.incrementNumberOfChanges();
  }

  return (
    <div className="flex justify-between md:text-md text-xs">
      {/* Profile Picture */}
      <div className="flex text-sm flex-grow-0 flex-shrink-0">
        <img src="/my_unsplash_logo.svg"></img>
      </div>

      {/* Search Bar  */}
      <form
        className="border flex-auto mx-1 flex items-center px-3 max-w-sm sm:text-sm"
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
      <div className="flex-grow-0">
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
