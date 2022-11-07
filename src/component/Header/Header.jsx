import React, { useContext } from 'react'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { AuthContext } from '../../UserContext/UserContext';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
function Header() {
    const { dark, setDark } = useContext(AuthContext);
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={false}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite
                    </span>
                </Navbar.Brand>
                <div className="flex gap-2 xl:gap-4 items-center md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            <Link to='/profile'>
                                Profile
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Login
                        </Dropdown.Item>
                    </Dropdown>
                    <div className='border-2 p-1 rounded-md hidden sm:block'>
                        {dark ? <MdOutlineDarkMode className='text-xl text-white  cursor-pointer' title='click to light mode' onClick={() => setDark(!dark)} /> : <MdOutlineLightMode className='text-xl cursor-pointer' title='click to light mode' onClick={() => setDark(!dark)} />}
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
                        to="/review"
                        end
                        className={({ isActive }) => (isActive ? "active-class" : "non-active-class dark:non-active-class")}
                    >
                        Reviews
                    </NavLink>
                    <NavLink
                        to="/login"
                        end
                        className={({ isActive }) => (isActive ? "active-class" : "non-active-class dark:non-active-class")}
                    >
                        Login
                    </NavLink>
                    <Navbar.Link>
                        <div className='absolute top-[69px] right-[12px] sm:hidden border-2 p-1 rounded-md'>
                            {dark ? <MdOutlineDarkMode className='text-xl cursor-pointer' title='click to light mode' onClick={() => setDark(!dark)} /> : <MdOutlineLightMode className='text-xl cursor-pointer' title='click to light mode' onClick={() => setDark(!dark)} />}
                        </div>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;