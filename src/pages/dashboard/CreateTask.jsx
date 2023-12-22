import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import CommonSidebar from '../../components/dashboard/CommonSidebar';

const CreateTask = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/create-task', {
        ...data,
        createdBy: user,
      });

      console.log('Server response:', response.data);

      if (response.data.success) {
        toast.success('Task submitted successfully');
        // Reset form values
        Object.keys(data).forEach((key) => setValue(key, ''));
      } else {
        console.error('Error creating task:', response.data.error);
        toast.error('Failed to create task. Please try again.');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-gray-100">
      <Toaster />
      <CommonSidebar />

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Page Content */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800">Create Task</h2>

          {/* Task Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <div className="mb-4">
              <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-600">Task Title</label>
              <input
                type="text"
                id="taskTitle"
                {...register('title', { required: 'Task Title is required' })}
                className="mt-1 p-2 border rounded w-full"
              />
              {errors.title && <p className="text-red-600">{errors.title.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-600">Task Description</label>
              <textarea
                id="taskDescription"
                {...register('description', { required: 'Task Description is required' })}
                className="mt-1 p-2 border rounded w-full"
              ></textarea>
              {errors.description && <p className="text-red-600">{errors.description.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="taskDeadline" className="block text-sm font-medium text-gray-600">Task Deadline</label>
              <input
                type="date"
                id="taskDeadline"
                {...register('deadline', { required: 'Task Deadline is required' })}
                className="mt-1 p-2 border rounded"
              />
              {errors.deadline && <p className="text-red-600">{errors.deadline.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="taskPriority" className="block text-sm font-medium text-gray-600">Task Priority</label>
              <select
                id="taskPriority"
                {...register('priority', { required: 'Task Priority is required' })}
                className="mt-1 p-2 border rounded w-full"
              >
                <option value="" disabled>Select Priority</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
              {errors.priority && <p className="text-red-600">{errors.priority.message}</p>}
            </div>

            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none">
              {loading ? 'Creating Task...' : 'Create Task'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
