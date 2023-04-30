import React from 'react';
import { AppContext } from '../../../App';
import { Link, useNavigate } from 'react-router-dom';

export default function Registration() {
  let { LoginSuccess, SetSuccess } = React.useContext(AppContext);

  const [LoginValue, SetLoginValue] = React.useState('BestWebAdmin@gmail.com');
  const [PassValue, SetPassValue] = React.useState('BestWebAdmin');

  const [errorMail, setErrorMail] = React.useState(false);
  const [errorPass, setErrorPass] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!validateEmail(LoginValue)) {
      setErrorMail(true);
      isValid = false;
    } else {
      setErrorMail(false);
    }

    if (PassValue.length <= 7) {
      setErrorPass(true);
      isValid = false;
    } else {
      setErrorPass(false);
    }

    if (isValid) {
      // выполнение проверки на сервере
      if (LoginValue === 'BestWebAdmin@gmail.com' && PassValue === 'BestWebAdmin') {
        SetSuccess(true);
        navigate('/profile');
      } else {
        setErrorMessage('Invalid login or password');
      }
    }
  };

  const navigate = useNavigate();

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <main className="container mx-auto">
      <section className="authorization items-center h-screen grid gap-x-10 grid-cols-[1fr_1fr] justify-center max-[640px]:grid-cols-[1fr]">
        <div className="authorization_logo grid justify-end">
          <img src={require('../../../img/logo.webp')} width="500px" alt="logo" />
        </div>

        <form onSubmit={handleSubmit} className="justify-start grid max-[640px]:justify-center">
          <h1 className="max-[640px]:text-5xl mb-7">Enter in system</h1>
          <input
            onChange={(e) => SetLoginValue(e.target.value)}
            value={LoginValue}
            placeholder="Login or email"
            id="email"
            type="email"
            onKeyDown={onKeyDown}
          />
          {errorMail && <span className="text-red-500 mb-4">Invalid email format!</span>}
          <input
            type="password"
            onChange={(e) => SetPassValue(e.target.value)}
            value={PassValue}
            placeholder="Password"
            onKeyDown={onKeyDown}
          />
          {errorPass && (
            <span className="text-red-500">Password must be at least 8 characters long!</span>
          )}
          {(errorMail || errorPass || errorMessage) && (
            <span className="text-red-500 mb-4">
              {errorMessage ? errorMessage : 'Please fix the errors above!'}
            </span>
          )}
          <a href="">
            <h4>Forgot password?</h4>
          </a>
          {/* <a href="">
            <h4>Don't have an account? Register</h4>
          </a> */}
          <button onClick={handleSubmit}>Enter</button>
        </form>
      </section>
    </main>
  );
}
