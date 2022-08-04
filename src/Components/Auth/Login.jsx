import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import EmailForm from './EmailForm';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/sign-up');
  };
  return (
    <>
      <Navbar />
      <section>
        <article className="flex flex-col items-center justify-center h-screen px-4 md:px-10 backdrop-blur-3xl">
          <div
            style={{
              boxShadow: 'rgb(228 232 247 / 80%) 0px 0px 24px',
            }}
            className="bg-[#fefefe] rounded-3xl p-5 w-full md:w-3/4 lg:w-[55%] xxl:w-[40%] mx-auto text-center py-16 md:mt-7 backdrop-blur-xl"
          >
            {/* heading  */}
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mt-5 mb-10">
              Welcome back to Contra
            </h2>

            {/* email form section  */}
            <EmailForm handleSubmit={handleSubmit} btnTitle="Log In" />
          </div>

          {/* sign up redirect section  */}
          <div className="mt-5 flex items-center gap-5 w-[90%] md:w-[60%] lg:w-[40%] mx-auto">
            <p className="text-[13px] sm:text-base lg:text-lg xxl:text-xl leading-tight w-[60%] sm:w-[70%]">
              <span className="font-bold">New To Contra?</span> We're an
              Independent-first community and commission-free hiring platform
              empowering the future of flexible work.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full w-[40%] sm:w-[30%]">
              Sign Up
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default Login;
