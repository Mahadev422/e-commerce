import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";
import { button } from 'framer-motion/client';

const Header = () => {
  const [search, setSearch] = useState(false);

  const { logged } = useSelector((state) => state.auth);

  const url = useLocation();
  const path = url.pathname;

  return (
    <>
    <header className="fixed h-[50px] top-0 left-0 right-0 flex justify-between items-center px-8 py-4 backdrop-blur-2xl shadow-sm z-50">
      {/* Left side - Name */}
      <Link to='/' className="text-2xl font-bold">ShopEase</Link>

      {/* Right side - Icons */}
      <div className="flex items-center gap-5">
        {search && <input className='flex-auto border-2 rounded-2xl p-1' type="text" placeholder='Search'/>}
        {!search ? <button onClick={() => setSearch(!search)} >
          <FaSearch className='h-6 w-6'/>
        </button> : <button onClick={() => setSearch(!search)}>
          <RiCloseLargeFill className='h-6 w-6' />
          </button>}

        {/* Profile */}
        <div className={`flex items-center ${path.startsWith('/user-profil') ? 'bg-blue-300 text-blue-800' : 'bg-blue-100'} bg-blue-100 rounded-t-xl gap-2 p-1`}>
          {logged ? <Link to='user-profile' className="h-8 w-8 rounded-full flex items-center justify-center font-semibold">
            <CgProfile />
          </Link> :
          <Link to='/log-in' className='px-2 font-bold p-1 rounded'>Login</Link>}
        </div>
      </div>
    </header>
    <div className='h-[51px]'></div>
    </>
  );
};

export default Header;