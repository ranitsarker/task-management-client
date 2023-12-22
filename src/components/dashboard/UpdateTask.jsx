import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';
import CommonSidebar from '../../components/dashboard/CommonSidebar';
import toast, { Toaster } from 'react-hot-toast';

const UpdateTask = () => {
  const { user } = useContext(AuthContext);

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);
  const [updateFormData, setUpdateFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    priority: '',
  });

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

  const handleUpdateClick = (task) => {
    // Set the selected task for editing
    setSelectedTask(task);

    // Set the form data with the existing task details
    setUpdateFormData({
      title: task.title,
      description: task.description,
      deadline: task.deadline,
      priority: task.priority,
    });
  };

  const handleUpdateInputChange = (e) => {
    // Update the form data as the user types
    setUpdateFormData({ ...updateFormData, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:5000/update-task/${selectedTask._id}`, updateFormData);
      if (response.data.success) {
        // Refresh tasks after update
        const updatedUserTasks = await axios.get(`http://localhost:5000/get-user-tasks/${user.email}`);
        setTasks(updatedUserTasks.data.tasks);

        // Clear selected task and form data after update
        setSelectedTask(null);
        setUpdateFormData({
          title: '',
          description: '',
          deadline: '',
          priority: '',
        });

        // Show toast on successful update
        toast.success('Task updated successfully');
      } else {
        console.error('Failed to update task:', response.data.error);

        // Show toast on unsuccessful update
        toast.error('Failed to update task');
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="flex bg-gray-100">
      <Toaster></Toaster>
      <CommonSidebar />
      <div className="flex-1 p-4">
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800">All Tasks for {user.displayName}</h2>

          {loading ? (
            <p>Loading tasks...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="flex flex-col">
              <ul className="space-y-4">
                {tasks.map((task) => (
                  <li key={task._id} className="bg-white p-4 rounded shadow mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                    <p className="text-gray-600">{task.description}</p>
                    <p className="text-gray-600">Deadline: {task.deadline}</p>
                    <p className="text-gray-600">Priority: {task.priority}</p>
                    <p className="text-gray-600">Created By: {task.createdBy.displayName}</p>
                    <button onClick={() => handleUpdateClick(task)}>Update</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Modal for task updates */}
      {selectedTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Update Task</h2>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={updateFormData.title}
                  onChange={handleUpdateInputChange}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={updateFormData.description}
                  onChange={handleUpdateInputChange}
                  className="mt-1 p-2 w-full border rounded"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="deadline" className="block text-sm font-medium text-gray-600">
                  Deadline
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={updateFormData.deadline}
                  onChange={handleUpdateInputChange}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="priority" className="block text-sm font-medium text-gray-600">
                  Priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={updateFormData.priority}
                  onChange={handleUpdateInputChange}
                  className="mt-1 p-2 w-full border rounded"
                  required
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTask(null)}
                  className="ml-2 text-gray-600 p-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateTask;
