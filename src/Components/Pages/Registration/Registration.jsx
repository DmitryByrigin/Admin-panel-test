import React from 'react';
// import CardStyles from './Registration.module.sass';
import { AppContext } from '../../../App';
import { Link } from 'react-router-dom';

export default function Registration() {
  const {
    LoginValue,
    OnClickLoginButton,
    SetLoginValue,
    PassValue,
    SetPassValue,
    OnCangeLoginInput,
    OnCangePassInput,
  } = React.useContext(AppContext);

  return (
    <main className="container mx-auto">
      <section className="authorization items-center h-screen grid gap-x-10 grid-cols-[1fr_1fr] justify-center max-[640px]:grid-cols-[1fr]">
        <div className="authorization_logo grid justify-end">
          <img src={require('../../../img/logo.webp')} width="500px" alt="logo" />
        </div>

        <aside className="justify-start grid">
          <h1>Enter in system</h1>
          <input
            onChange={OnCangeLoginInput}
            value={LoginValue}
            placeholder="Login or email"
            type="text"
          />
          <input
            type="password"
            onChange={OnCangePassInput}
            value={PassValue}
            placeholder="Password"
          />
          <h3>Any Error</h3>
          <a href="">
            <h4>Foget passowrd?</h4>
          </a>
          <a href="">
            <h4>Don't have an account? Register</h4>
          </a>
          <Link to="/profile">
            <button onClick={OnClickLoginButton}>Enter</button>
          </Link>
        </aside>
      </section>
    </main>
  );
}
