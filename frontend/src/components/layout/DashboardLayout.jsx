import { Outlet } from "react-router-dom";
import Header from "./DashboardHeader";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <main>
      <div className='w-full flex items-start justify-center'>
        <Sidebar />
        <div className='ml-[250px] w-full'>
          <Header />
          <h1>DashboardLayout</h1>
          <Outlet />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
