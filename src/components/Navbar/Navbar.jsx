import React from 'react'
import { userAuthStore } from '../../store/userAuthStore'
import logo from "/assets/images/chatIcon.png"
import { Link } from 'react-router'

function Navbar() {
    const { logout, authUser } = userAuthStore()

    return (
        <div className="navbar bg-white dark:bg-black content-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:px-4 fixed">
            <div className="flex-1">
                <Link to="/" className='flex items-center ml-4'><img src={logo} className='h-8 mr-2' alt='logo' /><span className="text-2xl text-custblue dark:text-custblue uppercase font-black font-Open-Sans">Chatly</span></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">

                    {/* <li>
                        <Link to={"/settings"} className='text-black md:border-0 md:hover:text-custblue dark:text-white dark:hover:text-custblue capitalize font-Open-Sans text-base'>
                            Settings
                        </Link>
                    </li> */}

                    {
                        authUser ? (
                            <li>
                                <details>
                                    <summary className='text-black md:border-0 md:hover:text-custblue dark:text-white dark:hover:text-custblue capitalize font-Open-Sans text-base'>Menu</summary>
                                    <ul className="rounded-t-none p-2">
                                        <li>
                                            <Link to={"/profile"} className='text-black md:hover:text-custblue dark:text-white dark:hover:text-custblue capitalize font-Open-Sans'>
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <button className='text-black md:hover:text-custblue dark:text-white dark:hover:text-custblue capitalize font-Open-Sans' onClick={logout}>
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        ) :
                            <>
                            </>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar
