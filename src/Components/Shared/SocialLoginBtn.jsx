import React from 'react';

const SocialLoginBtn = ({ children }) => {
  return (
    <div>
      <button className="bg-[#e3e3e32a] rounded-full h-[48px] font-semibold mb-[16px] hover:bg-[#e3e3e3] w-full md:w-[250px] mx-auto text-md md:text-lg">
        <span className="flex items-center justify-center">{children}</span>
      </button>
    </div>
  );
};

export default SocialLoginBtn;
