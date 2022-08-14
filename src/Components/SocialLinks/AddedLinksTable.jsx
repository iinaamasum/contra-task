import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { TbGridDots, TbTrash } from 'react-icons/tb';
import { VscEdit } from 'react-icons/vsc';

const AddedLinksTable = ({ link }) => {
  const { link_name, link_url } = link;
  return (
    <div class="flex flex-col max-w-[425px] mx-auto text-center">
      <div class="">
        <div class="min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
              <tbody class="">
                <tr className="cursor-pointer hover:bg-[#eeeeee] flex items-center justify-between px-1 py-4 rounded-lg">
                  <a
                    title={link_url}
                    href={link_url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[80%]"
                  >
                    <td>
                      <div className="flex items-center gap-x-8 justify-start">
                        <TbGridDots size={25} />
                        <div className="flex items-center justify-start gap-x-7">
                          {link_name.toLowerCase().includes('github') && (
                            <FaGithub size={20} />
                          )}
                          {link_name.toLowerCase().includes('linkedin') && (
                            <FaLinkedin size={20} />
                          )}
                          {link_name.toLowerCase().includes('instagram') && (
                            <FaInstagram size={20} />
                          )}
                          {!(
                            link_name.toLowerCase().includes('github') ||
                            link_name.toLowerCase().includes('instagram') ||
                            link_name.toLowerCase().includes('linkedin')
                          ) && <HiOutlineExternalLink size={20} />}
                          <p className="font-semibold">{link_name}</p>
                        </div>
                      </div>
                    </td>
                  </a>
                  <td className="flex items-center gap-x-3 justify-end w-[20%]">
                    <VscEdit
                      size={27}
                      className="cursor-pointer hover:text-orange-500 font-light"
                    />
                    <TbTrash
                      size={27}
                      className="cursor-pointer hover:text-orange-500 font-light"
                    />
                  </td>
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
