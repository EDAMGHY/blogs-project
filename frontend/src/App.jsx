import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Dashboard, Home, NotFound } from "./pages";
import {
  Footer,
  Header,
  DashboardLayout,
  MainLayout,
} from "./components/layout";

function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Route>

          <Route path='/dashboard' element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='users' element={<>Users</>} />
            <Route path='death' element={<>Death</>} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
