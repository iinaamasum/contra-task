import React from 'react';
import Button from '../Shared/Button';
import Divider from '../Shared/Divider';
import Social from './Social';

const Login = () => {
  return (
    <section>
      <article className="flex flex-col items-center justify-center h-screen px-4 md:px-10">
        <div
          style={{ boxShadow: 'rgb(228 232 247 / 80%) 0px 0px 24px' }}
          className="bg-[#fefefe] rounded-3xl p-5 w-full md:w-3/4 lg:w-[55%] mx-auto text-center py-20 md:mt-7"
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold my-5">
            Welcome back to Contra
          </h2>

          {/* email form section  */}
          <form>
            <div className="border-[1.5px] rounded-t-lg w-full md:w-[70%] mx-auto flex flex-col text-left mb-5">
              <label
                className="text-gray-500 text-sm mt-1 px-4 font-medium tracking-wide"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="py-2 px-4 focus:outline-none text-purple-600 font-semibold focus:border-b-[2px] focus:border-blue-600"
                type="text"
              />
            </div>
            <Button type="submit">Log In</Button>
            <Divider />
            <Social />
          </form>
        </div>

        {/* sign up section  */}
        <div className="mt-5 flex items-center gap-5 w-[90%] md:w-[60%] lg:w-[40%] mx-auto">
          <p className="text-[13px] sm:text-base lg:text-lg xl:text-xl xxl:text-2xl leading-tight w-[60%] sm:w-[70%]">
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
  );
};

export default Login;
