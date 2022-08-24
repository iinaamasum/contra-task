import React, { useEffect, useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import EmailForm from './EmailForm';

const SignUp = () => {
  const navigate = useNavigate();
  const [enteredEmail, setEnteredEmail] = useState({});

  useEffect(() => {
    if (enteredEmail?.email) {
      navigate('/verify-pin-code');
    }
  }, [enteredEmail, navigate]);

  return (
    <>
      <Navbar navLogInLink={true} />

      <section className="">
        <article className="flex flex-col items-center justify-center px-4 mt-[1.5rem] md:mt-[40px]">
          <div
            style={{
              boxShadow: 'rgb(228 232 247 / 80%) 0px 0px 24px',
            }}
            className="bg-[#fafafa] rounded-t-2xl px-[32px] py-[24px] md:px-auto md:pt-[66px] md:pb-[80px] mdLg800:px-[160px] w-full md:w-[640px] mdLg800:w-[800px] mx-auto text-center"
          >
            <div className="rounded-t-3xl">
              <div className="">
                <h2 className="text-[1.4375rem] md:text-[2.215rem] font-[700] tracking-tight mb-[7px]">
                  Sign up as an Independent
                </h2>
                <p className="text-base text-gray-500 mb-[24px]">
                  Not looking to get hired?{' '}
                  <span className="font-semibold inline-flex items-center cursor-pointer hover:border-b-[3px] border-orange-500">
                    Sign Up As A Client{' '}
                    <BsInfoCircle size={20} className="ml-2" />
                  </span>
                </p>
              </div>

              {/* email form section  */}
              <EmailForm setEnteredEmail={setEnteredEmail} btnTitle="Sign Up" />
            </div>
          </div>
          <div className="bg-[#fefefe] mt-[2.5px] py-[25px] w-full md:w-[640px] mdLg800:w-[800px] mx-auto text-center text-gray-500 rounded-b-3xl leading-5 text-[15px] mb-5">
            <p>
              By continuing, you agree to{' '}
              <Link to="/" className="underline">
                Contra's Terms of Use
              </Link>{' '}
              and confirm that
            </p>

            <p>
              you have read{' '}
              <Link to="/" className="underline">
                Contra's Privacy Policy
              </Link>
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default SignUp;
