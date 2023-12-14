import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className='bg-green-500 text-white'>
      <h1>DashboardLayout</h1>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
