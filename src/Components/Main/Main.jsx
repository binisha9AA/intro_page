import React from 'react';
import bgimg from '../../assets/images/image-hero-mobile.png';
import HeroTitle from '../../HeroTitle.jsx/HeroTitle';

export default function Main() {
  return (
    <>
      <main className="w-full">
        <div className="flex  flex-col-reverse  md:flex-row md:items-center md:justify-evenly">
          <div>
            <HeroTitle />
          </div>
          <div>
            <img src={bgimg} alt="" className="mb-12" />
          </div>
        </div>
      </main>
    </>
  );
}
