import React from 'react';
import AuthCode from 'react-auth-code-input';
import { Link } from 'react-router-dom';
import goldenLogo from '../../Assets/logo/contra-glossy.png';
import Navbar from '../Shared/Navbar';

const VerificationPinCodePage = () => {
  const handleOnChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <Navbar />
      <section>
        <article className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-10 mt-[1.5rem] md:mt-[40px]">
          <div
            style={{
              boxShadow: 'rgb(228 232 247 / 80%) 0px 0px 24px',
            }}
            className="bg-[#fefefe] rounded-3xl px-[32px] py-[24px] md:px-[160px] md:py-[72px] w-full md:w-[800px] mx-auto text-center"
          >
            {/* heading  */}
            <div className="w-full flex items-center flex-col">
              <img className="w-16 h-16" src={goldenLogo} alt="" />
              <h2 className="text-base md:text-lg font-semibold my-3">
                We emailed you a code
              </h2>
              <p className="text-gray-500 text-lg">
                Enter in the verification code sent to:
              </p>
            </div>
            <div className="w-full flex items-center justify-center mt-5">
              <AuthCode
                onChange={handleOnChange}
                inputClassName="w-5 text-2xl font-bold text-orange-500 focus:outline-none placeholder:text-5xl placeholder:text-gray-400"
                placeholder="."
                containerClassName="border-2 border-[#F9E4A6] rounded-2xl py-[12px] grid grid-cols-6 gap-6 px-10 bg-[#fff]"
              />
            </div>
          </div>

          {/* resend code section  */}
          <div className="mt-5 flex items-center justify-center gap-5 w-[90%] md:w-[60%] lg:w-[40%] mx-auto">
            <p className="text-lg text-gray-500">
              Didn’t get your code?{' '}
              <Link
                to="/"
                className="font-semibold hover:border-b-2 border-orange-500"
              >
                Send a new code
              </Link>
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default VerificationPinCodePage;
