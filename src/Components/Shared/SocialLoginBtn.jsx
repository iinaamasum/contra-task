import React from 'react';

const SocialLoginBtn = ({ children }) => {
  return (
    <div>
      <button className="bg-[#f2f2f2] rounded-full h-[48px] font-semibold mb-[16px] hover:bg-[#eeeeee] w-full sm:w-[232px] mx-auto text-base">
        <span className="flex items-center justify-center">{children}</span>
      </button>
    </div>
  );
};

export default SocialLoginBtn;
