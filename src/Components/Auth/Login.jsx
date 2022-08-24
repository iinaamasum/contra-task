import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import EmailForm from './EmailForm';

const Login = () => {
  const navigate = useNavigate();
  const [enteredEmail, setEnteredEmail] = useState({});

  useEffect(() => {
    if (enteredEmail?.email) {
      navigate('/verify-pin-code');
    }
  }, [enteredEmail, navigate]);
  return (
    <>
      <Navbar />
      <section>
        <article className="flex flex-col items-center justify-center px-4 mt-[1.5rem] md:mt-[40px]">
          <div
            style={{
              boxShadow: 'rgb(228 232 247 / 80%) 0px 0px 24px',
            }}
            className="bg-[#fafafa] rounded-2xl px-[32px] py-[24px] md:px-[160px] md:pt-[66px] md:pb-[80px] w-full mdLg800:w-[800px] mx-auto text-center"
          >
            {/* heading  */}
            <h4 className="text-[1.4375rem] md:text-[2.215rem] font-[700] mb-[19px] tracking-tight">
              Welcome back to Contra
            </h4>

            {/* email form section  */}
            <EmailForm setEnteredEmail={setEnteredEmail} btnTitle="Log In" />
          </div>

          {/* sign up redirect section  */}
          <div className="my-5 lg:flex items-center gap-2 w-[95%] md:w-[640px] mx-auto text-center">
            <p className="text-[13px] sm:text-base font-medium sm:leading-4 lg:max-w-[28rem] text-left text-gray-500">
              <span className="font-bold text-gray-700">New To Contra?</span>{' '}
              We're an Independent-first community and commission-free hiring
              platform empowering the future of flexible work.
            </p>
            <div className="sm:w-[156px] mx-auto">
              <button
                onClick={() => navigate('/sign-up')}
                className="bg-black text-white rounded-full px-[25px] py-[12px] sm:px-[46px] sm:py-[18px] mt-[16px] lg:mt-0 hover:bg-gray-800"
              >
                Sign Up
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Login;
