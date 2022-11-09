import React, { useContext } from 'react'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { AuthContext } from '../../UserContext/UserContext';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../asset/logo.png'
import './Header.css'
function Header() {
    const { dark, setDark, user } = useContext(AuthContext);
    function handleDark() {
        localStorage.setItem('smile-theme', JSON.stringify(!dark));
        setDark(!dark);
    }
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={false}
                className='smileNav'
            >
                <Navbar.Brand>
                    <Link to='/'>
                        <img
                            src={logo}
                            className="mx-3 h-9 sm:h-9 brightness-110 cursor-pointer"
                            alt="Flowbite Logo"
                        />
                    </Link>
                    <span className="self-center whitespace-nowrap text-xl font-[PT Sans Narrow] text-[#00ACBD]">

                    </span>
                </Navbar.Brand>
                <div className="flex gap-2 xl:gap-4 items-center md:order-2">
                    {user?.uid != null && <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {user?.displayName}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {user?.email}
                            </span>
                        </Dropdown.Header>
                        <Link to='/profile'>
                            <Dropdown.Item>
                                Profile
                            </Dropdown.Item>
                        </Link>
                        <Link to='/login'>
                            <Dropdown.Item>
                                {user?.uid ? "Logout" : "Login"}
                            </Dropdown.Item>
                        </Link>
                    </Dropdown>}
                    <div className='border-2 p-1 rounded-md hidden sm:block'>
                        {dark ? <MdOutlineDarkMode className='text-xl text-white  cursor-pointer' title='click to light mode' onClick={handleDark} /> : <MdOutlineLightMode className='text-xl cursor-pointer' title='click to light mode' onClick={handleDark} />}
                    </div>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse style={{ alignItems: 'center' }}>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => (isActive ? "active-class" : "non-active-class dark:non-active-class")}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/services"
                        end
                        className={({ isActive }) => (isActive ? "active-class" : "non-active-class dark:non-active-class")}
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/review"
                        end
                        className={({ isActive }) => (isActive ? "active-class" : "non-active-class dark:non-active-class")}
                    >
                        Reviews
                    </NavLink>
                    <NavLink
                        to="/addservice"
                        end
                        className={({ isActive }) => (isActive ? "active-class" : "non-active-class dark:non-active-class")}
                    >
                        Add Service
                    </NavLink>
                    <NavLink
                        to="/blog"
                        end
                        className={({ isActive }) => (isActive ? "active-class" : "non-active-class dark:non-active-class")}
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to="/login"
                        end
                        className={({ isActive }) => (isActive ? "active-class" : "non-active-class dark:non-active-class")}
                    >
                        {user?.uid ? "Logout" : "Login"}
                    </NavLink>
                    <Navbar.Link>
                        <div className='absolute top-[69px] right-[12px] sm:hidden border-2 p-1 rounded-md'>
                            {dark ? <MdOutlineDarkMode className='text-xl cursor-pointer' title='click to light mode' onClick={handleDark} /> : <MdOutlineLightMode className='text-xl cursor-pointer' title='click to light mode' onClick={handleDark} />}
                        </div>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;