import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo/logo.png';

const Navbar = ({ navLogInLink }) => {
  return (
    <section className="bg-[#fefefe] py-3 md:py-6 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 md:px-8 lg:px-10 flex items-center justify-between">
        <img className="h-7 object-contain" src={logo} alt="" />
        {navLogInLink && (
          <span className="text-lg">
            Already have an account?{' '}
            <Link className="text-orange-500" to="/">
              Log In
            </Link>
          </span>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
