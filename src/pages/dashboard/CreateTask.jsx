import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/logo/logo.png';
import { AuthContext } from '../../providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const CreateTask = () => {
    const { user } = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('');
    const [taskPriority, setTaskPriority] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        const response = await axios.post('http://localhost:5000/create-task', {
          title: taskTitle,
          description: taskDescription,
          deadline: taskDeadline,
          priority: taskPriority,
          createdBy: user,
        });
  
        console.log('Server response:', response.data);
  
        if (response.data.success) {
        //   console.log('Task submitted successfully');
          toast.success('Task submitted successfully');
          setTaskTitle('');
          setTaskDescription('');
          setTaskDeadline('');
          setTaskPriority('');
          setError('');
        } else {
          console.error('Error creating task:', response.data.error);
          setError('Failed to create task. Please try again.');
          toast.error('Failed to create task. Please try again.');
        }
      } catch (error) {
        console.error('Unexpected error:', error);
        setError('An unexpected error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
        <Toaster></Toaster>
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
            </li>
            <li>
              <Link to="/dashboard/ToDoList" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                ToDoList
              </Link>
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
          <h2 className="text-2xl font-bold text-gray-800">Create Task</h2>

          {/* Task Form */}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-600">Task Title</label>
              <input
                type="text"
                id="taskTitle"
                name="taskTitle"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="mt-1 p-2 border rounded w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-600">Task Description</label>
              <textarea
                id="taskDescription"
                name="taskDescription"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="mt-1 p-2 border rounded w-full"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="taskDeadline" className="block text-sm font-medium text-gray-600">Task Deadline</label>
              <input
                type="date"
                id="taskDeadline"
                name="taskDeadline"
                value={taskDeadline}
                onChange={(e) => setTaskDeadline(e.target.value)}
                className="mt-1 p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="taskPriority" className="block text-sm font-medium text-gray-600">Task Priority</label>
              <select
                id="taskPriority"
                name="taskPriority"
                value={taskPriority}
                onChange={(e) => setTaskPriority(e.target.value)}
                className="mt-1 p-2 border rounded w-full"
                required
              >
                <option value="" disabled>Select Priority</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
            </div>

            {error && (
              <div className="text-red-600 mb-4">
                {error}
              </div>
            )}

            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none">
              {loading ? 'Creating Task...' : 'Create Task'}
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0  bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={toggleMobileMenu}
        />
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
            <li>
              <Link to="/dashboard/ToDoList" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                ToDoList
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreateTask;
