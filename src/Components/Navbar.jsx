

import { Link, NavLink } from 'react-router-dom';
import logo from './../assets/logo/logo.png'
import { useContext } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
        .then(result => {
        Swal.fire({
            icon: "success",
            title: "Congratulation!",
            text: "Successfully Sign Out!",
        });
        })
        .catch(error => {
        alert('Something went wrong!');
        })
    }

const links = 

<>

<NavLink
className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning transition hover:scale-110'}`}
to="/">Home</NavLink>

<NavLink 
className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning transition hover:scale-110'}`}
to="/all-review">All Reviews</NavLink>

<NavLink
className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning transition hover:scale-110'}`} 
to="/add-review">Add Review</NavLink>

<NavLink
className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning transition hover:scale-110'}`} 
to="/my-reviews">My Reviews</NavLink>

<NavLink
className={({ isActive }) => `font-bold ${isActive? 'text-warning': 'hover:text-warning transition hover:scale-110'}`} 
to="/watchList">Game WatchList</NavLink>

</>

return (
<div className="bg-black bg-opacity-60 shadow-lg text-white py-4 fixed w-full top-0 z-50">
    <div className="navbar">
    <div className="navbar-start">
    <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
    </div>
    <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-4 uppercase">
        {links}
    </ul>
    </div>
    <img className="w-14 h-12 rounded-sm transition hover:scale-110" src={logo} alt="" />
    <h3 className="text-3xl font-bold text-orange-500 ml-4 uppercase transition hover:scale-110">Chill Gamer</h3>
</div>
<div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-8 text-xl font-semibold uppercase">
    {links}
    </ul>
</div>
<div className="navbar-end space-x-4">

    {
        user ? 
        <div className="flex items-center gap-6 ">
        <h3 className="text-xl font-medium hover:text-warning transition hover:scale-110">{user.email}</h3>
        <button 
        onClick={handleSignOut}
        className="btn bg-blue-600 text-white text-xl font-semibold border-none uppercase">Sign Out</button>
        </div>

        :

        <>
        <Link className="underline text-2xl font-semibold transition hover:scale-110 hover:text-warning uppercase" to="/register">Register</Link>
        <Link to="/signin"><button className="btn bg-orange-500 border-none text-white text-xl font-semibold uppercase">Sign In</button></Link>
        </>
    }


</div>
</div>
    </div>
    );
};

export default Navbar;