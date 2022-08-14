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
import { HiOutlineExternalLink } from 'react-icons/hi';
import { TbGridDots, TbTrash } from 'react-icons/tb';
import { VscEdit } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
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
        if (link.link_name?.toLowerCase().includes('github')) {
          setAddedDefaultLinks({ ...addedDefaultLinks, github: true });
        }
        if (link.link_name?.toLowerCase().includes('linkedin')) {
          setAddedDefaultLinks({ ...addedDefaultLinks, linkedin: true });
        }
        if (link.link_name?.toLowerCase().includes('instagram')) {
          setAddedDefaultLinks({ ...addedDefaultLinks, instagram: true });
        }
      });
    }
  }, [addedLinks]);
  const handleDeleteTableData = (url) => {
    console.log('hi', url);
    const remaining = addedLinks.filter(
      (filterLink) => filterLink.link_url !== url
    );
    setAddedLinks(remaining);
  };
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
                    <div class="flex flex-col max-w-[425px] mx-auto text-center">
                      <div class="">
                        <div class="min-w-full inline-block align-middle">
                          <div class="overflow-hidden">
                            <table class="min-w-full divide-y divide-gray-200">
                              <tbody class="">
                                <tr>
                                  {addedLinks.map((link) => (
                                    <div
                                      className="cursor-pointer hover:bg-[#eeeeee] flex items-center justify-between rounded-lg"
                                      key={link.link_url}
                                    >
                                      <td className="w-[80%]">
                                        <a
                                          title={link.link_url || ''}
                                          href={link.link_url || ''}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="w-full"
                                        >
                                          <div className="flex items-center gap-x-8 justify-start px-1 py-4">
                                            <TbGridDots size={25} />
                                            <div className="flex items-center justify-start gap-x-7">
                                              {link.link_name
                                                ?.toLowerCase()
                                                .includes('github') && (
                                                <FaGithub size={20} />
                                              )}
                                              {link.link_name
                                                ?.toLowerCase()
                                                .includes('linkedin') && (
                                                <FaLinkedin size={20} />
                                              )}
                                              {link.link_name
                                                ?.toLowerCase()
                                                .includes('instagram') && (
                                                <FaInstagram size={20} />
                                              )}
                                              {!(
                                                link.link_name
                                                  ?.toLowerCase()
                                                  .includes('github') ||
                                                link.link_name
                                                  ?.toLowerCase()
                                                  .includes('instagram') ||
                                                link.link_name
                                                  ?.toLowerCase()
                                                  .includes('linkedin')
                                              ) && (
                                                <HiOutlineExternalLink
                                                  size={20}
                                                />
                                              )}
                                              <p className="font-semibold">
                                                {link.link_name}
                                              </p>
                                            </div>
                                          </div>
                                        </a>
                                      </td>
                                      <td className="flex items-center gap-x-3 justify-end w-[20%] px-1 py-4">
                                        <VscEdit
                                          size={27}
                                          className="cursor-pointer hover:text-orange-500 font-light"
                                        />
                                        <TbTrash
                                          onClick={() =>
                                            handleDeleteTableData(link.link_url)
                                          }
                                          size={27}
                                          className="cursor-pointer hover:text-orange-500 font-light"
                                        />
                                      </td>
                                    </div>
                                  ))}
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
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
