import React, { Component } from 'react';
import CardStyles from './Team.module.sass';
import { AppContext } from '../../../App';
import Profile from '../Profile/Profile';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Team() {
  const { open, setOpen } = React.useContext(AppContext);
  return (
    <div className="">
      <section className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-left">
          <h1>Team and Projects</h1>
        </div>

        <a target="_blank" href="https://github.com/DmitryByrigin/Admin-panel">
          <u className="decoration-[#F5B935]">
            <h2>Admin-panel</h2>
          </u>
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="w-full bg-gray-900 rounded-2xl sahdow-lg p-12 grid grid-cols-[1fr] justify-items-center align-items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src="https://avatars.githubusercontent.com/u/83762401?v=4"
                alt="photo"
              />
            </div>
            <div className="text-center">
              <h4 className="mb-2">Dmitry Burygin</h4>
              <p className="mb-6">Frontend-developer</p>
              <button>
                <h4>Profile</h4>
              </button>
            </div>
          </div>

          <div className="w-full bg-gray-900 rounded-2xl sahdow-lg p-12 grid grid-cols-[1fr] justify-items-center align-items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={require('../../../img/alem.jpg')}
                alt="photo"
              />
            </div>
            <div className="text-center">
              <h4 className="mb-2">Alem Khan</h4>
              <p className="mb-6">Frontend-developer</p>
              <button>
                <h4>Profile</h4>
              </button>
            </div>
          </div>

          <div className="w-full bg-gray-900 rounded-2xl sahdow-lg p-12 grid grid-cols-[1fr] justify-items-center align-items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={require('../../../img/platon.jpg')}
                alt="photo"
              />
            </div>
            <div className="text-center">
              <h4 className="mb-2">Platon Lohvynenko</h4>
              <p className="mb-6">Frontend-developer</p>
              <button>
                <h4>Profile</h4>
              </button>
            </div>
          </div>

          <div className="w-full bg-gray-900 rounded-2xl sahdow-lg p-12 grid grid-cols-[1fr] justify-items-center align-items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={require('../../../img/artem.jpg')}
                alt="photo"
              />
            </div>
            <div className="text-center">
              <h4 className="mb-2">Artem Ponomarov</h4>
              <p className="mb-6">Frontend-developer</p>
              <button>
                <h4>Profile</h4>
              </button>
            </div>
          </div>

          <div className="w-full bg-gray-900 rounded-2xl sahdow-lg p-12 grid grid-cols-[1fr] justify-items-center align-items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={require('../../../img/tanya.png')}
                alt="photo"
              />
            </div>
            <div className="text-center">
              <h4 className="mb-2">Tatiana Krasnobrizaya</h4>
              <p className="mb-6">Frontend-developer</p>
              <button>
                <h4>Profile</h4>
              </button>
            </div>
          </div>
        </div>

        <a target="_blank" href="https://github.com/DmitryByrigin/Pizza-shop">
          <u className="decoration-[#F5B935]">
            <h2>Pizza-shop</h2>
          </u>
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="w-full bg-gray-900 rounded-2xl sahdow-lg p-12 grid grid-cols-[1fr] justify-items-center align-items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src="https://avatars.githubusercontent.com/u/83762401?v=4"
                alt="photo"
              />
            </div>

            <div className="text-center">
              <h4 className="mb-2">Dmitry Burygin</h4>
              <p className="mb-6">Frontend-developer</p>
              <button>
                <h4>Profile</h4>
              </button>
            </div>
          </div>
        </div>

        <a target="_blank" href="https://github.com/DmitryByrigin/Record-store">
          <u className="decoration-[#F5B935]">
            <h2>Record-store</h2>
          </u>
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="w-full bg-gray-900 rounded-2xl sahdow-lg p-12 grid grid-cols-[1fr] justify-items-center align-items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src="https://avatars.githubusercontent.com/u/83762401?v=4"
                alt="photo"
              />
            </div>
            <div className="text-center">
              <h4 className="mb-2">Dmitry Burygin</h4>
              <p className="mb-6">Frontend-developer</p>
              <button>
                <h4>Profile</h4>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
