import CommonSidebar from '../../components/dashboard/CommonSidebar';
const DashboardHome = () => {
  return (
    <div className="flex bg-gray-100">
      <CommonSidebar></CommonSidebar>
      {/* Main Content */}
      <div className="flex-1 p-4">

        {/* Page Content */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard Home Page</h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
