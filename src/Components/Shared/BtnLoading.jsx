import React from 'react';
import LoadingGif from '../../Assets/logo/btnLoadnig.gif';

const BtnLoading = () => {
  return (
    <img
      className="w-8 h-8 inline-flex items-center justify-center"
      src={LoadingGif}
      alt=""
    />
  );
};

export default BtnLoading;
