import React from 'react';

const Divider = () => {
  return (
    <section className="text-center my-4">
      <div className="flex items-center justify-center">
        <div className="w-28 border-b-2 border-gray-300"></div>
        <p className="text-gray-500 text-xs px-2">OR</p>
        <div className="w-28 border-b-2 border-gray-300"></div>
      </div>
    </section>
  );
};

export default Divider;
