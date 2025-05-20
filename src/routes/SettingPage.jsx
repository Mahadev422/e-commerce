import { FiLock } from 'react-icons/fi';
import { MdOutlineEditNotifications } from "react-icons/md";
import { CiFileOn, CiMoneyCheck1 } from "react-icons/ci";
import { Link, Outlet, useLocation } from 'react-router-dom';

const SettingsPage = () => {
  const url = useLocation();
  const path = url.pathname;

  const tabs = [
    {name: 'Security', icon: FiLock, link: ''},
    {name: 'Notification', icon: MdOutlineEditNotifications, link: 'notification'},
    {name: 'Billing', icon: CiMoneyCheck1, link: 'billing'},
    {name: 'Preference', icon: CiFileOn, link: 'preference'}
  ];

  return (
    <div className="min-h-screen m-3">
      <div className="flex flex-wrap gap-10">
        <div className="flex-auto md:w-65">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
          <nav className="space-y-1">
            {tabs.map((tab, idx) => <Link
              to={tab.link}
              key={idx}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium hover:translate-x-1 transition rounded-lg ${path === (tab.link === '' ? '/setting' : '/setting/')+tab.link ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <tab.icon className="mr-3 h-5 w-5" />
              {tab.name}
            </Link>)}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-auto bg-white shadow-sm rounded-lg overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;