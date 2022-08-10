import React from 'react';
import { useForm } from 'react-hook-form';

const LinkInputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert('congrats');
  };
  return (
    <form id="user-lins-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full md:w-[385px] mx-auto flex flex-col text-left mb-[24px] mt-[38px]">
        <label className="text-gray-500 text-sm mt-1 px-4" htmlFor="email">
          URL
        </label>
        <input
          className="py-2 px-4 focus:outline-none border-b-[1px] border-black"
          type="text"
        />
      </div>
      <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full md:w-[385px] mx-auto flex flex-col text-left mb-[48px]">
        <label className="text-gray-500 text-sm mt-1 px-4" htmlFor="email">
          Name your link
        </label>
        <input
          className="py-2 px-4 focus:outline-none border-b-[1px] border-black"
          type="text"
        />
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <button
          // onClick={handleCancel}
          className="rounded-full h-12 w-[148px] bg-[#f2f2f2] hover:bg-[#f0f0f0] text-black font-semibold text-md md:text-lg shadow-sm"
        >
          Cancel
        </button>
        <button
          // onClick={handleSave}
          className="rounded-full h-12 w-[148px] bg-[#f6f6f6] hover:bg-[#f2f2f2] border-2 border-[#f2c94c] text-black font-semibold text-md md:text-lg shadow-sm"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default LinkInputForm;
