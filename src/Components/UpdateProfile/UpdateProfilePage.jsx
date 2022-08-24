import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BtnLoading from '../Shared/BtnLoading';
import Navbar from '../Shared/Navbar';
import ImageEditorModal from './ImageEditorModal';
import ProfileInfoForm from './ProfileInfoForm';

const UpdateProfilePage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [profileImg, setProfileImg] = useState({});
  const [editedImg, setEditedImg] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Navbar />
      {profileImg.name ? (
        <ImageEditorModal
          profileImg={profileImg}
          setEditedImg={setEditedImg}
          setProfileImg={setProfileImg}
        />
      ) : (
        <section className="">
          <article className="flex flex-col items-center justify-center px-4 mt-[1.5rem] md:mt-[76px] relative">
            <div
              style={{
                boxShadow: 'rgb(228 232 247 / 80%) 0px 0px 24px',
              }}
              className="bg-[#fefefe] rounded-b-2xl md:rounded-b-none rounded-t-2xl px-[32px] py-[24px] md:py-[42px] md:px-auto mdLg800:px-[48px] w-full md:w-[640px] mdLg800:w-[800px] mx-auto text-center mb-32 md:mb-0"
            >
              <div className="rounded-t-3xl">
                <div className="">
                  <h2 className="text-[1.4375rem] md:text-[2.215rem] font-[700] tracking-tight mb-2">
                    Let's get you started! 🎉
                  </h2>
                </div>

                {/* form section  */}
                <ProfileInfoForm
                  setUserData={setUserData}
                  setProfileImg={setProfileImg}
                  editedImg={editedImg}
                  setIsLoading={setIsLoading}
                />
              </div>
            </div>

            {/* form submit btn  */}
            <div className="bg-[#fefefe] mt-[2px] py-[10px] sm:py-[14px] md:py-[20px] w-full md:w-[640px] mdLg800:w-[800px] mx-auto text-end text-gray-500 md:rounded-b-2xl leading-5 text-[15px] bottom-0 md:relative md:mb-10 fixed">
              {isLoading ? (
                <button
                  type="submit"
                  form="user-profile-form"
                  className="rounded-full h-12 w-[120px] sm:w-[148px] mr-[24px] bg-[#f0bc27] hover:bg-[#f2c84ce1] text-black font-semibold text-lg shadow-sm"
                >
                  <BtnLoading />
                </button>
              ) : (
                <button
                  type="submit"
                  form="user-profile-form"
                  className="rounded-full h-12 w-[120px] sm:w-[148px] mr-[24px] bg-[#f0bc27] hover:bg-[#f2c84ce1] text-black font-semibold text-lg shadow-sm"
                >
                  Next
                </button>
              )}
            </div>
          </article>
        </section>
      )}
    </>
  );
};

export default UpdateProfilePage;
