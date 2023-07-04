import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import { Button } from '../Button/Button';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import todo from '../../assets/images/icon-todo.svg';
import calendar from '../../assets/images/icon-calendar.svg';
import remainders from '../../assets/images/icon-reminders.svg';
import planning from '../../assets/images/icon-planning.svg';
function menuHandler(e) {
  let list = document.querySelector('ul');
  if (e.target.name === 'menu') {
    e.target.name = 'close';
    list.classList.add('top-[88px]');
    list.classList.add('opacity-100');
  } else {
    e.target.name = 'menu';
    list.classList.remove('top-[88px]');
    list.classList.remove('opacity-100');
  }
}

export default function Navi() {
  const navbar = [
    {
      id: 1,
      link: 'Features',
    },
    {
      id: 2,
      link: 'Company',
    },
    {
      id: 3,
      link: 'Careers',
    },
    {
      id: 4,
      link: 'About',
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [company, setCompany] = React.useState(false);

  const handleCompanyOpen = () => {
    setCompany(!company);
  };
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className=" bg-white px-9 md:flex max-h-[64px] justify-between gap-7 relative ">
      <div className="flex justify-between items-center w-[100%] ">
        <div className="flex flex-row">
          <div className="uppercase text-[18px]">
            <img src={logo} className="mr-9" />
          </div>
          <div className="hidden md:flex justify-between items-center gap-10 text-[#959595]">
            <div className="dropdown relative">
              <button onClick={handleOpen} className="flex items-center">
                Features
                <FiChevronDown />
              </button>
              {open ? (
                <ul className="menu shadow-md rounded-lg p-3 min-w-[130px] text-[14px] flex flex-col gap-4 absolute bg-white">
                  <li className="menu-item">
                    <button className="flex gap-2">
                      {' '}
                      <img src={todo} alt="" />
                      Todo List
                    </button>
                  </li>
                  <li className="menu-item">
                    <button className="flex gap-2">
                      {' '}
                      <img src={calendar} alt="" />
                      Calendar
                    </button>
                  </li>
                  <li className="menu-item">
                    <button className="flex gap-2">
                      {' '}
                      <img src={remainders} alt="" />
                      Remainders
                    </button>
                  </li>
                  <li className="menu-item">
                    <button className="flex gap-2">
                      {' '}
                      <img src={planning} alt="" />
                      Planning
                    </button>
                  </li>
                </ul>
              ) : null}
            </div>
            <div className="dropdown relative">
              <button onClick={handleCompanyOpen} className="flex items-center">
                Company <FiChevronDown />
              </button>
              {company ? (
                <ul className="menu shadow-md rounded-lg p-3 max-w-[140px] text-[14px] flex flex-col gap-6 absolute bg-white">
                  <li className="menu-item">
                    <button>History</button>
                  </li>
                  <li className="menu-item">
                    <button>Our Team</button>
                  </li>
                  <li className="menu-item">
                    <button>Blog</button>
                  </li>
                </ul>
              ) : null}
              {/* {company ? <div>Is Open</div> : <div></div>} */}
            </div>{' '}
            <ul>
              <li className="menu-item">
                <button>Career</button>
              </li>
            </ul>
            <ul>
              <li className="menu-item">
                <button>About</button>
              </li>
            </ul>
          </div>
        </div>

        <span
          className="text-3 text-lg cursor-pointer z-10 mx-2 md:hidden block"
          onClick={menuHandler}
        >
          <AiOutlineMenu className="menu" onClick={menuHandler} />
        </span>

        <ul className="hamburger sm:bg-white whitespace-nowrap sm:top-[200%] sm:text-center sm:z-10 md:flex md:items-center z-[-1] md:z-auto md:static absolute md:bg-white md:text-black w-full right-0 md:w-auto md:py-0 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          {navbar.slice(4).map((item) => {
            return (
              <>
                <li className="mx-4 my-6 md:my-0" key={item.id}>
                  <a
                    href="#"
                    className="text-sm lg:text-lg hover:text-[#a8a8a8] duration-500 text-[#bbbbbb]"
                  >
                    {item.link}
                  </a>
                </li>
              </>
            );
          })}
          <div className="flex justify-around mx-4 gap-3 mb-4 flex-col h-[100%] md:flex-row md:items-center md:mx-0 md:gap-9 md:mb-0 ">
            <a
              href="#"
              className="text-sm lg:text-lg hover:text-[#a8a8a8] duration-500 text-[#888888]"
            >
              Login
            </a>
            <Button
              styles=" bg-transparent text-black w-[140px] md:rounded-[14px]"
              buttonText="register"
            />
          </div>
        </ul>
      </div>
    </nav>
  );
}
