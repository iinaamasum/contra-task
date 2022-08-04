import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo/logo.png';

const Navbar = ({ navLogInLink }) => {
  return (
    <section
      style={{
        boxShadow: 'rgb(228 232 247 / 80%) 0px 0px 24px',
      }}
      className="bg-[#fefefe] h-[80px] sticky top-0 z-50 flex items-center justify-between"
    >
      <nav className="px-4 md:px-8 lg:px-[38px] flex items-center justify-between w-full">
        <Link to="/">
          <img className="h-7 object-contain" src={logo} alt="" />
        </Link>
        {navLogInLink && (
          <span className="hidden md:block text-base xxl:text-lg text-gray-500">
            Already have an account?{' '}
            <Link className="font-semibold ml-[19px]" to="/">
              Log In
            </Link>
          </span>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
