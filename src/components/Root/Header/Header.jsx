import { NavLink } from "react-router-dom";
import './Header.css';


const Header = () => {
    const links = <>
        <li className="font-semibold text-lg mr-4"><NavLink to="/">Home</NavLink> </li>
        <li className="font-semibold text-lg mr-4"> <NavLink to="/listed">Listed Books</NavLink> </li>
        <li className="font-semibold text-lg mr-4"><NavLink to="/pages">Pages to Read</NavLink> </li>
    </>

    return (
        <div className="navbar bg-base-100 max-w-[1200px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-[28px] font-bold">Book
                    Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <button className="rounded-lg text-lg font-semibold text-white px-4 bg-[#23BE0A] p-2">Sign In</button>
                <button className="rounded-lg text-lg font-semibold text-white px-4 bg-[#59C6D2] p-2">Sign Up</button>
            </div>
        </div>
    );
};

export default Header;