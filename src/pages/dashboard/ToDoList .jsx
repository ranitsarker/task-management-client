import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import { AuthContext } from '../../providers/AuthProvider';

const ToDoList = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchUserTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/get-user-tasks/${user.email}`);
        setTasks(response.data.tasks);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setError('Failed to fetch tasks. Please try again.');
        setLoading(false);
      }
    };

    if (user) {
      fetchUserTasks();
    }
  }, [user]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex  bg-gray-100">
      {/* Left Sidebar */}
      <nav className="hidden lg:flex flex-col w-64 border-r bg-white">
        <div className="p-4">
          {/* Your logo or branding */}
          <img src={logo} alt="" className="w-24 h-24" />
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
              {/* Add more links as needed */}
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Page Content */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800">ToDo List for {user.displayName}</h2>

          {/* Task List */}
          {loading ? (
            <p>Loading tasks...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <ul className="space-y-4">
              {tasks.map((task) => (
                <li key={task._id} className="bg-white p-4 rounded shadow">
                  <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                  <p className="text-gray-600">{task.description}</p>
                  <p className="text-gray-600">Deadline: {task.deadline}</p>
                  <p className="text-gray-600">Priority: {task.priority}</p>
                  <p className="text-gray-600">Created By: {task.createdBy.displayName}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden" onClick={toggleMobileMenu} />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-y-0 left-0 w-64 bg-white border-r overflow-y-auto">
          {/* Mobile Menu Content */}
          <div className="p-4">
            <h1 className="text-2xl font-bold text-green-600">Your Logo</h1>
          </div>
          <ul className="py-4">
            <li>
              <Link to="/dashboard" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ToDoList;
