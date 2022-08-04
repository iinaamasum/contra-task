import React from 'react';
import Button from '../Shared/Button';
import Divider from '../Shared/Divider';
import Social from './Social';

const EmailForm = ({ handleSubmit, btnTitle }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="border-[1.5px] rounded-t-lg w-full md:w-[70%] mx-auto flex flex-col text-left mb-10">
        <label
          className="text-gray-500 text-sm mt-1 px-4 font-medium tracking-wide"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="py-2 px-4 focus:outline-none text-purple-600 font-semibold focus:border-b-[2px] focus:border-blue-600"
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
