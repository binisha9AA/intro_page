import React from 'react';
import databiz from '../../assets/images/client-databiz.svg';
import audophile from '../../assets/images/client-audiophile.svg';
import meet from '../../assets/images/client-meet.svg';
import maker from '../../assets/images/client-maker.svg';

export default function Sponsors() {
  const sponsors = [
    {
      id: 0,
      img: databiz,
    },
    {
      id: 1,
      img: audophile,
    },
    {
      id: 2,
      img: meet,
    },
    {
      id: 3,
      img: maker,
    },
  ];

  return (
    <>
      <>
        <ul className="flex justify-between gap-7 px-3 mt-14">
          {sponsors.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.img} alt="" />
              </li>
            );
          })}
        </ul>
      </>
    </>
  );
}
