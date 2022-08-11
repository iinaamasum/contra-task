import React from 'react';

const Button = ({ children }) => {
  return (
    <section>
      <button className="rounded-full h-12 w-full sm:w-[232px] bg-[#f0bc27] hover:bg-[#f2c84ce1] text-black font-semibold text-md md:text-lg shadow-sm">
        {children}
      </button>
    </section>
  );
};

export default Button;
