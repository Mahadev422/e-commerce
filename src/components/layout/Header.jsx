import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";

const Header = () => {
  const [search, setSearch] = useState(false);

  const { logged, userDetails } = useSelector((state) => state.auth);
  const url = useLocation();
  const path = url.pathname;

  return (
    <>
      <header className="fixed h-[50px] top-0 left-0 right-0 flex justify-between items-center px-4 py-4 backdrop-blur-2xl shadow-sm z-50">
        {/* Left side - Name */}
        <Link to="/" className="text-2xl font-bold">
          ShopEase
        </Link>

        {/* Right side - Icons */}
        <div className="flex items-center gap-3">
          {search && (
            <input
              className="flex-auto border-2 rounded-2xl p-1"
              type="text"
              placeholder="Search"
            />
          )}
          {!search ? (
            <button onClick={() => setSearch(!search)}>
              <FaSearch className="h-6 w-6" />
            </button>
          ) : (
            <button onClick={() => setSearch(!search)}>
              <RiCloseLargeFill className="h-6 w-6" />
            </button>
          )}

          {/* Profile */}
          <div
            className={`flex rounded-t-2xl p-1 items-center ${
              path.startsWith("/user-profile") ? "bg-blue-100" : ""
            } overflow-hidden opacity-80 w-[100px] hover:border`}
          >
            {logged ? (
              <Link to="user-profile" className="flex px-1 font-serif flex-col">
                <span className="text-yellow-600 font-semibold leading-tight">
                  HELLO,
                </span>
                <span className="text-black font-bold truncate text-center">
                  {userDetails?.name?.split(" ")[0]}
                </span>
              </Link>
            ) : (
              <a href="/log-in" className="px-2 font-bold p-1 rounded">
                Login
              </a>
            )}
          </div>
        </div>
      </header>
      <div className="h-[51px]"></div>
    </>
  );
};

export default Header;
