import React, { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { BsImage } from 'react-icons/bs';

const ImageEditorModal = ({ setEditedImg, setProfileImg, profileImg }) => {
  const editor = useRef(null);
  const [imageData, setImageData] = useState({
    image: profileImg,
    scale: 1,
    preview: null,
  });

  console.log(profileImg);

  const handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    setImageData({ ...imageData, scale });
  };

  const handleCancel = () => {
    setEditedImg({});
    setProfileImg({});
  };

  console.log('profile', profileImg);

  const handleSave = (data) => {
    const img = editor.current.getImageScaledToCanvas().toDataURL(1.0);
    const canvas = editor.current.getImage().toDataURL(1.0);
    const canvasScaled = editor.current.getImageScaledToCanvas();

    console.log(canvas);
    console.log(canvasScaled);

    setImageData({
      ...imageData,
      preview: {
        img,
        canvas,
        canvasScaled,
        scale: imageData.scale,
      },
    });
    setEditedImg({
      ...imageData,
      preview: {
        canvas,
        canvasScaled,
        scale: imageData.scale,
      },
    });
    setProfileImg({});
  };
  return (
    <>
      <section>
        <article className="flex flex-col items-center justify-center px-4 md:px-10 mt-[1.5rem] md:mt-[76px]">
          <div
            style={{
              boxShadow: 'rgb(228 232 247 / 80%) 0px 0px 24px',
            }}
            className="bg-[#fefefe] rounded-t-3xl px-[32px] py-[24px] md:px-[48px] md:py-[32px] w-full md:w-[800px] mx-auto text-center"
          >
            <div className="rounded-t-3xl">
              <div className="">
                <h2 className="text-[1.4375rem] md:text-[2.215rem] font-[700] tracking-tight mb-4">
                  Upload profile photo
                </h2>
              </div>
              {/* image cropper  */}
              <div className="text-center flex items-center justify-center">
                <AvatarEditor
                  ref={editor}
                  scale={parseFloat(imageData.scale)}
                  image={profileImg}
                  style={{
                    background: 'white',
                    width: '300px',
                    height: '300px',
                  }}
                  className="rounded-full w-[300px] h-[300px] object-contain"
                />
              </div>
              <div className="flex items-center justify-center mt-[14px]">
                <BsImage size={16} className="mr-2" />
                <input
                  name="scale"
                  type="range"
                  onChange={handleScale}
                  min="1"
                  max="2"
                  step="0.01"
                  defaultValue="1"
                  className="h-[2px]"
                />
                <BsImage size={25} className="ml-2" />
              </div>
            </div>
          </div>

          {/* form submit btn  */}
          <div className="bg-[#fff] mt-[2.5px] py-[20px] w-full md:w-[800px] mx-auto text-center text-gray-500 rounded-b-3xl leading-5 text-[15px] mb-10 flex items-center justify-center gap-x-4">
            <button
              onClick={handleCancel}
              className="rounded-full h-12 w-[148px] bg-[#f6f6f6] hover:bg-[#f2f2f2] text-black font-semibold text-md md:text-lg shadow-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="rounded-full h-12 w-[148px] bg-[#f2c94c] hover:bg-[#f2c84cc3] text-black font-semibold text-md md:text-lg shadow-sm"
            >
              Save
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default ImageEditorModal;
