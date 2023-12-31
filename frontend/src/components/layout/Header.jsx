import { Link } from "react-router-dom";
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { Transition } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";

const UserInfo = () => {
  const userInfoRef = useRef();
  const [showUserInfo, setShowUserInfo] = useState(false);

  const toggleUserInfoDropDown = (e) => {
    e?.preventDefault();
    setShowUserInfo((old) => !old);
  };
  const closeDropdown = () => {
    setShowUserInfo(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userInfoRef.current && !userInfoRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={userInfoRef} className="relative flex items-center">
      <button
        onClick={toggleUserInfoDropDown}
        className="group w-10 h-10 rounded-full shadow-xl overflow-hidden ring-offset-2 ring-offset-gray-200 ring-2 hover:ring-primary ring-transparent transition-all duration-500"
      >
        <img
          src="https://source.unsplash.com/random?gaming"
          className="w-full h-full object-cover group-hover:brightness-[.90] transition-all duration-500"
          alt=""
        />
      </button>

      <Transition
        as={"div"}
        show={showUserInfo}
        enter="transition origin-top-right ease-out duration-300"
        enterFrom="transform origin-top-right opacity-0 scale-75"
        enterTo="transform origin-top-right opacity-100 scale-100"
        leave="transition origin-top-right ease-in duration-300"
        leaveFrom="transform origin-top-right opacity-100 scale-100"
        leaveTo="transform origin-top-right opacity-0 scale-75"
        className="rounded-md shadow-xl bg-white absolute top-[45px] right-0 w-[150px] overflow-hidden"
      >
        <ul className="w-full">
          <li className="w-full">
            <Link
              className="inline-flex gap-2 items-center hover:bg-primary/80 font-medium px-4 py-2.5 w-full"
              to="/profile"
              onClick={closeDropdown}
            >
              <FiUser className="text-inherit w-5 h-5" />
              Profile
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="inline-flex gap-2 items-center hover:bg-primary/80 font-medium px-4 py-2.5 w-full"
              to="/settings"
              onClick={closeDropdown}
            >
              <FiSettings className="text-inherit w-5 h-5" />
              Settings
            </Link>
          </li>
          <li className="w-full">
            <Link
              onClick={closeDropdown}
              className="inline-flex gap-2 items-center hover:bg-primary/80 font-medium px-4 py-2.5 w-full"
              to="/logout"
            >
              <FiLogOut className="text-inherit w-5 h-5" />
              Logout
            </Link>
          </li>
        </ul>
      </Transition>
    </div>
  );
};
const Header = () => {
  return (
    <nav className="sticky  z-[100] top-0 left-0 w-full  bg-gray-200 font-medium text-gray-700 py-3">
      {/* Desktop Menu  */}
      <div className="container flex justify-between items-center">
        <Link to="/">
          <h1 className="text-4xl font-bold">Logo</h1>
        </Link>

        <div className="flex gap-10 items-center justify-center">
          <ul className="flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <UserInfo />
        </div>
      </div>

      {/* Mobile Menu */}
    </nav>
  );
};

export default Header;
