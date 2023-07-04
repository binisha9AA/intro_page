import React from 'react';

export const Button = ({ buttonText, styles }) => {
  return (
    <>
      <button
        className={`bg-[#131313] sm:w-[140px] h-[40px] border-[1px] md:h-[45px] w-[195px]  border-[#131313] py-2 px-6 rounded-[8px] md:${styles}`}
      >
        <h3 className="font-normal text-base md:font-medium text-[18px]">
          {buttonText}
        </h3>
      </button>
    </>
  );
};
