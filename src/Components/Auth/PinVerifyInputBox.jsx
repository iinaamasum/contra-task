import React from 'react';

const PinVerifyInputBox = () => {
  return (
    <div class="w-full flex items-center justify-center mt-5">
      <div class="border-2 border-orange-500 rounded-2xl px-5 py-3 grid grid-cols-6 gap-6">
        <input
          maxLength={1}
          className="w-5 text-2xl font-bold text-orange-500 focus:outline-none"
          type="text"
          placeholder="."
        />
        <input
          maxLength={1}
          className="w-5 text-2xl font-bold text-orange-500 focus:outline-none"
          type="text"
          placeholder="."
        />
        <input
          maxLength={1}
          className="w-5 text-2xl font-bold text-orange-500 focus:outline-none placeholder:text-3xl"
          type="text"
          placeholder="."
        />
        <input
          maxLength={1}
          className="w-5 text-2xl font-bold text-orange-500 focus:outline-none"
          type="text"
          placeholder="."
        />
        <input
          maxLength={1}
          className="w-5 text-2xl font-bold text-orange-500 focus:outline-none"
          type="text"
          placeholder="."
        />
        <input
          maxLength={1}
          className="w-5 text-2xl font-bold text-orange-500 focus:outline-none"
          type="text"
          placeholder="."
        />
      </div>
    </div>
  );
};

export default PinVerifyInputBox;
