import { useContext } from 'react';
import CommonSidebar from '../../components/dashboard/CommonSidebar';
import { AuthContext } from '../../providers/AuthProvider';
const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex bg-gray-100">
      <CommonSidebar></CommonSidebar>
      {/* Main Content */}
      <div className="flex-1 p-4">

        {/* Page Content */}
        <div className="mt-4 p-4 m-4">
          <h2 className="text-2xl font-bold text-gray-800">Welcome {user.displayName} !</h2>
          <p className='text-xl'>
            This dashboard lets you easily manage tasks in <b>To Do</b>, <b>Ongoing</b>, and <b>Complete</b> categories. You can create, delete, and effortlessly rearrange tasks using simple drag-and-drop. It is a user-friendly tool for staying organized and tracking your progress.
        </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
