import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import { AuthContext } from '../../providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const CommonSidebar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {logOut} = useContext(AuthContext);
    // logout 
    const handleLogout = () => {
        logOut()
        .then(() => {
            toast.success('Successfully logged out'); 
        })
        .catch(error => console.log(error))
    }


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <Toaster></Toaster>
      {/* Left Sidebar */}
      <nav className="hidden lg:flex flex-col w-64 border-r bg-white">
        <div className="p-4">
          {/* Your logo or branding */}
          <img src={logo} alt="" className="w-16 h-16" />
        </div>
        <div className="flex-1 overflow-y-auto">
          {/* Navigation Links */}
          <ul className="space-y-2 py-4">
            <li>
              <Link to="/dashboard" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/create-task" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                Create Task
              </Link>
            </li>
            <li>
              <Link to="/dashboard/ToDoList" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                ToDoList
              </Link>
            </li>
            <li>
              <Link to="/dashboard/update-task" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                Update Task
              </Link>
            </li>
            <li>
              <Link to="/" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                Home
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="block p-2 text-gray-700 hover:bg-gray-200 rounded w-full text-left">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none p-3 border-2">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden z-50" onClick={toggleMobileMenu} />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-y-0 left-0 w-64 bg-white border-r overflow-y-auto z-50">
          {/* Mobile Menu Content */}
          <div className="p-4">
            <img src={logo} alt="" className="w-16 h-16 mx-auto" />
          </div>
          <ul className="py-4">
            <li>
              <Link to="/dashboard" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/create-task" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                Create Task
              </Link>
            </li>
            <li>
              <Link to="/dashboard/ToDoList" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                ToDoList
              </Link>
            </li>
            <li>
              <Link to="/dashboard/update-task" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                Update Task
              </Link>
            </li>
            <li>
              <Link to="/" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                Home
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="block p-2 text-gray-700 hover:bg-gray-200 rounded w-full text-left">
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default CommonSidebar;
