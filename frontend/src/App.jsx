import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import {
  Home,
  NotFound,
  About,
  Settings,
  Blogs,
  Dashboard,
  Profile,
  Users,
  DeleteUser,
  UserDetails,
  AddCategory,
  EditCategory,
  DeleteCategory,
  CategoryDetails,
  Categories,
  AddBlog,
  EditBlog,
  DeleteBlog,
  BlogDetails,
  AllBlogs,
  MyBlogs,
} from "@/pages";

import { DashboardLayout, MainLayout } from "@/layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogDetails />} />
          <Route path="about" element={<About />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="users/:id/delete" element={<DeleteUser />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/create" element={<AddCategory />} />
          <Route path="categories/:id" element={<CategoryDetails />} />
          <Route path="categories/:id/edit" element={<EditCategory />} />
          <Route path="categories/:id/delete" element={<DeleteCategory />} />
          <Route path="blogs" element={<MyBlogs />} />
          <Route path="blogs/all" element={<AllBlogs />} />
          <Route path="blogs/create" element={<AddBlog />} />
          <Route path="blogs/:id/edit" element={<EditBlog />} />
          <Route path="blogs/:id/delete" element={<DeleteBlog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
