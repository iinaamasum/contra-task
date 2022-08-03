import React from 'react';

const SocialLoginBtn = ({ children }) => {
  return (
    <div>
      <button className="bg-[#e3e3e379] rounded-full px-5 py-3 text-xl font-semibold inline-flex items-center mb-3 hover:bg-[#e3e3e3]">
        {children}
      </button>
    </div>
  );
};

export default SocialLoginBtn;
