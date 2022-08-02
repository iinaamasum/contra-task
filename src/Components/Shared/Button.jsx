import React from 'react';

const Button = ({ value }) => {
  return (
    <section>
      <button className="rounded-full h-12 w-56 bg-[#f2c94c] hover:bg-[#f2c84cc3] text-black font-semibold text-xl shadow-sm">
        {value}
      </button>
    </section>
  );
};

export default Button;
