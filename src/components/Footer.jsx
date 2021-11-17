import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return(
    <div className='footer w-1/2 my-4 mx-auto t-center'>
      {year} © OLIVE FOOD COURT 
    </div>
  );
}

export default Footer;