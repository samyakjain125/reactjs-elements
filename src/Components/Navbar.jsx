import React, { useState } from 'react'

export default function Navbar() {
    const [menu, setMenu] = useState(0);
    const menuButton = () =>{
        if (menu === 0) {
            setMenu(1);
        }
        else{
            setMenu(0);
        }
    }
  return (
    <div className='px-5  w-full z-2 py-3 flex items-center justify-between bg-white shadow-lg fixed'>
        <img className=' logo w-[200px]' src="https://i.imgur.com/s6WKY0D.png" alt="" />
        <span className="md:hidden material-symbols-outlined" onClick={menuButton}>
menu
</span>
        <div className={menu===1?"md:flex 0 w-full  md:shadow-none  left-0 md:p-0 p-5  justify-end bg-white rounded-lg backdrop-blur-sm shadow-lg duration-300 md:static absolute -top-[100vh]":"md:flex 0 w-full  md:shadow-none duration-300  left-0 md:p-0 p-5 justify-end bg-white rounded-lg backdrop-blur-sm shadow-lg md:static absolute top-16"}>

        <ul className='flex md:flex-row flex-col items-center mr-5 justify-evenly'>
            <a className='block mx-5 my-3 md:my-0 md:hover:text-lg opacity-75 duration-200 md:hover:opacity-100'>about</a>
            <a className='block mx-5 my-3 md:my-0 md:hover:text-lg opacity-75 duration-200 md:hover:opacity-100'>about</a>
            <a className='block mx-5 my-3 md:my-0 md:hover:text-lg opacity-75 duration-200 md:hover:opacity-100'>about</a>
            <a className='block mx-5 my-3 md:my-0 md:hover:text-lg opacity-75 duration-200 md:hover:opacity-100'>about</a>
            <a className='block mx-5 my-3 md:my-0 md:hover:text-lg opacity-75 duration-200 md:hover:opacity-100'>about</a>
        </ul>
        <a className='mx-5 md:mx-0 flex justify-center text-center bg-yellow-300 active:ring active:ring-yellow-300 active:ring-offset-2 active:bg-orange-300 hover:bg-orange-400 duration-300 inline-block py-3 px-6 rounded-full' href="/">Call to Action</a>
        <p className='md:hidden opacity-25 text-sm text-center py-5'>Click on button to remove it</p>
        </div>
    </div>
  )
}
