import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { TbGridDots, TbTrash } from 'react-icons/tb';
import { VscEdit } from 'react-icons/vsc';

const AddedLinksTable = ({
  addedLinks,
  setAddedLinks,
  addedDefaultLinks,
  setAddedDefaultLinks,
}) => {
  const handleDeleteTableData = (link_url, link_name) => {
    if (link_name.includes('GitHub')) {
      setAddedDefaultLinks({ ...addedDefaultLinks, github: false });
    }
    if (link_name.includes('Instagram')) {
      setAddedDefaultLinks({ ...addedDefaultLinks, instagram: false });
    }
    if (link_name.includes('LinkedIn')) {
      setAddedDefaultLinks({ ...addedDefaultLinks, linkedin: false });
    }
    const remaining = addedLinks.filter(
      (filterLink) => filterLink.link_url !== link_url
    );
    setAddedLinks(remaining);
  };
  console.log(addedLinks);
  return (
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
                                .includes('github') && <FaGithub size={20} />}
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
                              ) && <HiOutlineExternalLink size={20} />}
                              <p className="font-semibold">{link.link_name}</p>
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
                            handleDeleteTableData(link.link_url, link.link_name)
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
  );
};

export default AddedLinksTable;
