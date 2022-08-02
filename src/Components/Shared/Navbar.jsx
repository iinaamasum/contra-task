import React from 'react';
import logo from '../../Assets/logo/logo.png';

const Navbar = () => {
  return (
    <section className="bg-[#fefefe] py-3 md:py-6 shadow-lg">
      <nav className="container mx-auto px-4 md:px-8 lg:px-10">
        <img className="h-7 object-contain" src={logo} alt="" />
      </nav>
    </section>
  );
};

export default Navbar;
