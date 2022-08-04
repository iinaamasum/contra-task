import React from 'react';
import Button from '../Shared/Button';
import Divider from '../Shared/Divider';
import Social from './Social';

const EmailForm = ({ handleSubmit, btnTitle }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full md:w-[478px] mx-auto flex flex-col text-left mb-[48px]">
        <label className="text-gray-500 text-sm mt-1 px-4" htmlFor="email">
          Email
        </label>
        <input
          className="py-2 px-4 focus:outline-none border-b-[1px] border-black"
          type="text"
        />
      </div>
      <Button type="submit">{btnTitle}</Button>
      <Divider />
      <Social />
    </form>
  );
};

export default EmailForm;
