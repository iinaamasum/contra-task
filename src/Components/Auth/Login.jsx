import React from 'react';
import Button from '../Shared/Button';
import Divider from '../Shared/Divider';

const Login = () => {
  return (
    <section>
      <article className="flex items-center justify-center h-[80vh]">
        <div className="bg-[#fefefe] rounded-xl shadow-2xl p-5 w-full md:w-1/2 mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold my-5">
            Welcome back to Contra
          </h2>
          <form>
            <div className="border-2 rounded-t-lg w-full md:w-[70%] mx-auto flex flex-col text-left mb-5">
              <label
                className="text-gray-500 text-sm mt-1 px-4 font-medium tracking-wide"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="py-2 px-4 focus:outline-none text-purple-600 font-semibold border-b-2 focus:border-blue-600"
                type="text"
              />
            </div>
            <Button type="submit" value="Login" />
            <Divider />
          </form>
        </div>
      </article>
    </section>
  );
};

export default Login;
