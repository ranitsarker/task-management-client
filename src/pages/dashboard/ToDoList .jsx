import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';
import CommonSidebar from '../../components/dashboard/CommonSidebar';

const ToDoList = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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

  return (
    <div className="flex  bg-gray-100">
      <CommonSidebar></CommonSidebar>
      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Page Content */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800">ToDo List for {user.displayName}</h2>

          {/* Task List */}
          {loading ? (
            <p>Loading tasks...</p>
          ) : error ? (
            <p>{error}</p>
            ) : tasks.length === 0 ? (
              <p>You do not have any tasks yet.</p>
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
    </div>
  );
};

export default ToDoList;
