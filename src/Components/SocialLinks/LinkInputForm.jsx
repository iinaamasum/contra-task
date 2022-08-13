import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FaBehance,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import BtnLoading from '../Shared/BtnLoading';

const LinkInputForm = ({
  setLinkInputName,
  linkInputName,
  setAddedLinks,
  addedLinks,
  linkFixedInputName,
  setLinkFixedInputName,
}) => {
  const [linkUrlVal, setLinkUrlVal] = useState({
    value: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setLinkUrlVal({ value: linkInputName.name });
  }, [linkInputName, linkFixedInputName]);

  const onSubmit = async (data, e) => {
    if (data.link_name === '') {
      await setAddedLinks([
        ...addedLinks,
        { ...data, link_name: linkUrlVal.value },
      ]);
    } else {
      await setAddedLinks([...addedLinks, data]);
    }
    setLinkInputName({ name: '', option: '' });
    setLinkFixedInputName({ name: '', option: '' });
  };

  const linkName = (fullLink) => {
    let linkFirstPart = '';
    // split the url
    if (fullLink?.length && fullLink.includes('www.m.'))
      linkFirstPart = fullLink.split('.')[2];
    else if (fullLink?.length && fullLink.includes('www.'))
      linkFirstPart = fullLink.split('.')[1];
    else linkFirstPart = fullLink.split('.')[0];

    // separate link name
    if (linkFirstPart.includes('https://')) {
      linkFirstPart =
        linkFirstPart.charAt(8).toUpperCase() + linkFirstPart.slice(9);
    } else if (linkFirstPart.includes('http://')) {
      linkFirstPart =
        linkFirstPart.charAt(7).toUpperCase() + linkFirstPart.slice(8);
    } else {
      linkFirstPart =
        linkFirstPart.charAt(0).toUpperCase() + linkFirstPart.slice(1);
    }
    return linkFirstPart;
  };

  return (
    <form id="user-lins-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative w-full md:w-[385px] flex flex-col justify-center mx-auto text-center">
        <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full md:w-[385px] mx-auto flex flex-col text-left mb-[24px] mt-[38px]">
          <label className="text-gray-500 text-sm mt-1 px-4" htmlFor="email">
            URL
          </label>
          <input
            className="py-2 px-4 focus:outline-none border-b-[1px] border-black"
            placeholder="Link url"
            type="text"
            {...register('link_url', {
              required: {
                value: true,
                message: 'Link Url is required.',
              },
              onChange: (e) => {
                let value = '';
                if (e.target.value.includes('.'))
                  value = linkName(e.target.value);
                setLinkUrlVal({ value });
              },
            })}
          />
        </div>
        <label className="text-[13px] flex text-left absolute top-[106px]">
          {errors.link_url?.type === 'required' && (
            <span className="label-text-alt text-red-500">
              {errors.link_url.message}
            </span>
          )}
        </label>
      </div>

      <div className="relative w-full md:w-[385px] flex flex-col justify-center mx-auto text-center">
        <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full md:w-[385px] mx-auto flex flex-col text-left mb-[30px]">
          <label
            className="text-gray-500 text-sm mt-1 px-4"
            htmlFor="link_name"
          >
            Name your link
          </label>
          <div className="flex items-center  border-b-[1px] border-black px-3">
            {(() => {
              if (
                linkFixedInputName?.name === 'GitHub' ||
                linkUrlVal?.value?.toLowerCase().includes('github')
              ) {
                return <FaGithub size={25} />;
              } else if (
                linkUrlVal?.value?.toLowerCase().includes('facebook')
              ) {
                return <FaFacebook size={25} />;
              } else if (linkUrlVal?.value?.toLowerCase().includes('behance')) {
                return <FaBehance size={25} />;
              } else if (
                linkFixedInputName?.name === 'LinkedIn' ||
                linkUrlVal?.value?.toLowerCase().includes('linkedin')
              ) {
                return <FaLinkedin size={25} />;
              } else if (linkUrlVal?.value?.toLowerCase().includes('tiktok')) {
                return <FaTiktok size={25} />;
              } else if (
                linkFixedInputName?.name === 'Instagram' ||
                linkUrlVal?.value?.toLowerCase().includes('instagram')
              ) {
                return <FaInstagram size={25} />;
              } else if (linkUrlVal?.value?.toLowerCase().includes('twitter')) {
                return <FaTwitter size={25} />;
              }
              return linkUrlVal.value && <HiOutlineExternalLink size={25} />;
            })()}

            <input
              className="py-2 px-2 focus:outline-none"
              type="text"
              placeholder="Link Name"
              defaultValue={linkFixedInputName?.name || linkUrlVal.value}
              {...register('link_name', {
                validate: () => {
                  if (watch('link_url') === '') {
                    return 'Link Name is required';
                  }
                },
              })}
            />
          </div>
          <label className="text-[13px] flex text-left absolute top-[67px]">
            {errors.link_name?.type === 'validate' && (
              <span className="label-text-alt text-red-500">
                {errors.link_name.message}
              </span>
            )}
          </label>
        </div>
      </div>

      {/* link cancel and submit btn  */}
      <div className="flex items-center justify-center gap-x-3">
        <button
          onClick={(e) => {
            e.preventDefault();
            if (linkFixedInputName?.option)
              setLinkFixedInputName({ name: '', option: '' });
            else if (linkInputName?.option)
              setLinkInputName({ name: '', option: '' });
          }}
          className="rounded-full h-12 w-[152px] bg-[#f0f0f0] hover:bg-[#e3e3e3] text-black font-semibold text-md md:text-lg shadow-sm"
        >
          Cancel
        </button>
        {isLoading ? (
          <button
            type="submit"
            className="rounded-full h-12 w-[148px] bg-[#fff] hover:bg-[#f2f2f2] border-[1px] border-[#f0bc27] text-black font-semibold text-md md:text-lg shadow-sm"
          >
            <BtnLoading />
          </button>
        ) : (
          <button
            type="submit"
            className="rounded-full h-12 w-[148px] bg-[#fff] hover:bg-[#f2f2f2] border-[1px] border-[#f0bc27] text-black font-semibold text-md md:text-lg shadow-sm"
          >
            Save Link
          </button>
        )}
      </div>
    </form>
  );
};

export default LinkInputForm;
