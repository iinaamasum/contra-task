import React from 'react';

const Button = ({ children }) => {
  return (
    <section>
      <button className="rounded-full h-12 w-full md:w-[232px] bg-[#f2c94c] hover:bg-[#f2c84cc3] text-black font-semibold text-xl shadow-sm">
        {children}
      </button>
    </section>
  );
};

export default Button;
