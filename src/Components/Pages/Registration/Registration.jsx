import React from 'react'
import CardStyles from './Registration.module.sass';

export default function Registration() {
  return (
    <main className='container mx-auto'>
        <section className='authorization items-center h-screen grid gap-x-10 grid-cols-[1fr_1fr] justify-center max-[640px]:grid-cols-[1fr]'>

            <div className="authorization_logo grid justify-end">
                <img src={require("../../../img/logo.webp")} width="500px" alt="logo"/>
            </div>

            <aside className='justify-start grid'>
                <h1>Enter in system</h1>
                <input placeholder="Login or email" type="text"/>
                <input placeholder="Password" type="text"/>
                <h3>Any Error</h3>
                <a href=""><p>Foget passowrd?</p></a>
                <a href=""><p>Don't have an account? Register</p></a>
                <button>Enter</button>
            </aside>

        </section>
    </main>
  )
}
