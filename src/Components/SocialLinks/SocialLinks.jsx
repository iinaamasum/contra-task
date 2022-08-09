import React from 'react';
import { BiPlus } from 'react-icons/bi';
import {
  FaBehance,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaXbox,
} from 'react-icons/fa';
import Navbar from '../Shared/Navbar';

const SocialLinks = () => {
  return (
    <>
      <Navbar />

      <section>
        <article className="flex flex-col items-center justify-center px-4 md:px-10 mt-[1.5rem] md:mt-[76px]">
          <div
            style={{
              boxShadow: 'rgb(228 232 247 / 80%) 0px 0px 24px',
            }}
            className="bg-[#fafafa] rounded-t-3xl px-[32px] py-[24px] md:px-[48px] md:py-[42px] w-full md:w-[800px] mx-auto text-center"
          >
            <div className="rounded-t-3xl">
              <div className="">
                <h2 className="text-[1.4375rem] md:text-[2.215rem] font-[700] tracking-tight mb-2">
                  Add Your Links
                </h2>
                <div className="flex items-center justify-center gap-x-2 md:gap-x-10 my-[22px]">
                  <div className="flex items-center justify-center gap-x-2 md:gap-x-10">
                    <FaFacebook size={25} className="text-gray-400" />
                    <FaTiktok size={25} className="text-gray-400" />
                    <FaGithub size={25} className="text-gray-400" />
                    <FaLinkedin size={25} className="text-gray-400" />
                  </div>
                  <div className="flex items-center justify-center gap-x-2 md:gap-x-10">
                    <FaTwitter size={25} className="text-gray-400" />
                    <FaXbox size={25} className="text-gray-400" />
                    <FaInstagram size={25} className="text-gray-400" />
                    <FaBehance size={25} className="text-gray-400" />
                  </div>
                </div>
                <p className="text-gray-400">
                  Add any links that showcase your work, recognition,
                  personality and more!
                </p>
              </div>

              {/* add link  */}
              <button className="inline-flex items-center justify-center gap-x-1 border-[2px] border-[#f2c94c] rounded-full px-[30px] py-[11px] font-semibold my-[40px]">
                <BiPlus size={25} />
                Add Link
              </button>

              {/* suggestions  */}
              <div className="flex items-center justify-center gap-x-3 text-sm text-gray-500">
                <p className="font-semibold text-base">Suggestions:</p>
                <button className="inline-flex items-center justify-center gap-x-1 bg-white py-2 px-2 rounded-full">
                  <BiPlus size={25} /> Add LinkedIn
                </button>
                <button className="inline-flex items-center justify-center gap-x-1 bg-white py-2 px-2 rounded-full">
                  <BiPlus size={25} /> Add GitHub
                </button>
                <button className="inline-flex items-center justify-center gap-x-1 bg-white py-2 px-2 rounded-full">
                  <BiPlus size={25} /> Add Instagram
                </button>
              </div>
            </div>
          </div>

          {/* form submit btn  */}
          <div className="bg-[#fff] mt-[2.5px] py-[20px] w-full md:w-[800px] mx-auto text-end text-gray-500 rounded-b-3xl leading-5 text-[15px] mb-10">
            <button
              type="submit"
              form=""
              className="rounded-full h-12 w-[100px] sm:w-[148px] mr-[24px] bg-[#f2c94c] hover:bg-[#f2c84cc3] text-black font-semibold text-md md:text-lg shadow-sm"
            >
              Next
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default SocialLinks;
