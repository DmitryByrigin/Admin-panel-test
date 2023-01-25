import React from 'react';

import Header from './Components/Pages/Header/Header';
// import Main from './Components/Pages/Main/Main'
import Registration from './Components/Pages/Registration/Registration';
import Side_Panel from './Components/Pages/Side_Panel/Side_Panel';
import Profile from './Components/Pages/Profile/Profile';
import Team from './Components/Pages/Team/Team';

export const AppContext = React.createContext({});

function App() {
  let [LoginSuccess, SetSuccess] = React.useState(false);

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
          {LoginSuccess ? <Profile /> : <Registration />}
        </main>
      </div>
    </AppContext.Provider>
  );
}

export default App;
