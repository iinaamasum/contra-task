import React from 'react';
import { useForm } from 'react-hook-form';

const ProfileInfoForm = ({ setUserData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setUserData(data);
  };
  return (
    <section>
      <form id="user-profile-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-x-[16px]">
          {/* first name */}
          <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full md:w-[478px] mx-auto flex flex-col text-left mb-[48px]">
            <label
              className="text-gray-500 text-sm mt-1 px-4"
              htmlFor="First-name"
            >
              First Name
            </label>
            <input
              className="py-2 px-4 focus:outline-none border-b-[1px] border-black"
              type="text"
              {...register('first_name', {
                required: {
                  value: true,
                  message: 'First name is required.',
                },
              })}
            />
            <label className="level font-bold">
              {errors.first_name?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.first_name.message}
                </span>
              )}
            </label>
          </div>
          {/* last name */}
          <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full md:w-[478px] mx-auto flex flex-col text-left mb-[48px]">
            <label
              className="text-gray-500 text-sm mt-1 px-4"
              htmlFor="Last-name"
            >
              Last Name
            </label>
            <input
              className="py-2 px-4 focus:outline-none border-b-[1px] border-black"
              type="text"
              {...register('last_name', {
                required: {
                  value: true,
                  message: 'Last name is required.',
                },
              })}
            />
            <label className="level font-bold">
              {errors.last_name?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.last_name.message}
                </span>
              )}
            </label>
          </div>
        </div>
        {/* location  */}
        <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full mx-auto flex flex-col text-left mb-[48px]">
          <label
            className="text-gray-500 text-sm mt-1 px-4"
            htmlFor="Last-name"
          >
            Location
          </label>
          <input
            className="py-2 px-4 focus:outline-none border-b-[1px] border-black"
            type="text"
            {...register('last_name', {
              required: {
                value: true,
                message: 'Last name is required.',
              },
            })}
          />
          <label className="level font-bold">
            {errors.last_name?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.last_name.message}
              </span>
            )}
          </label>
        </div>
      </form>
    </section>
  );
};

export default ProfileInfoForm;
