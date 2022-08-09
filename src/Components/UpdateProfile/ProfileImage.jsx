import React, { useRef } from 'react';
import { AiFillCamera } from 'react-icons/ai';
import userImg from '../../Assets/logo/user.png';

const ProfileImage = ({ setProfileImg }) => {
  const ref = useRef();
  const handleImage = (e) => {
    e.preventDefault();
    ref.current.click();
  };

  const handleImgChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    setProfileImg(fileObj);
    event.target.value = null;
  };

  return (
    <section className="flex flex-col items-center justify-center mt-[16px] mb-[24px]">
      <img
        className="w-[180px] h-[180px] rounded-full bg-gray-50"
        src={userImg}
        alt=""
      />
      <input
        type="file"
        name="profile_img"
        id="upload-img"
        accept="image/*"
        className="hidden"
        ref={ref}
        onChange={handleImgChange}
      />
      <button
        onClick={handleImage}
        className="inline-flex items-center justify-center w-full md:w-[242px] font-semibold py-[10px] border-2 border-[#f9e4a9] rounded-3xl mt-[24px]"
      >
        <AiFillCamera size={25} className="mr-2" />
        Upload Profile Image
      </button>
    </section>
  );
};

export default ProfileImage;
