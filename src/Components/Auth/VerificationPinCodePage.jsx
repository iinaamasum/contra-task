import React from 'react';
import AuthCode from 'react-auth-code-input';
import toast from 'react-hot-toast';
import { AiOutlineCheckCircle, AiOutlineInfoCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import goldenLogo from '../../Assets/logo/contra-glossy.png';
import Navbar from '../Shared/Navbar';

const VerificationPinCodePage = () => {
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const pinCode = e.toUpperCase();
    if (pinCode !== '123456' && pinCode.length === 6) {
      toast.error(
        'This code does not match. Please check your code and try again.',
        {
          duration: 2000,
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
        }
      );
    }
    if (pinCode === '123456' && pinCode.length === 6) {
      toast.success('Authentication successful.', {
        duration: 2000,
        position: 'top-right',
        style: {
          color: 'white',
          background: 'rgb(34 197 94)',
        },
        className: 'bg-green-500 text-white',
        icon: <AiOutlineCheckCircle size={30} color="white" />,
        iconTheme: {
          primary: 'green',
          secondary: 'green',
        },
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      navigate('/update-profile');
    }
  };
  return (
    <>
      <Navbar />
      <section>
        <article className="flex flex-col items-center justify-center px-4 sm:px-8 mt-[1.5rem] md:mt-[40px]">
          <div
            style={{
              boxShadow: 'rgb(228 232 247 / 80%) 0px 0px 24px',
            }}
            className="bg-[#fefefe] rounded-3xl px-[32px] py-[30px] mdLg800:px-[160px] md:py-[72px] w-full md:px-auto  md:w-[640px] mdLg800:w-[800px] mx-auto text-center"
          >
            {/* heading  */}
            <div className="w-full flex items-center flex-col">
              <img className="w-16 h-16" src={goldenLogo} alt="" />
              <h2 className="text-base md:text-lg font-semibold my-3">
                We emailed you a code
              </h2>
              <p className="text-gray-500 text-lg">
                Enter in the verification code sent to:
              </p>
            </div>
            <div className="w-full flex items-center justify-center mt-5">
              <AuthCode
                onChange={handleOnChange}
                inputClassName="w-5 text-2xl font-bold text-orange-500 focus:outline-none placeholder:text-2xl placeholder:text-gray-300 text-center uppercase"
                placeholder="•"
                autoFocus={true}
                containerClassName="border-[1px] border-[#f0bc27] rounded-2xl py-[14px] grid grid-cols-6 gap-6 px-[30px] bg-[#fff]"
              />
            </div>
          </div>

          {/* resend code section  */}
          <div className="mt-5 flex items-center justify-center gap-5 w-[90%] md:w-[60%] lg:w-[40%] mx-auto">
            <p className="text-lg text-gray-500">
              Didn’t get your code?{' '}
              <Link
                to="/"
                className="font-semibold hover:border-b-2 border-orange-500"
              >
                Send a new code
              </Link>
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default VerificationPinCodePage;
