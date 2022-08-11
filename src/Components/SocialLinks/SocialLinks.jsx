import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import LinkInputForm from './LinkInputForm';

const SocialLinks = () => {
  const [linkInputName, setLinkInputName] = useState({
    option: '',
    name: '',
  });
  const [addedLinks, setAddedLinks] = useState([]);
  const navigate = useNavigate();

  const handleLinkInput = () => {
    setLinkInputName({ ...linkInputName, option: 'addLink' });
  };
  return (
    <>
      <Navbar />

      <section>
        <article className="flex flex-col items-center justify-center px-4 md:px-10 mt-[1.5rem] md:mt-[72px]">
          <div
            style={{
              boxShadow: 'rgb(228 232 247 / 80%) 0px 0px 24px',
            }}
            className="bg-[#f6f6f6] rounded-b-2xl sm:rounded-b-none rounded-t-2xl px-[32px] py-[24px] md:px-[48px] md:py-[42px] w-full md:w-[800px] mx-auto text-center"
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

              {linkInputName.option ? (
                <LinkInputForm
                  setLinkInputName={setLinkInputName}
                  linkInputName={linkInputName}
                  setAddedLinks={setAddedLinks}
                  addedLinks={addedLinks}
                />
              ) : (
                <>
                  {/* add link  */}
                  <button
                    onClick={handleLinkInput}
                    className="inline-flex items-center justify-center gap-x-1 border-[2px] border-[#f2c94c] rounded-full px-[30px] py-[11px] font-semibold my-[40px]"
                  >
                    <BiPlus size={25} />
                    Add Link
                  </button>

                  {/* suggestions  */}
                  <div className="md:flex items-center justify-center gap-x-3 text-sm text-gray-500">
                    <p className="font-semibold text-base mb-[32px] md:mb-0">
                      Suggestions:
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-x-[8px]">
                      <button
                        onClick={() =>
                          setLinkInputName({
                            name: 'LinkedIn',
                            option: 'linkedin',
                          })
                        }
                        className="inline-flex items-center justify-center gap-x-1 bg-white py-[7px] w-[160px] sm:w-[132px] mb-3 sm:mb-0 rounded-full"
                      >
                        <BiPlus size={25} /> Add LinkedIn
                      </button>
                      <button
                        onClick={() =>
                          setLinkInputName({
                            name: 'GitHub',
                            option: 'github',
                          })
                        }
                        className="inline-flex items-center justify-center gap-x-1 bg-white py-[7px] w-[160px] sm:w-[132px] mb-3 sm:mb-0 rounded-full"
                      >
                        <BiPlus size={25} /> Add GitHub
                      </button>
                      <button
                        onClick={() =>
                          setLinkInputName({
                            name: 'Instagram',
                            option: 'instagram',
                          })
                        }
                        className="inline-flex items-center justify-center gap-x-1 bg-white py-[7px] w-[160px] sm:w-[132px] mb-3 sm:mb-0 rounded-full"
                      >
                        <BiPlus size={25} /> Add Instagram
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* form submit btn  */}
          <div className="bg-[#fff] mt-[2.5px] py-[20px] w-full md:w-[800px] mx-auto text-end text-gray-500 md:rounded-b-3xl leading-5 text-[15px] flex items-center justify-between px-5 absolute bottom-0 md:relative">
            <button
              onClick={() => navigate('/update-profile')}
              className="rounded-full h-12 w-[160px] bg-[#f2f2f2] hover:bg-[#f0f0f0] text-black font-semibold text-md md:text-lg shadow-sm"
            >
              Previous
            </button>
            <button
              type="submit"
              form="user-lins-form"
              // onClick={handleCancel}
              className="rounded-full h-12 w-[190px] bg-[#f2f2f2] hover:bg-[#f0f0f0] text-black font-semibold text-md md:text-lg shadow-sm"
            >
              Go to your Profile
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default SocialLinks;
