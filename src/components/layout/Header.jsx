import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [log, setLog] = useState(false);

  const url = useLocation();
  const path = url.pathname;

  return (
    <>
    <header className="fixed h-[50px] top-0 left-0 right-0 flex justify-between items-center px-8 py-4 backdrop-blur-2xl shadow-sm z-50">
      {/* Left side - Name */}
      <Link to='/' className="text-2xl font-bold">ShopEase</Link>

      {/* Right side - Icons */}
      <div className="flex items-center gap-5">
        {search && <input className='bg-gray-200 border-2 rounded p-1 w-[90%]' type="text" placeholder='Search'/>}
        <button onClick={() => setSearch(!search)} className="p-1 rounded-full hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {/* Profile */}
        <div className={`flex items-center ${path.startsWith('/user-profil') ? 'bg-blue-300 text-blue-800' : 'bg-blue-100'} bg-blue-100 rounded-t-xl gap-2 p-1`}>
          {log ? <Link to='user-profile' className="h-8 w-8 rounded-full flex items-center justify-center font-semibold">
            <CgProfile />
          </Link> :
          <Link onClick={() => setLog(true)} className='px-2 font-bold p-1 rounded'>Login</Link>}
        </div>
      </div>
    </header>
    <div className='h-[51px]'></div>
    </>
  );
};

export default Header;