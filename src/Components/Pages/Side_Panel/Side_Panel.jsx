import React from "react";
import CardStyles from "./Side_Panel.module.sass";
import { AppContext } from "../../../App";
import { IconAddressBook, IconMenu2, IconClipboardCheck,IconCircleCheck, IconUserCircle, IconUsers, IconCalendar, IconSettings, IconHelp } from "@tabler/icons-react";
import { useEffect } from "react";

export default function Side_Panel() {
  const { open, setOpen } = React.useContext(AppContext);

  const Menus = [
    {
      title: "Профиль",
      // src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/User.png",
      icons: <IconUserCircle color="white"/>
    },
    {
      title: "Команда",
      //src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/User.png",
      icons: <IconUsers color="white"/>,
      gap: false,
    },
    {
      title: "Проекты",
      //src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Calendar.png",
      icons: <IconClipboardCheck color="white"/>
    },
    {
      title: "Календарь",
      //src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Search.png",
      icons: <IconCalendar color="white"/>
    },
    {
      title: "Задания",
      //src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Chart.png",
      icons: <IconCircleCheck color="white"/>
    },
    {

    },
    {
      title: "Настройки",
      //src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Folder.png",
      icons: <IconSettings color="white"/>,
      gap: false,
    },
    {
      title: "Поддержка",
      //src: "https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Setting.png",
      icons: <IconHelp color="white"/>
    },
  ];
  
   document.body.style.overflow = open ? "hidden" : "auto";

  return (
    <div className="flex">
      <div
        className={`${ open ? "w-96 sm:w-44 " : "w-0 sm:w-0"
        } bg-black z-10 absolute h-screen py-3 left-0 top-0 bottom-0 pt-8 duration-300`}
      >

        <img
          src="https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="grid grid-cols-[1fr_1fr] justify-items-center items-center">
          <img className="w-9" src={require("../../../img/logo.webp")} alt="" />
          {/* <h4 className={`duration-200 ${!open && 'scale-0'}`}>Admin Panel</h4> */}
          <IconMenu2
            className={`duration-200 ${!open && "scale-0"}`}
            color="white"
          />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex p-2 cursor-pointer gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
            >
              {/* <img src={`${Menu.src}`} alt="" /> */}
              <div className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.icons}
              </div>
              <p className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </p>
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
