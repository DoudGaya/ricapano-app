import React, { useState } from "react";
import logoBlack from './assets/logo_black.png'
import logowWhite from './assets/logo_white.png'
import coverImage from './assets/users/bg_cover.jpg'

export default function Login () {

    const [userData, setUserdata] = useState({
        userName: '',
        password: ''
    })

    const gettingRecords = (event) => {

        setUserdata( (prevdata) => {
            return {
                ...prevdata,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <>
        <div className=" md:flex md:w-full md:h-screen md:justify-center md:p-20">
        <div className=" hidden md:flex w-2/4 ">
            <img src={coverImage} alt="" className=" w-full rounded-l-lg h-full object-cover" srcSet="" />
        </div>
        <div className=" w-full md:w-1/4 bg-white h-screen md:h-full rounded-r-lg md:px-8 ">
            {/* Logo container */}
            <div className=" mx-auto flex flex-col pt-16 items-center space-y-10 justify-center">
                <div className=" bg-white p-6 drop-shadow-lg shadow-lg w-[150px] h-[150px] flex items-center justify-center transform py-6 mt-20 rotate-45 rounded-xl overflow-hidden">
                    <img src={logowWhite} alt="ricapano logo" className="  transform  -rotate-45 " srcSet="" />
                </div>
                <h3 className=" text-4xl font-logo font-semibold tracking-wider">riCapano</h3>
            </div>
            <form className=" px-8  py-6 space-y-6 flex flex-col">
                <div className="px-2 py-2 md:py-0 bg-gray-100 border-gray-400 border items-center space-x-2 rounded-md flex">
                    <label htmlFor="username" hidden>Username</label>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 opacity-50 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <input type="text" name="userName" value={userData.userName} onChange={gettingRecords} autoCapitalize="off" autoComplete="off" placeholder="Email, username, Phone Number" autoCorrect="off" className=" placeholder:text-cyan-800 bg-gray-100 placeholder:font-logo text-lg w-full outline-none py-1" />
                </div>

                <div className="px-2 py-2 md:py-0 bg-gray-100 border-gray-400 border items-center space-x-2 rounded-md flex">
                    <label htmlFor="username" hidden>Password</label>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 opacity-50 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>

                    <input type="password" name="password" value={userData.password} onChange={gettingRecords} placeholder="password" className=" placeholder:text-cyan-800 bg-gray-100 placeholder:font-logo text-lg w-full outline-none py-1" />
                </div>
                    <button className=" w-full bg-black py-3 md:py-2 md:text-base rounded-lg font-semibold text-white text-xl">Submit</button>
            </form>
        </div>
        </div>
        </>
    )
}