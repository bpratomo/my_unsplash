import React, { useState } from "react";
import { addImage } from "../lib/dbInterface";
import { useForm } from "react-hook-form";

export default function AddDialog(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  function onSubmit(data) {
    addImage(data["label"], data["url"]);
    props.incrementNumberOfChanges();

    props.closeModal();
    // console.log(data);
  }

  return (
    <div
      className="inline-block align-bottom bg-white rounded-lg w-3/6 m-auto text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div>
        <h2>Add a new photo</h2>
        <form className="flex-col flex" onSubmit={handleSubmit(onSubmit)}>
          <row className="mt-3">
            <p>Label</p>

            <input
              name="label"
              // onChange={handleChange}
              // defaultValue={formState['label']}
              className="placeholder-gray-500 placeholder-opacity-100 rounded-lg w-full p-1 border border-black"
              placeholder="The label for your image"
              ref={register}
            />
          </row>

          <row className="mt-3">
            <p>Label</p>

            <input
              name="url"
              // onChange={handleChange}
              // value={formState['url']}
              className="placeholder-gray-500 placeholder-opacity-100 rounded-lg p-1 w-full border border-black"
              placeholder="https://whereyourimageislocated.example"
              ref={register}
            />
          </row>

          <row className="mt-3 flex justify-end">
            <button
              type="button"
              className="bg-green-500 p-2 border rounded-lg text-white"
              onClick={props.closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 p-2 border rounded-lg text-white"
              ref={register}
            >
              Submit
            </button>
          </row>
        </form>
      </div>
    </div>
  );
}
