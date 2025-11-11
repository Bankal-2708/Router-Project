import React from 'react'
import {Link} from "react-router-dom";
function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Link to='/'>
            <img  src="https://plus.unsplash.com/premium_vector-1759579152814-77ed7cf00ac3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074" 
            className='h-60 w-60 md:h-90 md:w-90 object-cover '
            alt="" />
        </Link>
        <h1 className='font-bold text-4xl'>Lorem ipsum dolor</h1>
    </div>
  )
}

export default Home