import React from 'react';
import Button from '../Shared/Button';
import Divider from '../Shared/Divider';
import Social from './Social';

const Login = () => {
  return (
    <section>
      <article className="flex flex-col items-center justify-center h-screen">
        <div className="bg-[#fefefe] rounded-3xl shadow-xl p-5 w-full md:w-[53%] mx-auto text-center py-20 mt-7">
          <h2 className="text-2xl md:text-4xl font-bold my-5">
            Welcome back to Contra
          </h2>
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
        <div className="mt-5 flex items-center gap-5 w-[90%] md:w-[40%] mx-auto">
          <p className="text-[17px] leading-tight">
            <span className="font-bold">New To Contra?</span> We're an
            Independent-first community and commission-free hiring platform
            empowering the future of flexible work.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full w-48">
            Sign Up
          </button>
        </div>
      </article>
    </section>
  );
};

export default Login;
