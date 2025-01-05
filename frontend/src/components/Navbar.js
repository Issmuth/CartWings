'use client';
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const toggleSignin = () => {
        setIsSigningIn(!isSigningIn);
    }

    const toggleSignup = () => {
        setIsSignup(!isSignup);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
        toggleSignin();
    }

    return (
        <nav className="flex flex-col py-5 md:py-0">
            <div className="flex justify-between items-center w-full border-b-[1px] px-5 pb-4 md:border-none md:px-24 md:py-3">
                <a href="/">
                    <picture>
                        <source srcSet='/images/logo-small.png' media='(max-width: 767.98px)' />
                        <source srcSet='/images/logo.png' media='(min-width: 768px)' />
                        <Image src='/images/logo.png' alt='cart-wings logo' width={792} height={201} className='h-10 w-auto' />
                    </picture>
                </a>
                <ul className="hidden md:flex justify-center mt-3 gap-6 text-lg font-semi text-accentGreenLight">
                    <li className="tab"><a href="/travel">Travel</a></li>
                    <li className="tab"><a href="/order">Order</a></li>
                </ul>
                <button className={`${isLoggedIn ? 'hidden' : ''} py-2 px-8 border-[1.5px] border-solid border-accentGreenLight rounded-lg font-bold text-accentGreenLight hover:bg-accentGreenLight hover:text-white transition-all ease-in duration-200`} onClick={toggleSignin}>Sign in</button>
                <div className={`flex items-center h-fit gap-2 cursor-pointer rounded-full ease-in-out duration-300 hover:bg-accentPurpleExtralight pr-4 ${isLoggedIn ? '' : 'hidden'}`} onClick={toggleSidebar}>
                    <Image src='/images/profile.jpg' alt='user' width={50} height={50} className="rounded-full border-[1.5px] border-accentPurpleLight"/>
                    <h2 className="hidden font-semibold font-primary text-accentPurpleLight md:block">Hassan</h2>
                </div>
            </div>
            <ul className="flex justify-center w-full mt-3 gap-4 text-xl font-semi text-accentGreenLight md:hidden">
                <li className="tab"><a href="/travel">Travel</a></li>
                <li className="tab"><a href="/order">Order</a></li>
            </ul>
            <div className={`fixed z-20 top-2 right-0 h-[95%] w-[80%] max-w-[300px] glass shadow-lg border-t-[1.5px] border-b-[1.5px] border-l-[1.5px] border-accentGreenLight rounded-l-2xl transform  ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
                <button className="absolute top-4 right-4" onClick={toggleSidebar}><Image width={25} height={25} src='/images/Close.png'/></button>
                <ul className="mt-16">
                    <li className="p-4 border-b"><a href="#">Profile</a></li>
                    <li className="p-4 border-b"><a href="#">Settings</a></li>
                    <li className="p-4 border-b"><a href="#">Logout</a></li>
                </ul>
            </div>

            <div className={`top-0 left-0 fixed w-[100%] h-[100%] z-20 bg-black bg-opacity-30 flex justify-center px-6 pt-12 md:py-4 transform  ${isSigningIn ? '-translate-y-0' : '-translate-y-full'} transition-transform ease-in-out duration-400`}>
                <div className="w-full max-w-[495px] glass rounded-2xl shadow-xl border-2 border-white min-h-[400px] max-h-[570px] md:px-10 overflow-hidden">
                    <button className="absolute top-4 right-4 z-10" onClick={toggleSignin}><Image width={25} height={25} src='/images/Close.png'/></button>
                    <div className={`absolute inset-0 transform ${isSignup ? '-translate-x-full' : 'translate-x-0'} transition-transform ease-in-out duration-500`}>
                        <form className="flex flex-col gap-5 px-6 py-14 justify-center" onSubmit={handleSubmit}>
                            <h1 className="font-primary text-4xl">Log in</h1>
                            <div className="input input-green">
                                <input type="email" placeholder="Email"/>
                            </div>
                            <div className="input input-green">
                                <input type="password" placeholder="Password"/>
                                <Image src='/images/Eye.png' width={25} height={25} className="h-5 w-auto"/>
                            </div>
                            <div className="flex text-sm justify-between">
                                <a>forgot password?</a>
                                <div className="flex items-center gap-1">
                                    <input id="Remember" type="checkbox"/>
                                    <label htmlFor="Remember">Remember me</label>
                                </div>
                            </div>
                            <button className="button-green" type="submit">Login</button>
                            <div className="flex justify-center text-sm gap-1">
                                <p>Don't have an Account?</p>
                                <span className="font-bold text-accentGreen cursor-pointer" onClick={toggleSignup}>Sign up</span>
                            </div>
                            <div className="flex flex-col items-center w-full gap-2">
                                <h2>Continue with</h2>
                                <div className="flex gap-5">
                                    <a><Image src='/images/Google.png' width={40} height={40}/></a>
                                    <a><Image src='/images/Facebook.png' width={43} height={43}/></a>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className={`absolute inset-0 transform ${isSignup ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-500`}>
                        <form className="flex flex-col gap-5 px-6 py-14 justify-center" onSubmit={handleSubmit}>
                            <h1 className="font-primary text-4xl">Sign up</h1>
                            <div className="input input-green">
                                <input type="email" placeholder="Email"/>
                            </div>
                            <div className="input input-green">
                                <input type="password" placeholder="Password"/>
                                <Image src='/images/Eye.png' width={25} height={25} className="h-5 w-auto"/>
                            </div>
                            <div className="input input-green">
                                <input type="password" placeholder="Confirm Password"/>
                                <Image src='/images/Eye.png' width={25} height={25} className="h-5 w-auto"/>
                            </div>
                            <button className="button-green" type="submit">Sign up</button>
                            <div className="flex justify-center text-sm gap-1">
                                <p>Already have an account?</p>
                                <span className="font-bold text-accentGreen cursor-pointer" onClick={toggleSignup}>Log in</span>
                            </div>
                            <div className="flex flex-col items-center w-full gap-2">
                                <h2>Continue with</h2>
                                <div className="flex gap-5">
                                    <a><Image src='/images/Google.png' width={40} height={40}/></a>
                                    <a><Image src='/images/Facebook.png' width={43} height={43}/></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;