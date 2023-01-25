import React,{ Component } from 'react';
import CardStyles from './Team.module.sass';
import { AppContext } from '../../../App';
import Profile from '../Profile/Profile';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Team() {
  const { open, setOpen } = React.useContext(AppContext);
  return (
    <div className="">
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-left">
          <h1>Команда и проекты</h1>
        </div>
        <h2>Admin panel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="w-full bg-gray-900 rounded-2xl sahdow-lg p-12 grid grid-cols-[1fr] justify-items-center align-items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="photo"
              />
            </div>
            <div className="text-center">
              <h4 className="mb-2">Platon Plotonovich</h4>
              <p className="mb-6">Software Engineer</p>
              <button>
                <h4><Link to="<Profile />">ll</Link></h4>
              </button>
            </div>
          </div>

          <div className="w-full bg-gray-900 rounded-2xl sahdow-lg p-12 grid grid-cols-[1fr] justify-items-center align-items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="photo"
              />
            </div>
            <div className="text-center">
              <h4 className="mb-2">Platon Plotonovich</h4>
              <p className="mb-6">Software Engineer</p>
              <button>
                <h4>Profile</h4>
              </button>
            </div>
          </div>

          <div className="w-full bg-gray-900 rounded-2xl sahdow-lg p-12 grid grid-cols-[1fr] justify-items-center align-items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="photo"
              />
            </div>
            <div className="text-center">
              <h4 className="mb-2">Platon Plotonovich</h4>
              <p className="mb-6">Software Engineer</p>
              <button>
                <h4>Profile</h4>
              </button>
            </div>
          </div>
        </div>

        <h2>React Sneakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="w-full bg-gray-900 rounded-2xl sahdow-lg p-12 grid grid-cols-[1fr] justify-items-center align-items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="photo"
              />
            </div>
            <div className="text-center">
              <h4 className="mb-2">Platon Plotonovich</h4>
              <p className="mb-6">Software Engineer</p>
              <button>
                <h4>Profile</h4>
              </button>
            </div>
          </div>

          <div className="w-full bg-gray-900 rounded-2xl sahdow-lg p-12 grid grid-cols-[1fr] justify-items-center align-items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="photo"
              />
            </div>
            <div className="text-center">
              <h4 className="mb-2">Platon Plotonovich</h4>
              <p className="mb-6">Software Engineer</p>
              <button>
                <h4>Profile</h4>
              </button>
            </div>
          </div>

          <div className="w-full bg-gray-900 rounded-2xl sahdow-lg p-12 grid grid-cols-[1fr] justify-items-center align-items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="photo"
              />
            </div>
            <div className="text-center">
              <h4 className="mb-2">Platon Plotonovich</h4>
              <p className="mb-6">Software Engineer</p>
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
