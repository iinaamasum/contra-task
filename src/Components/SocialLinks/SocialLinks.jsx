import React, { useEffect, useState } from 'react';
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
import AddedLinksTable from './AddedLinksTable';
import LinkInputForm from './LinkInputForm';

const SocialLinks = () => {
  const [linkInputName, setLinkInputName] = useState({
    option: '',
    name: '',
  });
  const [linkFixedInputName, setLinkFixedInputName] = useState({
    option: '',
    name: '',
  });
  const [addedDefaultLinks, setAddedDefaultLinks] = useState({
    github: false,
    linkedin: false,
    instagram: false,
  });

  const [addedLinks, setAddedLinks] = useState([]);
  const navigate = useNavigate();

  const handleLinkInput = () => {
    setLinkInputName({ ...linkInputName, option: 'addLink' });
  };

  useEffect(() => {
    if (addedLinks) {
      addedLinks.map((link) => {
        if (link.link_name.toLowerCase().includes('github')) {
          setAddedDefaultLinks({ ...addedDefaultLinks, github: true });
        }
        if (link.link_name.toLowerCase().includes('linkedin')) {
          setAddedDefaultLinks({ ...addedDefaultLinks, linkedin: true });
        }
        if (link.link_name.toLowerCase().includes('instagram')) {
          setAddedDefaultLinks({ ...addedDefaultLinks, instagram: true });
        }
      });
    }
  }, [addedLinks]);
  console.log(addedLinks);
  return (
    <>
      <Navbar />

      <section>
        <article className="flex flex-col items-center justify-center px-4 mt-[1.5rem] md:mt-[72px]">
          <div
            style={{
              boxShadow: 'rgb(228 232 247 / 80%) 0px 0px 24px',
            }}
            className="bg-[#fafafa] rounded-b-2xl md:rounded-b-none rounded-t-2xl px-[32px] py-[24px] md:px-[48px] md:py-[42px] w-full md:w-[800px] mx-auto text-center mb-32 md:mb-0"
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

              {linkInputName.option || linkFixedInputName.option ? (
                <LinkInputForm
                  setLinkInputName={setLinkInputName}
                  linkInputName={linkInputName}
                  setAddedLinks={setAddedLinks}
                  addedLinks={addedLinks}
                  linkFixedInputName={linkFixedInputName}
                  setLinkFixedInputName={setLinkFixedInputName}
                />
              ) : (
                <>
                  {/* add link  */}
                  <button
                    onClick={handleLinkInput}
                    className="inline-flex items-center justify-center gap-x-1 border-[2px] border-[#f2c94c] rounded-full px-[30px] py-[11px] font-semibold my-[40px] hover:bg-[#f2f2f2]"
                  >
                    <BiPlus size={25} />
                    Add Link
                  </button>

                  {/* added links table  */}
                  <div className="mb-[30px]">
                    {addedLinks.map((link) => (
                      <>
                        {!(addedLinks[0] === link) && (
                          <div className="h-[1px] max-w-[340px] bg-gray-300 mx-auto"></div>
                        )}
                        <AddedLinksTable key={link.link_url} link={link} />
                      </>
                    ))}
                  </div>

                  {/* suggestions  */}
                  <div className="md:flex items-center justify-center gap-x-3 text-sm text-gray-500">
                    {!(
                      addedDefaultLinks.github &&
                      addedDefaultLinks.instagram &&
                      addedDefaultLinks.linkedin
                    ) && (
                      <p className="font-semibold text-base mb-5 md:mb-0">
                        Suggestions:
                      </p>
                    )}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-x-[8px]">
                      {!addedDefaultLinks.linkedin && (
                        <button
                          onClick={() =>
                            setLinkFixedInputName({
                              name: 'LinkedIn',
                              option: 'linkedin',
                            })
                          }
                          className="inline-flex items-center justify-center gap-x-1 bg-white py-[7px] w-[160px] sm:w-[140px] mb-3 sm:mb-0 rounded-full"
                        >
                          <BiPlus size={25} /> Add LinkedIn
                        </button>
                      )}
                      {!addedDefaultLinks.github && (
                        <button
                          onClick={() =>
                            setLinkFixedInputName({
                              name: 'GitHub',
                              option: 'github',
                            })
                          }
                          className="inline-flex items-center justify-center gap-x-1 bg-white py-[7px] w-[160px] sm:w-[140px] mb-3 sm:mb-0 rounded-full"
                        >
                          <BiPlus size={25} /> Add GitHub
                        </button>
                      )}
                      {!addedDefaultLinks.instagram && (
                        <button
                          onClick={() =>
                            setLinkFixedInputName({
                              name: 'Instagram',
                              option: 'instagram',
                            })
                          }
                          className="inline-flex items-center justify-center gap-x-1 bg-white py-[7px] w-[160px] sm:w-[140px] mb-3 sm:mb-0 rounded-full"
                        >
                          <BiPlus size={25} /> Add Instagram
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* form submit btn  */}
          <div className="bg-[#fff] mt-[2px] py-[20px] w-full md:w-[800px] mx-auto text-end text-gray-500 md:rounded-b-3xl leading-5 text-[15px] flex items-center justify-between px-5  bottom-0 md:relative md:mb-10 fixed">
            <button
              onClick={() => navigate('/update-profile')}
              className="rounded-full h-12 w-[120px] sm:w-[160px] bg-[#f2f2f2] hover:bg-[#e3e3e3] text-black font-semibold text-md md:text-lg shadow-sm"
            >
              Previous
            </button>
            <button className="rounded-full h-12 w-[160px] sm:w-[190px] bg-[#f2f2f2] hover:bg-[#e3e3e3] text-black font-semibold text-md md:text-lg shadow-sm">
              Go to your Profile
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default SocialLinks;
