import React from 'react';

const SocialLoginBtn = ({ children }) => {
  return (
    <div>
      <button className="bg-[#e3e3e379] rounded-full py-2 font-semibold mb-3 hover:bg-[#e3e3e3] w-full md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto text-center text-md md:text-lg">
        <span className="text-center inline-flex items-center">{children}</span>
      </button>
    </div>
  );
};

export default SocialLoginBtn;
