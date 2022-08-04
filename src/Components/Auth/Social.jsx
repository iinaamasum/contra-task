import React from 'react';
import { FaTiktok } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import SocialLoginBtn from '../Shared/SocialLoginBtn';

const Social = () => {
  return (
    <section>
      <SocialLoginBtn>
        <FcGoogle size={25} className="mr-2" />
        Login with Google
      </SocialLoginBtn>
      <SocialLoginBtn>
        <FaTiktok size={25} className="mr-2" />
        Login with Tiktok
      </SocialLoginBtn>
    </section>
  );
};

export default Social;
