import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Admin, Dashboard, Home, NotFound } from "./pages";
import {
  Footer,
  Header,
  AdminLayout,
  DashboardLayout,
  MainLayout,
} from "./components/layout";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Admin />} />
        </Route>
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='*' element={<MainLayout />}>
          <Route index element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
