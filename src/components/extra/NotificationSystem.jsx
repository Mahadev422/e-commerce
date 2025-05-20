import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NotificationItem from './NotificationItem';
import { useDispatch, useSelector } from 'react-redux';

const NotificationSystem = () => {
  const externalNotifications = [];
  const [isExpanded, setIsExpanded] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth, y: window.innerHeight });
  const iconRef = useRef(null);
  const panelRef = useRef(null);
  const dispatch = useDispatch();

  // Initialize position on mount
  useEffect(() => {
    setPosition({
      x: window.innerWidth - 76,
      y: window.innerHeight - 76
    });
  }, []);

  // Handle drag boundaries
  const handleDragEnd = (event, info) => {
    const iconWidth = 48;
    const iconHeight = 48;
    
    const minX = 0;
    const maxX = window.innerWidth - iconWidth;
    const minY = 0;
    const maxY = window.innerHeight - iconHeight;

    let x = Math.max(minX, Math.min(info.point.x, maxX));
    let y = Math.max(minY, Math.min(info.point.y, maxY));

    setPosition({ x, y });
  };

  return (
    <motion.div
      ref={iconRef}
      drag
      dragConstraints={{
        left: 0,
        right: window.innerWidth - 48,
        top: 0,
        bottom: window.innerHeight - 48
      }}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      initial={{ x: position.x, y: position.y }}
      animate={{ x: position.x, y: position.y }}
      className="fixed z-[1000] cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Notification Icon with Badge */}
      <div className="relative">
        <div className="w-12 h-12 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          
          {externalNotifications.length > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
            >
              {externalNotifications.length}
            </motion.div>
          )}
        </div>

        {/* Notification Messages */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 bottom-14 w-64 bg-white rounded-lg shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Header */}
              <div className="sticky top-0 bg-white z-10 p-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-800">Notifications</h3>
                  <button
                    className="text-xs text-blue-500 hover:text-blue-700"
                  >
                    Delete all
                  </button>
                </div>
              </div>
              
              {/* Scrollable Content */}
              <div className="max-h-64 scroll overflow-y-auto">
                {externalNotifications.length === 0 ? (
                  <p className="text-sm text-gray-500 text-center py-4">No notifications</p>
                ) : (
                  <div className="space-y-2 p-4">
                    {externalNotifications.map((notification, idx) => (
                      <NotificationItem
                        key={idx}
                        {...notification}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default NotificationSystem;