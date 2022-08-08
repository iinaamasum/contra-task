import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import ProfileInfoForm from './ProfileInfoForm';

const UpdateProfilePage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  console.log(userData);

  return (
    <>
      <Navbar navLogInLink={true} />

      <section>
        <article className="flex flex-col items-center justify-center px-4 md:px-10 mt-[1.5rem] md:mt-[40px]">
          <div
            style={{
              boxShadow: 'rgb(228 232 247 / 80%) 0px 0px 24px',
            }}
            className="bg-[#fefefe] rounded-t-3xl px-[32px] py-[24px] md:px-[48px] md:py-[42px] w-full md:w-[800px] mx-auto text-center"
          >
            <div className="rounded-t-3xl">
              <div className="">
                <h2 className="text-[1.4375rem] md:text-[2.215rem] font-[700] tracking-tight mb-2">
                  Let's get you started! 🎉
                </h2>
              </div>

              {/* form section  */}
              <ProfileInfoForm setUserData={setUserData} />
            </div>
          </div>
          <div className="bg-[#fefefe] mt-[2.5px] py-[25px] w-full md:w-[800px] mx-auto text-end text-gray-500 rounded-b-3xl leading-5 text-[15px] mb-5">
            <button
              type="submit"
              form="user-profile-form"
              className="rounded-full h-12 w-[148px] mr-[24px] bg-[#f2c94c] hover:bg-[#f2c84cc3] text-black font-semibold text-md md:text-lg shadow-sm"
            >
              Next
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default UpdateProfilePage;
