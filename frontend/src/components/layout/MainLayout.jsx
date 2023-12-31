import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <main>
      <Header />
      <div className='container'>
        <h1>MainLayout</h1>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
