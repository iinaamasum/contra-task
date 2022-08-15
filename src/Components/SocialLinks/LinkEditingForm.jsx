import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiOutlineInfoCircle } from 'react-icons/ai';
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

const LinkEditingForm = ({
  addedLinks,
  prevLink,
  setIsLinkEditing,
  addedDefaultLinks,
  setAddedDefaultLinks,
}) => {
  const [linkUrlVal, setLinkUrlVal] = useState({
    value: '',
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setLinkUrlVal({ value: prevLink?.link_url });
  }, [prevLink]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const alreadyExist = addedLinks?.find(
      (link) => link.link_url === data.link_url
    );
    if (alreadyExist) {
      toast.error('Entered url already added. Please change the url.', {
        duration: 5000,
        position: 'top-right',
        style: {
          color: 'white',
          background: 'rgb(239 68 68)',
        },
        className: 'bg-red-500 text-white',
        icon: <AiOutlineInfoCircle size={60} color="white" />,
        iconTheme: {
          primary: 'red',
          secondary: 'red',
        },
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    } else {
      if (
        !data?.link_name.toLowerCase().includes('github') &&
        prevLink.link_name.toLowerCase().includes('github')
      ) {
        setAddedDefaultLinks({ ...addedDefaultLinks, github: false });
      }
      if (
        !data?.link_name.toLowerCase().includes('instagram') &&
        prevLink.link_name.toLowerCase().includes('instagram')
      ) {
        setAddedDefaultLinks({ ...addedDefaultLinks, instagram: false });
      }
      if (
        !data?.link_name.toLowerCase().includes('linkedin') &&
        prevLink.link_name.toLowerCase().includes('linkedin')
      ) {
        setAddedDefaultLinks({ ...addedDefaultLinks, linkedin: false });
      }

      if (data.link_name === '') {
        addedLinks.map((link) => {
          if (link.link_name === prevLink.link_name) {
            link.link_name = linkUrlVal.value;
            link.link_url = data.link_url;
          }
        });
      } else {
        addedLinks.map((link) => {
          if (link.link_name === prevLink.link_name) {
            link.link_name = data.link_name;
            link.link_url = data.link_url;
          }
        });
      }

      setIsLinkEditing(false);
    }
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative w-full md:w-[385px] flex flex-col justify-center mx-auto text-center">
        <div className="border-[1.5px] bg-[#fff] rounded-t-lg w-full md:w-[385px] mx-auto flex flex-col text-left mb-[24px] mt-[38px]">
          <label
            className="text-gray-500 text-[12px] mt-1 px-4"
            htmlFor="email"
          >
            URL
          </label>
          <input
            className="py-2 px-4 focus:outline-none border-b-[1px] border-black text-sm placeholder:text-base placeholder:text-gray-400"
            placeholder="Link url"
            type="text"
            defaultValue={prevLink.link_url}
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
            className="text-gray-500 text-[12px] mt-1 px-4"
            htmlFor="link_name"
          >
            Name your link
          </label>
          <div className="flex items-center border-b-[1px] border-black px-3">
            {(() => {
              if (
                prevLink?.link_name.toLowerCase().includes('github') ||
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
                prevLink?.link_name.toLowerCase().includes('linkedin') ||
                linkUrlVal?.value?.toLowerCase().includes('linkedin')
              ) {
                return <FaLinkedin size={25} />;
              } else if (linkUrlVal?.value?.toLowerCase().includes('tiktok')) {
                return <FaTiktok size={25} />;
              } else if (
                prevLink?.link_name.toLowerCase().includes('instagram') ||
                linkUrlVal?.value?.toLowerCase().includes('instagram')
              ) {
                return <FaInstagram size={25} />;
              } else if (linkUrlVal?.value?.toLowerCase().includes('twitter')) {
                return <FaTwitter size={25} />;
              }
              return linkUrlVal.value && <HiOutlineExternalLink size={25} />;
            })()}

            <input
              className="py-2 px-2 focus:outline-none text-sm placeholder:text-base placeholder:text-gray-400"
              type="text"
              placeholder="Link Name"
              defaultValue={prevLink.link_name}
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
            setIsLinkEditing(false);
          }}
          className="rounded-full h-12 w-[152px] bg-[#f0f0f0] hover:bg-[#e3e3e3] text-black font-semibold text-md md:text-lg shadow-sm"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-full h-12 w-[148px] bg-[#fff] hover:bg-[#f2f2f2] border-[1px] border-[#f0bc27] text-black font-semibold text-md md:text-lg shadow-sm"
        >
          Save Link
        </button>
      </div>
    </form>
  );
};

export default LinkEditingForm;
