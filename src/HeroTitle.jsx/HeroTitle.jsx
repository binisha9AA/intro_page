import React from 'react';
import { Button } from '../Components/Button/Button';
import Sponsors from '../Components/Sponsors/Sponsors';

export default function HeroTitle() {
  return (
    <div className="flex flex-col justify-center items-center  px-7 md:items-baseline">
      <h1 className="text-[35px] text-center font-bold md:text-[35px] md:text-left lg:text-[50px]">
        <span className="block">Make</span> remote work
      </h1>
      <div className="mb-7 text-[#777777] text-center text-[18px] md:text-left md:max-w-[460px]">
        <p>
          Get your team in sync. no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
      </div>
      <Button buttonText="Learn More" styles="sm:text-white md:text-white " />
      <Sponsors />
    </div>
  );
}
