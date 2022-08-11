import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Shared/Button';
import Divider from '../Shared/Divider';
import Social from './Social';

const EmailForm = ({ setEnteredEmail, btnTitle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    setEnteredEmail(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative">
      <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full md:w-[478px] mx-auto flex flex-col text-left mb-[48px]">
        <label className="text-gray-500 text-sm mt-1 px-4" htmlFor="email">
          Email
        </label>
        <input
          className="py-[7px] px-4 focus:outline-none border-b-[1px] border-black"
          placeholder="Enter Your Email"
          type="text"
          {...register('email', {
            required: {
              value: true,
              message: 'Email is required.',
            },
          })}
        />
      </div>
      <label className="text-[13px] flex text-left absolute top-[66px] left-1">
        {errors.email?.type === 'required' && (
          <span className="label-text-alt text-red-500">
            {errors.email.message}
          </span>
        )}
      </label>
      <Button type="submit">{btnTitle}</Button>
      <Divider />
      <Social />
    </form>
  );
};

export default EmailForm;
