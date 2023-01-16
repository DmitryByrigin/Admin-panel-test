import React from 'react';
import CardStyles from './Side_Panel.module.sass';
import { AppContext } from '../../../App';

export default function Side_Panel() {
  const { open, setOpen } = React.useContext(AppContext);

  const Menus = [
    {
      title: 'Dashboard',
      src: 'https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Chart_fill.png',
    },
    {
      title: 'Accounts',
      src: 'https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/User.png',
      gap: false,
    },
    {
      title: 'Schedule ',
      src: 'https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Calendar.png',
    },
    {
      title: 'Search',
      src: 'https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Search.png',
    },
    {
      title: 'Analytics',
      src: 'https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Chart.png',
    },
    {
      title: 'Files ',
      src: 'https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Folder.png',
      gap: false,
    },
    {
      title: 'Setting',
      src: 'https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Setting.png',
    },
  ];
  return (
    <div className="flex">
      <div
        className={`${
          open ? 'w-96 sm:w-36' : 'w-0 sm:w-0'
        } bg-black z-10 absolute h-screen py-3 left-0 top-0 bottom-0 pt-8 duration-300`}>
        <img
          src="https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <h4 className={`duration-200 ${!open && 'scale-0'}`}>Admin Panel</h4>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex p-2 cursor-pointer gap-x-4 
            ${Menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'} `}>
              <img src={`${Menu.src}`} alt="" />
              <p className={`${!open && 'hidden'} origin-left duration-200`}>{Menu.title}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="h-screen p-7" onClick={()=>setOpen(open ? !open : open)}>
      <h1 className="text-2xl font-semibold ">Home Page</h1>
    </div> */}
    </div>
  );
}
