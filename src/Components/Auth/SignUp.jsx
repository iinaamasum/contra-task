import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import EmailForm from './EmailForm';

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Not implemented yet');
  };
  return (
    <>
      <Navbar navLogInLink={true} />

      <section className="bg-[#fafafa] py-10">
        <article className="flex flex-col items-center justify-center h-screen px-4 md:px-10">
          <div
            style={{
              boxShadow: 'rgb(228 232 247 / 80%) 0px 0px 24px',
            }}
            className="w-full md:w-3/4 lg:w-[55%] xxl:w-[40%] mx-auto text-center rounded-3xl"
          >
            <div className="bg-[#fefefe] py-16 rounded-t-3xl">
              <div className="my-5">
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4">
                  Sign up as an Independent
                </h2>
                <p className="text-base md:text-lg xxl:text-xl text-gray-500 mb-3">
                  Not looking to get hired?{' '}
                  <span className="font-semibold inline-flex items-center cursor-pointer hover:border-b-[3px] border-orange-500">
                    Sign Up As A Client{' '}
                    <BsInfoCircle size={20} className="ml-2" />
                  </span>
                </p>
              </div>

              {/* email form section  */}
              <EmailForm handleSubmit={handleSubmit} btnTitle="Sign Up" />
            </div>
            <div className="bg-[#fefefe] mt-[4px] text-center text-gray-500 py-5 rounded-b-3xl">
              <span>
                By continuing, you agree to{' '}
                <Link to="/" className="underline">
                  Contra's Terms of Use
                </Link>{' '}
                and confirm that
              </span>
              <br />
              <span>
                you have read{' '}
                <Link to="/" className="underline">
                  Contra's Privacy Policy
                </Link>
              </span>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default SignUp;
