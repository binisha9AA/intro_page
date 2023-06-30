import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Button } from '../Button/Button';
import { AiOutlineMenu } from 'react-icons/ai';
// import { CDropdownItem } from '@coreui/react';
// import { CDropdownMenu } from '@coreui/react';
// import { CDropdownToggle } from '@coreui/react';
// import { CDropdown } from '@coreui/react';
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

export default function Navigation() {
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
  return (
    <nav className=" bg-white md:flex max-h-[64px] justify-evenly gap-7 relative px-9">
      <div className="flex justify-around items-center">
        <div className="uppercase text-[18px]">
          <img src={logo} />
        </div>

        <span className="text-3 text-lg cursor-pointer  mx-2 md:hidden block">
          <AiOutlineMenu className="menu" onClick={menuHandler} />
        </span>

        {navbar.map((item) => {
          return (
            <>
              <ul
                className="sm:bg-white whitespace-nowrap sm:text-center sm:z-10 md:flex md:items-center z-[-1] md:z-auto md:static absolute md:bg-white md:text-black w-full left-0 md:w-auto md:py-0 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
                key={item.id}
              >
                <li className="mx-4 my-6 md:my-0">
                  <a
                    href="#"
                    className="text-sm lg:text-lg hover:text-[#a8a8a8] duration-500 text-[#bbbbbb]"
                  >
                    {item.link}
                  </a>
                </li>
              </ul>
            </>
          );
        })}
      </div>
      <div className="flex justify-around items-center gap-3 h-[100%]">
        <a
          href="#"
          className="text-sm lg:text-lg hover:text-[#a8a8a8] duration-500 text-[#888888]"
        >
          Login
        </a>
        <Button buttonText="register" styles="text-black bg-transparent" />
      </div>
      {/* <CDropdown>
        <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown> */}
    </nav>
  );
}
