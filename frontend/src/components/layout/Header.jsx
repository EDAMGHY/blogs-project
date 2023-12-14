import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className='bg-gray-200 text-gray-700 py-3'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <h1 className='text-4xl font-bold'>Logo</h1>
        </Link>
        <ul className='flex gap-4'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/admin'>Admin</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
