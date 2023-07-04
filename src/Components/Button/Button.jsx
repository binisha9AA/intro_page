import React from 'react';

export const Button = ({ buttonText, styles }) => {
  return (
    <>
      <button
        className={`bg-[#131313] border-[1px] h-[45px] w-[195px]  border-[#131313] py-2 px-6 rounded-[8px] md:${styles}`}
      >
        <h3 className="font-medium text-[18px] ">{buttonText}</h3>
      </button>
    </>
  );
};
