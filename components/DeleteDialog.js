import React, { useState } from "react";
import { removeImage } from "../lib/dbInterface";
import { useForm } from "react-hook-form";

export default function DeleteDialog(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  function onSubmit() {
    console.log("deleting image " + props.dataKey);
    removeImage(props.dataKey, props.incrementNumberOfChanges);
    props.closeModal();
  }

  return (
    <div
      className="inline-block align-bottom bg-white rounded-lg w-3/6 m-auto text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div>
        <h2>Are you sure?</h2>
        <form className="flex-col flex" onSubmit={handleSubmit(onSubmit)}>
          <row className="mt-3">
            <p>Password</p>

            <input
              name="password"
              type="password"
              // onChange={handleChange}
              // defaultValue={formState['label']}
              className="placeholder-gray-500 placeholder-opacity-100 rounded-lg w-full p-1 border border-black"
              placeholder="**************************"
              ref={register}
            />
          </row>

          <row className="mt-3 flex justify-end">
            <button className="p-2 mr-3 border rounded-lg " onClick={props.closeModal}>Cancel</button>
            <button
              type="submit"
              className="bg-red-500 p-2 border rounded-lg text-white"
            >
              Submit
            </button>
          </row>
        </form>
      </div>
    </div>
  );
}
