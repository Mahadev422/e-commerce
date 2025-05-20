import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from '../../data/localData'; //local data

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const active = location.pathname;

  useEffect(() => { 
    const handleResize = () => {
      const mobile = window.innerWidth < 650;
      if (mobile) {
        setIsCollapsed(true); // Auto-collapse on mobile
      } else {
        setIsCollapsed(false); // Auto-expand on desktop
      }
    };
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`h-full backdrop-blur-2xl transition-all duration-400 ease-in-out flex-shrink-0
        ${isCollapsed ? 'w-15' : 'w-64'}`}
    >
      {/* Sidebar Menu */}
      <nav className="py-3 pl-2 overflow-y-scroll scroll">
        <ul className="space-y-2 ">
          {menuItems.map((item) => (
            <li title={`${isCollapsed ? item.name: ''}`} key={item.name}>
              <Link to={item.link}
                className={`flex items-center w-full p-3 transition cursor-pointer hover:translate-x-0.5 active:translate-x-1 rounded-l-lg
                  ${active.startsWith('/'+item.link) ? 'bg-white text-blue-600' : 'hover:bg-blue-300 text-gray-700'}
                  ${isCollapsed ? 'justify-center' : ''}`}
              >
                <item.icon size={20} />
                {!isCollapsed && (
                  <span className="ml-3">{item.name}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;