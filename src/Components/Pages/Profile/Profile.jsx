import React from 'react';
import CardStyles from './Profile.module.sass';
import { AppContext } from '../../../App';
import { useState } from 'react';

export default function Profile() {
  const[firstName,setFirstName]=useState('');
  const[lastName,setLastName]=useState('');
  const[password,setPassword]=useState('');
  const[error,setError]=useState(false);
  const[errorMail,setErrorMail]=useState(false);
  const[errorPass,setErrorPass]=useState(false);
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(firstName==0||lastName==0){
      setError(true)
    }
    if (!validateEmail(state.email)) {
      setErrorMail(true);
    }
    if (validateEmail(state.email)) {
      setErrorMail(false);
    }
    if(password.length<=7){
      setErrorPass(true)
    }
    if(password.length>=8){
      setErrorPass(false)
    }
    if(lastName&&firstName){
      console.log(firstName,lastName);
    }
  }

  const[exp,setExp]=useState("");
  const[items,setItems]=useState([]);
  const handleExp=(e)=>{
    e.preventDefault();
  }
  function addItem(){
    if(!exp){
      alert("Enter the achievment");
      return;
    }
    const item = {
      id: Math.floor(Math.random()*1000),
      value:exp
    }
    setItems(oldList=>[...oldList,item]);
    setExp("");
    console.log(items)
  }
  function deleteItem(id){
    const newArray = items.filter(item=>item.id !== id);
    setItems(newArray)
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
      <form onSubmit={handleExp}>
        <input 
        type="text"
        value={exp}
        onChange={e=>setExp(e.target.value)}
        className='bg-gray-200 text-gray-700 appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none' type="text" />
        <button onClick={()=>addItem()}>Add the Achievment</button>
        <ul>
          {items.map(item=>{
            return(
              <React.Fragment>
              <div className='block'>
              <li className='min-w-0 inline' key={item.id}>{item.value}</li> <button className='p-[5px] h-auto min-w-0 inline' onClick={()=>deleteItem(item.id)}>x</button>
              </div>
              </React.Fragment>
            )
          })}
        </ul>
      </form>
    </div>
    <form onSubmit={handleSubmit} className="bg-white rounded p-[20px]">
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
          First Name
        </label>
        <input onChange={e=>setFirstName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="first-name" type="text" placeholder="Alem"/>
        {error&&firstName.length<=0?<div className='error'><p className="text-red-500 text-xs italic">Please fill out this field.</p></div>:""}
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
          Last Name
        </label>
        <input onChange={e=>setLastName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500" id="last-name" type="text" placeholder="Khan" />
        {error&&lastName.length<=0?<div className='error'><p className="text-red-500 text-xs italic">Please fill out this field.</p></div>:""}
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
          E-Mail
        </label>
        <input value={state.email} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="email" type="email" placeholder="For example: test@mail.ru"/>
        {errorMail && <p className="text-red-500 text-xs italic">Invalid Mail</p>}
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
          Password
        </label>
        <input onChange={e=>setPassword(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="password" type="password" placeholder="************"/>
        {errorPass?<div className='error'><p className="text-red-500 text-xs italic">Please set minimum 8 characters.</p></div>:""}
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
          City
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500" id="city" type="text" placeholder="Almaty"/>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
          Country
        </label>
        <div className="relative">
          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" id="country">
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
