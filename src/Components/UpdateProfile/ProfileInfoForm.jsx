import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import LocationSelection from './LocationSelection';
import ProfileImage from './ProfileImage';
import SkillSetSelector from './SkillSetSelector';

const ProfileInfoForm = ({ setUserData }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const [skillSet, setSkillSet] = useState([]);
  const [profileImg, setProfileImg] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setUserData(data);
    console.log(selectedLocation);
    console.log(skillSet);
  };
  console.log(profileImg);
  return (
    <section>
      <form id="user-profile-form" onSubmit={handleSubmit(onSubmit)}>
        {/* user Image  */}
        <ProfileImage setProfileImg={setProfileImg} />

        <div className="flex items-center gap-x-[16px] mb-[42px]">
          {/* first name */}
          <div className="relative">
            <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full md:w-[342px] mx-auto flex flex-col text-left border-b-black">
              <label
                className="text-gray-500 text-sm mt-1 px-4"
                htmlFor="First-name"
              >
                First Name
              </label>
              <input
                className="py-[6.5px] px-4 focus:outline-none"
                type="text"
                {...register('first_name', {
                  required: {
                    value: true,
                    message: 'First name is required.',
                  },
                })}
              />
              <label className="level font-bold"></label>
            </div>
            <label className="text-[13px] flex text-left absolute top-16">
              {errors.first_name?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.first_name.message}
                </span>
              )}
            </label>
          </div>

          {/* last name */}
          <div className="relative">
            <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full md:w-[342px] mx-auto flex flex-col text-left border-b-black">
              <label
                className="text-gray-500 text-sm mt-1 px-4"
                htmlFor="Last-name"
              >
                Last Name
              </label>
              <input
                className="py-[6.5px] px-4 focus:outline-none"
                type="text"
                {...register('last_name', {
                  required: {
                    value: true,
                    message: 'Last name is required.',
                  },
                })}
              />
              <label className="level font-bold"></label>
            </div>
            <label className="text-[13px] flex text-left absolute top-16">
              {errors.last_name?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.last_name.message}
                </span>
              )}
            </label>
          </div>
        </div>

        {/* location  */}
        <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full mx-auto flex flex-col text-left border-b-black mb-[42px]">
          <label className="text-gray-500 text-sm mt-1 px-4" htmlFor="location">
            Location
          </label>
          <LocationSelection setSelectedLocation={setSelectedLocation} />
        </div>
        <label className="text-[13px] flex text-left">
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
              className="text-gray-500 text-sm mt-1 px-4"
              htmlFor="profession"
            >
              Professional One-Liner
            </label>
            <input
              className="py-[6.5px] px-4 focus:outline-none"
              type="text"
              placeholder="What do you do?"
              {...register('profession', {
                required: {
                  value: true,
                  message: 'Professional title is required.',
                },
              })}
            />
          </div>
          <label className="text-[13px] flex text-left absolute top-16">
            {errors.profession?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.profession.message}
              </span>
            )}
            {!errors?.profession && (
              <span className="label-text-alt text-gray-400">
                e.g. Graphic designer focused on social impact 🚀
              </span>
            )}
          </label>
        </div>

        {/* skill set  */}
        <div className="relative">
          <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full mx-auto flex flex-col text-left border-b-black mb-[42px]">
            <label className="text-gray-500 text-sm mt-1 px-4" htmlFor="Skills">
              Skills
            </label>
            <SkillSetSelector setSkillSet={setSkillSet} />
          </div>
          <label className="text-[13px] flex text-left absolute top-[70px]">
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
      </form>
    </section>
  );
};

export default ProfileInfoForm;
