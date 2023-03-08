import React from 'react';

import Header from './Components/Pages/Header/Header';
// import Main from './Components/Pages/Main/Main'
import Registration from './Components/Pages/Registration/Registration';
import Side_Panel from './Components/Pages/Side_Panel/Side_Panel';
import Cart from './Components/Cart';
import Team from './Components/Pages/Team/Team';
<<<<<<< HEAD
import Shop from './Components/Pages/Shop';
import {Routes,Route} from 'react-router';
import Profile from './Components/Pages/Profile/Profile';
=======
import Calendar from './Components/Pages/Calendar/calendar';

>>>>>>> 8e686d5f8678cfffad85eae7b11842ed3933dd7d
export const AppContext = React.createContext({});

function App() {
  let [LoginSuccess, SetSuccess] = React.useState(true);

  const OnClickLoginButton = () => {
    if (LoginValue == '1' && PassValue == '1') {
      LoginSuccess = true;
    } else {
      <Registration />;
    }

    SetSuccess(LoginSuccess);
    console.log(LoginSuccess);
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
        <header className="bg-[#198754]">
          {LoginSuccess ? <Header /> : null}

          <Side_Panel />
        </header>
        <main onClick={() => setOpen(open ? !open : open)}>
<<<<<<< HEAD
            {/* <Routes>
              <Route path="/shop" element={Shop}/>
              <Route path="/cart" element={Cart}/>
              <Route path="/profile" element={Profile}/>
              <Route path="/registration" element={Registration}/>
            </Routes> */}
          {LoginSuccess ? <Shop /> : <Registration />}
=======
          {LoginSuccess ? <Calendar /> : <Registration />}
>>>>>>> 8e686d5f8678cfffad85eae7b11842ed3933dd7d
        </main>
      </div>
    </AppContext.Provider>
  );
}

export default App;
