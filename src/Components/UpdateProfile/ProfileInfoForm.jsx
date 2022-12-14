import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import LocationSelection from './LocationSelection';
import ProfileImage from './ProfileImage';
import './ProfileInfoForm.css';
import SkillSetSelector from './SkillSetSelector';

const ProfileInfoForm = ({
  setUserData,
  setProfileImg,
  editedImg,
  setIsLoading,
}) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const [skillSet, setSkillSet] = useState([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setUserData({ ...data, selectedLocation, skillSet });
      navigate('/social-links');
    }, 2000);
  };

  return (
    <section>
      <form id="user-profile-form" onSubmit={handleSubmit(onSubmit)}>
        {/* user Image  */}
        <ProfileImage setProfileImg={setProfileImg} editedImg={editedImg} />

        <div className="md:flex items-center md:gap-x-[16px] mb-[28px]">
          {/* first name */}
          <div className="relative w-full mb-[28px] md:mb-0">
            <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full  md:w-[280px] mdLg800:w-[342px] mx-auto flex flex-col text-left border-b-black">
              <label
                className="text-gray-500 text-[12px] mt-1 px-4"
                htmlFor="First-name"
              >
                First Name
              </label>
              <input
                className="py-[7.5px] px-4 focus:outline-none bg-white placeholder:text-gray-400 placeholder:text-base text-base"
                placeholder="Enter Your First Name"
                type="text"
                {...register('first_name', {
                  required: {
                    value: true,
                    message: 'First name is required.',
                  },
                })}
              />
            </div>
            <label className="text-[13px] font-medium left-5 flex text-left absolute top-[64px]">
              {errors.first_name?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.first_name.message}
                </span>
              )}
            </label>
          </div>

          {/* last name */}
          <div className="relative w-full">
            <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full md:w-[280px] mdLg800:w-[342px] mx-auto flex flex-col text-left border-b-black">
              <label
                className="text-gray-500 text-[12px] mt-1 px-4"
                htmlFor="Last-name"
              >
                Last Name
              </label>
              <input
                className="py-[7.5px] px-4 focus:outline-none bg-white placeholder:text-gray-400 placeholder:text-base text-base"
                placeholder="Enter Your Last Name"
                type="text"
                {...register('last_name', {
                  required: {
                    value: true,
                    message: 'Last name is required.',
                  },
                })}
              />
            </div>
            <label className="text-[13px] font-medium left-5 flex text-left absolute top-[64px]">
              {errors.last_name?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.last_name.message}
                </span>
              )}
            </label>
          </div>
        </div>

        {/* location  */}
        <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full mx-auto flex flex-col text-left border-b-black mb-[28px]">
          <label
            className="text-gray-500 text-[12px] mt-1 px-4"
            htmlFor="location"
          >
            Location
          </label>
          <LocationSelection setSelectedLocation={setSelectedLocation} />
        </div>
        <label className="text-[13px] font-medium left-5 flex text-left">
          {errors.location?.type === 'required' && (
            <span className="label-text-alt text-red-500">
              {errors.location.message}
            </span>
          )}
        </label>

        {/* profession field  */}
        <div className="relative">
          <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full mx-auto flex flex-col text-left border-b-black mb-[42px]">
            <label
              className="text-gray-500 text-[12px] mt-1 px-4"
              htmlFor="profession"
            >
              Professional One-Liner
            </label>
            <input
              className="py-[7.5px] px-4 focus:outline-none bg-white placeholder:text-gray-400 placeholder:text-base text-base"
              type="text"
              autoComplete="off"
              placeholder="What do you do?"
              {...register('profession', {
                required: {
                  value: true,
                  message: 'Professional title is required.',
                },
              })}
            />
          </div>
          <label className="text-[13px] font-medium left-5 flex text-left absolute top-[64px]">
            {errors.profession?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.profession.message}
              </span>
            )}
            {!errors?.profession && (
              <span className="label-text-alt text-gray-400">
                e.g. Graphic designer focused on social impact ????
              </span>
            )}
          </label>
        </div>

        {/* skill set  */}
        <div className="relative">
          <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full mx-auto flex flex-col text-left border-b-black mb-[36px] relative">
            <label
              className="text-gray-500 text-[12px] mt-1 px-4"
              htmlFor="Skills"
            >
              Skills
            </label>
            <SkillSetSelector setSkillSet={setSkillSet} />
            <label
              style={{}}
              className="text-[13px] font-medium left-5 flex text-left absolute -bottom-5 bottom__fix"
            >
              {errors.skills?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.skills.message}
                </span>
              )}
              {!errors?.skills && (
                <span className="label-text-alt text-gray-400">
                  e.g. Product Design, Front End Engineering, etc.
                </span>
              )}
            </label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProfileInfoForm;
