import React from 'react'
import CardStyles from './Header.module.sass';
import { AppContext } from '../../../App';
import { CgMenuGridR } from "react-icons/cg";

export default function Header() {
  const {open, setOpen} = React.useContext(AppContext);
  return (
   
   <section className='bg-[#198754] w-full grid items-center justify-items-center'>
    
    <ul className="header_ul grid w-full min-h-[50%] items-center grid-cols-6 grid-rows-[1fr] max-[1024px]:gap-0">
        <li className="list-none justify-items-start gap-2 m-3 grid grid-cols-[15%_1fr] max-[1024px]:grid-cols-[1fr] max-[1024px]:justify-items-center">
            <CgMenuGridR onClick={() => setOpen(!open)} color="white" className="grid cursor-pointer text-3xl justify-items-start max-[1024px]:text-5xl"/>
            <p onClick={() => setOpen(!open)} className="cursor-pointer grid justify-items-start max-[1024px]:hidden">Fhhhhhhdhh</p>
            
        </li>

        <li className="list-none justify-items-start gap-2 m-3 grid grid-cols-[15%_1fr] max-[1024px]:grid-cols-[1fr] max-[1024px]:justify-items-center">
            <CgMenuGridR color="white" className="grid cursor-pointer text-3xl justify-items-start max-[1024px]:text-5xl"/>
            <p className="grid cursor-pointer justify-items-start max-[1024px]:hidden">Fhhhhhhdhh</p>
            
        </li>

        {/* <div></div> */}
        <li className="list-none justify-items-start gap-2 m-3 grid grid-cols-[15%_1fr] max-[1024px]:grid-cols-[1fr] max-[1024px]:justify-items-center">
            <CgMenuGridR color="white" className="grid cursor-pointer text-3xl justify-items-start max-[1024px]:text-5xl"/>
            <p className="grid cursor-pointer justify-items-start max-[1024px]:hidden">Fhhhhhhdhh</p>
            
        </li>
        
        <li className="list-none justify-items-start gap-2 m-3 grid grid-cols-[15%_1fr] max-[1024px]:grid-cols-[1fr] max-[1024px]:justify-items-center">
            <CgMenuGridR color="white" className="grid cursor-pointer text-3xl justify-items-start max-[1024px]:text-5xl"/>
            <p className="grid cursor-pointer justify-items-start max-[1024px]:hidden">Fhhhhhhdhh</p>
            
        </li>

        <li className="list-none justify-items-start gap-2 m-3 grid grid-cols-[15%_1fr] max-[1024px]:grid-cols-[1fr] max-[1024px]:justify-items-center">
            <CgMenuGridR color="white" className="grid cursor-pointer text-3xl justify-items-start max-[1024px]:text-5xl"/>
            <p className="grid cursor-pointer justify-items-start max-[1024px]:hidden">Fhhhhhhdhh</p>
            
        </li>

        <li className="list-none justify-items-start gap-2 m-3 grid grid-cols-[15%_1fr] max-[1024px]:grid-cols-[1fr] max-[1024px]:justify-items-center">
            <CgMenuGridR color="white" className="grid cursor-pointer text-3xl justify-items-start max-[1024px]:text-5xl"/>
            <p className="grid cursor-pointer justify-items-start max-[1024px]:hidden">Fhhhhhhdhh</p>
            
        </li>
    </ul>
   </section>

  )
}
