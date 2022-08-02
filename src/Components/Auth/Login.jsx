import React from 'react';

const Login = () => {
  return (
    <section>
      <article className="flex items-center justify-center h-[80vh]">
        <div className="bg-[#fefefe] rounded-xl shadow-2xl p-5 w-full md:w-1/2 mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold">
            Welcome back to Contra
          </h2>
          <form>
            <input className="bg-gray-300" type="text" />
            <input className="bg-gray-300" type="submit" value="Log In" />
          </form>
        </div>
      </article>
    </section>
  );
};

export default Login;
