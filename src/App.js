import React, { useState } from 'react'

import Header from './Components/Pages/Header/Header'
// import Main from './Components/Pages/Main/Main'
import Registration from './Components/Pages/Registration/Registration'
import Side_Panel from './Components/Pages/Side_Panel/Side_Panel'
import Profile from './Components/Pages/Profile/Profile'

export const AppContext = React.createContext({});

function App() {

  let [BgProfile, SetBgProfile] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const ChangeBgProfile = () => {
    BgProfile = !BgProfile;
    SetBgProfile(BgProfile);
    console.log(BgProfile);
  }
  // Image = "url('./img/2.webp')"
  {BgProfile ? document.body.style.background = `url(${require('./img/2.png')})` : document.body.style.background=""}

  return (
    <AppContext.Provider value={{ChangeBgProfile, open, setOpen}}>
    <div className= "wrapper">
      <header className='bg-[#198754]'>
        <Header/>
       {/* <Registration/> */}
      </header>

      <main onClick={()=>setOpen(open ? !open : open)}>
        <Profile
          ChangeBgProfile = {ChangeBgProfile}
        />

        <Side_Panel/>
      </main>
    </div>
  </AppContext.Provider>
  );
}

export default App;
