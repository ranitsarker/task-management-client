import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import logo from "../assets/logo/logo.png"

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    // logout 
    const handleLogout = () => {
        logOut()
        .then(() => {
            toast.success('Successfully logged out'); 
        })
        .catch(error => console.log(error))
    }

    const navItems = (
      <ul className="lg:flex items-center space-x-4">
        <li>
          <NavLink
            to='/'
            className="text-white font-bold text-lg hover:bg-white hover:text-black px-3 py-2 rounded"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about-us'
            className="text-white font-bold text-lg hover:bg-white hover:text-black px-3 py-2 rounded"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/benefit'
            className="text-white font-bold text-lg hover:bg-white hover:text-black px-3 py-2 rounded"
          >
            Who Can Benefit
          </NavLink>
        </li>
        {user?.email ? (
          <>
            <li className="relative group">
              <div className="flex items-center">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="w-8 h-8 rounded-full ml-2 group-hover:opacity-80"
                  />
                )}
              </div>
              <div className="hidden group-hover:flex absolute top-12 right-0 flex-col items-start bg-white p-2 rounded shadow">
                <span className="text-sm font-medium">{user.email}</span>
                <button
                  onClick={handleLogout}
                  className="text-black font-bold text-lg hover:bg-white hover:text-black px-3 py-2 rounded"
                >
                  Logout
                </button>
              </div>
            </li>
          </>
        ) : (
          <li>
            <NavLink
              to='/login'
              className="text-white font-bold text-lg hover:bg-white hover:text-black px-3 py-2 rounded"
            >
              Login
            </NavLink>
          </li>
        )}
      </ul>
    );
    

    
    
    return (
        <>
            <div className="navbar bg-gray-900">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-green-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-900 rounded-box w-52">
                        {navItems}
                    </ul>
                    </div>
                    <Link to="/" className="flex items-center">
                      <img
                        src={logo}
                        alt="Task management"
                        className="w-16 h-auto mr-2"
                      />
                      <span className="text-white text-xl font-bold">TaskZen</span>
                    </Link>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                </div>
        </>
    );
};

export default Navbar;