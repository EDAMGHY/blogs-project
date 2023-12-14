import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className='bg-red-500 text-white'>
      <h1>MainLayout</h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
