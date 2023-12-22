import { useEffect, useState, useContext, useCallback } from 'react';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';
import CommonSidebar from '../../components/dashboard/CommonSidebar';

const ToDoList = () => {
  const { user } = useContext(AuthContext);

  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem(`tasks_${user.email}`)) || { todo: [], ongoing: [], complete: [] };
    return storedTasks;
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTasks = async () => {
      try {
        // Fetch tasks from the server
        const response = await axios.get(`http://localhost:5000/get-user-tasks/${user.email}`);
        const userTasks = {
          todo: response.data.tasks.filter((task) => task.status === 'todo'),
          ongoing: response.data.tasks.filter((task) => task.status === 'ongoing'),
          complete: response.data.tasks.filter((task) => task.status === 'complete'),
        };
  
        // Update the local state and localStorage
        setTasks(userTasks);
        localStorage.setItem(`tasks_${user.email}`, JSON.stringify(userTasks));
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setError('Failed to fetch tasks. Please try again.');
      } finally {
        // Set loading to false after updating state and localStorage
        setLoading(false);
      }
    };
  
    // Check if there are tasks in localStorage; if not, fetch from the server
    const storedTasks = JSON.parse(localStorage.getItem(`tasks_${user.email}`)) || { todo: [], ongoing: [], complete: [] };
    setTasks(storedTasks);
  
    if (!storedTasks.todo || storedTasks.todo.length === 0) {
      if (user) {
        // Fetch tasks only if the user is authenticated
        setLoading(true);
        loadTasks();
      }
    } else {
      // Set loading to false if tasks are available in localStorage
      setLoading(false);
    }
  }, [user]);
  

  const handleDragStart = (e, task, status) => {
    e.dataTransfer.setData('task', JSON.stringify({ task, status }));
  };

  const handleDrop = useCallback(
    (e, newStatus) => {
      e.preventDefault();
      const { task, status } = JSON.parse(e.dataTransfer.getData('task'));

      if (status !== newStatus) {
        // Update the local state
        setTasks((prevTasks) => {
          const updatedTasks = { ...prevTasks };
          updatedTasks[status] = updatedTasks[status].filter((t) => t._id !== task._id);
          task.status = newStatus;
          updatedTasks[newStatus] = [...updatedTasks[newStatus], task];

          // Update localStorage
          localStorage.setItem(`tasks_${user.email}`, JSON.stringify(updatedTasks));

          return updatedTasks;
        });
      }
    },
    [user.email]
  );

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex bg-gray-100">
      <CommonSidebar />
      <div className="flex-1 p-4">
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800">ToDo List for {user.displayName}</h2>

          {loading ? (
            <p>Loading tasks...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="flex">
              {Object.keys(tasks).map((status) => (
                <div
                  key={status}
                  className="flex-1 p-4 border rounded mr-4"
                  onDrop={(e) => handleDrop(e, status)}
                  onDragOver={allowDrop}
                >
                  <h3 className="text-lg font-semibold text-gray-800">{status}</h3>
                  <ul className="space-y-4">
                    {tasks[status].map((task) => (
                      <li
                        key={task._id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, task, status)}
                        className="bg-white p-4 rounded shadow"
                      >
                        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                        <p className="text-gray-600">{task.description}</p>
                        <p className="text-gray-600">Deadline: {task.deadline}</p>
                        <p className="text-gray-600">Priority: {task.priority}</p>
                        <p className="text-gray-600">Created By: {task.createdBy.displayName}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;