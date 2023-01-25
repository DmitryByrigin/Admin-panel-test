import React from 'react';
import CardStyles from './Profile.module.sass';
import { AppContext } from '../../../App';
import { useState } from 'react';

export default function Profile() {
  const[firstName,setFirstName]=useState('');
  const[lastName,setLastName]=useState('');
  const[error,setError]=useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(firstName==0||lastName==0){
      setError(true)
    }
    if(lastName&&firstName){
      console.log(firstName,lastName);
    }
  }
  return (
    <div className='grid gap-6 grid-cols-2 p-[5px]'>
    <div className='bg-white rounded info m-auto text-left p-[20px]'>
      <div className='inline-block relative w-[200px] h-[200px] rounded-[50%] overflow-hidden'>
        <img src={require('../../../img/3.jpg')} alt="" className='w-[auto] h-[100%]'/>
      </div>
      
      <p className='profile__name'>Hi I'm Jane!</p>
      <p className='profile__company'>Profession: Web Dev</p>
      <p className='profile__profession'>Company: Freelance</p>
      <p className='profile__achievments'>Achievments: 
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>...</li>
        </ul>
      </p>
    </div>
    <form onSubmit={handleSubmit} className="bg-white rounded p-[20px]">
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
          First Name
        </label>
        <input onChange={e=>setFirstName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first-name" type="text" placeholder="Alem"/>
        {error&&firstName.length<=0?<div className='error'><p className="text-red-500 text-xs italic">Please fill out this field.</p></div>:""}
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
          Last Name
        </label>
        <input onChange={e=>setLastName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last-name" type="text" placeholder="Khan" />
        {error&&lastName.length<=0?<div className='error'><p className="text-red-500 text-xs italic">Please fill out this field.</p></div>:""}
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
          E-Mail
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="For example: test@mail.ru"/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
          Password
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" type="password" placeholder="******************"/>
        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
          City
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="city" type="text" placeholder="Almaty"/>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
          Country
        </label>
        <div className="relative">
          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="country">
            <option>Kazakhstan</option>
            <option>Russia</option>
            <option>Ukraine</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      
        <button className='p-[5px]'>Save</button>
      
    </div>
  </form>
  </div>
  );
}
