import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className='bg-gray-500 text-white'>
      <h1>AdminLayout</h1>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
