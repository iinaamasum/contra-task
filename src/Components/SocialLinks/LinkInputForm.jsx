import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineExternalLink } from 'react-icons/hi';

const LinkInputForm = ({ setLinkInputName, linkInputName }) => {
  const [linkUrlVal, setLinkUrlVal] = useState({
    value: '',
  });
  const linkName = (fullLink) => {
    let linkFirstPart = '';
    if (fullLink?.length) linkFirstPart = fullLink.split('.')[0];
    if (linkFirstPart.includes('http:')) {
      linkFirstPart =
        linkFirstPart.charAt(7).toUpperCase() + linkFirstPart.slice(8);
    } else if (linkFirstPart.includes('https:')) {
      linkFirstPart =
        linkFirstPart.charAt(8).toUpperCase() + linkFirstPart.slice(9);
    } else {
      linkFirstPart =
        linkFirstPart.charAt(0).toUpperCase() + linkFirstPart.slice(1);
    }
    return linkFirstPart;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert('congrats');
  };

  const handleLinkUrlChange = (e) => {
    let value = '';
    if (e.target.value.includes('.')) value = linkName(e.target.value);
    console.log(value);
    setLinkUrlVal({ value });
  };
  return (
    <form id="user-lins-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full md:w-[385px] mx-auto flex flex-col text-left mb-[24px] mt-[38px]">
        <label className="text-gray-500 text-sm mt-1 px-4" htmlFor="email">
          URL
        </label>
        <input
          onChange={handleLinkUrlChange}
          className="py-2 px-4 focus:outline-none border-b-[1px] border-black"
          placeholder="Link url"
          type="text"
        />
      </div>
      <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full md:w-[385px] mx-auto flex flex-col text-left mb-[48px]">
        <label className="text-gray-500 text-sm mt-1 px-4" htmlFor="email">
          Name your link
        </label>
        <div className="flex items-center  border-b-[1px] border-black px-3">
          {linkUrlVal && <HiOutlineExternalLink size={25} />}

          <input
            className="py-2 px-2 focus:outline-none"
            type="text"
            placeholder="Link Name"
            defaultValue={linkUrlVal.value}
          />
        </div>
      </div>

      {/* link cancel and submit btn  */}
      <div className="flex items-center justify-center gap-x-4">
        <button
          onClick={() => setLinkInputName({ ...linkInputName, option: '' })}
          className="rounded-full h-12 w-[148px] bg-[#f2f2f2] hover:bg-[#f0f0f0] text-black font-semibold text-md md:text-lg shadow-sm"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-full h-12 w-[148px] bg-[#fff] hover:bg-[#f6f6f6] border-2 border-[#f2c94c] text-black font-semibold text-md md:text-lg shadow-sm"
        >
          Save Link
        </button>
      </div>
    </form>
  );
};

export default LinkInputForm;
