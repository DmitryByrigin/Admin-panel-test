import React from 'react';

import Header from './Components/Pages/Header/Header';
// import Main from './Components/Pages/Main/Main'
import Registration from './Components/Pages/Registration/Registration';
import Side_Panel from './Components/Pages/Side_Panel/Side_Panel';
import Cart from './Components/Cart';
import Team from './Components/Pages/Team/Team';

import Shop from './Components/Pages/Shop';
import { Route, Routes } from 'react-router-dom';

import Profile from './Components/Pages/Profile/Profile';

import Calendar from './Components/Pages/Calendar/calendar';

export const AppContext = React.createContext({});

function App() {
  let [LoginSuccess, SetSuccess] = React.useState(false);

  const OnClickLoginButton = () => {
    if (LoginValue == '1' && PassValue == '1') {
      LoginSuccess = true;
      SetSuccess(LoginSuccess);
      // return <Navigate to="/profile" replace={true} />;
    } else {
      <Registration />;
    }

    // console.log('LoginSuccess', LoginSuccess);
  };

  const [LoginValue, SetLoginValue] = React.useState('');
  const [PassValue, SetPassValue] = React.useState('');

  const OnCangeLoginInput = (event) => {
    SetLoginValue(event.target.value);
    console.log(event.target.value);
  };

  const OnCangePassInput = (event) => {
    SetPassValue(event.target.value);
    console.log(event.target.value);
  };

  let [BgProfile, SetBgProfile] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const ChangeBgProfile = () => {
    BgProfile = !BgProfile;
    SetBgProfile(BgProfile);
    console.log(BgProfile);
  };
  // Image = "url('./img/2.webp')"
  {
    BgProfile
      ? (document.body.style.background = `url(${require('./img/2.png')})`)
      : (document.body.style.background = '');
  }

  if (LoginSuccess == true) {
    return (
      <AppContext.Provider
        value={{
          LoginSuccess,
          OnClickLoginButton,
          SetSuccess,
          ChangeBgProfile,
          open,
          setOpen,
          LoginValue,
          SetLoginValue,
          PassValue,
          SetPassValue,
          OnCangeLoginInput,
          OnCangePassInput,
        }}>
        <div className="wrapper">
          <header onClick={() => open && setOpen(false)} className="bg-[#198754]">
            {LoginSuccess ? <Header /> : null}

            <Side_Panel />
          </header>
          <main onClick={() => setOpen(open ? !open : open)}>
            <Routes>
              <Route path="/" element={<Registration />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/team" element={<Team />} />
              {/* <Route path="/product" element={<Product />} /> */}
            </Routes>
          </main>
        </div>
      </AppContext.Provider>
    );
  }

  if (LoginSuccess == false) {
    return (
      <AppContext.Provider
        value={{
          LoginSuccess,
          OnClickLoginButton,
          SetSuccess,
          ChangeBgProfile,
          open,
          setOpen,
          LoginValue,
          SetLoginValue,
          PassValue,
          SetPassValue,
          OnCangeLoginInput,
          OnCangePassInput,
        }}>
        <Registration />
      </AppContext.Provider>
    );
  }
}

export default App;
