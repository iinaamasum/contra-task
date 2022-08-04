import React, { useState } from 'react';

const PinVerifyInputBox = () => {
  const [enteredPin, setEnteredPin] = useState({
    val1: '',
    val2: '',
    val3: '',
    val4: '',
  });
  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split('-');

    console.log(fieldName);

    if (value.length >= maxLength) {
      if (parseInt(fieldIndex) < 4) {
        const nextSibling = document.querySelector(
          `input[name=val-${parseInt(fieldIndex) + 1}]`
        );

        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
      setEnteredPin({
        ...enteredPin,
        [`val${fieldIndex}`]: value,
      });
    }
  };
  return (
    <div className="w-full flex items-center justify-center mt-5">
      <div className="border-2 border-[#F9E4A6] rounded-2xl py-3 grid grid-cols-4 gap-6 px-10">
        <input
          maxLength={1}
          className="w-5 text-2xl font-bold text-orange-500 focus:outline-none placeholder:text-5xl placeholder:text-gray-400"
          type="text"
          name="val-1"
          placeholder="."
          onChange={handleChange}
        />
        <input
          maxLength={1}
          className="w-5 text-2xl font-bold text-orange-500 focus:outline-none placeholder:text-5xl placeholder:text-gray-400"
          type="text"
          name="val-2"
          placeholder="."
          onChange={handleChange}
        />
        <input
          maxLength={1}
          className="w-5 text-2xl font-bold text-orange-500 focus:outline-none placeholder:text-5xl placeholder:text-gray-400"
          type="text"
          name="val-3"
          placeholder="."
          onChange={handleChange}
        />
        <input
          maxLength={1}
          className="w-5 text-2xl font-bold text-orange-500 focus:outline-none placeholder:text-5xl placeholder:text-gray-400"
          type="text"
          placeholder="."
          name="val-4"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PinVerifyInputBox;
