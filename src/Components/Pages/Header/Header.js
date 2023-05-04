import React from 'react';
import CardStyles from './Header.module.scss';
import { AppContext } from '../../../App';
import { Routes, Link, Route, Navigate } from 'react-router-dom';
import { IconMail, IconSettings, IconMenu2, IconUserCircle, IconLogout } from '@tabler/icons-react';

export default function Header() {
  let { open, setOpen, LoginSuccess, SetSuccess } = React.useContext(AppContext);
  const onClickExit = () => {
    LoginSuccess = false;
    SetSuccess(LoginSuccess);
    console.log(LoginSuccess);
    return <Navigate to="/" replace={true} />;
  };

  return (
    <header
      // {`container mx-auto  min-[1280px]:max-w-[1700px] ${CardStyles.header} max-[640px]:max-w-[768px] min-h-[87px] min-[1024px]:max-w-[1700px] p-4 min-[640px]:max-w-[768px]`}
      className="w-full max-w-8xl mx-auto px-3">
      <ul className="gap-x-0.5 grid-cols-[1fr_1fr_4fr_1fr_1fr_1fr] max-[1024px]:grid-cols-[1fr_1fr_2fr_1fr_1fr_1fr] ">
        <li onClick={() => setOpen(!open)} className="justify-items-end">
          <IconMenu2 color="white" size={34} />

          <h4 className="max-[545px]:hidden max-[1280px]:text-base">Menu</h4>
        </li>
        <li>
          <IconSettings color="white" size={34} />
          <h4 className="max-[545px]:hidden max-[1280px]:text-base">Sets</h4>
        </li>
        <li className="mb-0">
          <IconMail color="white" size={34} />
          <h4 className="max-[545px]:hidden max-[1280px]:text-base">Letter</h4>
        </li>
        <Link to="/profile">
          <li>
            <IconUserCircle color="white" size={34} />
            <h4 className="max-[545px]:hidden max-[1280px]:text-base">Profile</h4>
          </li>
        </Link>
        <Link to="/registration">
          <li onClick={onClickExit}>
            <IconLogout color="white" size={34} />
            <h4 className="max-[545px]:hidden max-[1280px]:text-base">Exit</h4>
          </li>
        </Link>
        <Link to="/profile">
          <li className="gap-x-1 grid-cols-[40%_1fr] max-[710px]:grid-cols-[1fr] max-[710px]:justify-self-center">
            <div>
              <img
                className="rounded-full"
                width="65px"
                max-width="1"
                src="https://avatars.githubusercontent.com/u/83762401?v=4"
                alt="user"
              />
            </div>
            <div className={CardStyles.user}>
              <h4 className="font-bold text-white max-[840px]:hidden">Dmitriy Burygin</h4>
              <p className="max-[710px]:hidden max-[840px]:text-white max-[840px]:font-bold">
                Admin
              </p>
            </div>
          </li>
        </Link>
      </ul>
    </header>
  );
}
