import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";

const NotificationItem = ({ message, notType = 'info', timestamp, _id }) => {
  const dispatch = useDispatch();

  const getNotificationStyles = () => {
    const baseStyles = {
      info: {
        bg: 'bg-blue-100',
        border: 'border-blue-400',
        text: 'text-blue-800',
        icon: (
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        )
      },
      success: {
        bg: 'bg-green-100',
        border: 'border-green-400',
        text: 'text-green-800',
        icon: (
          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        )
      },
      error: {
        bg: 'bg-red-100',
        border: 'border-red-400',
        text: 'text-red-800',
        icon: (
          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        )
      },
      warning: {
        bg: 'bg-yellow-100',
        border: 'border-yellow-400',
        text: 'text-yellow-800',
        icon: (
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        )
      }
    };

    return baseStyles[notType] || baseStyles.info;
  };

  const styles = getNotificationStyles();
  const notificationDate = timestamp ? new Date(timestamp) : new Date();
  const timeString = notificationDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = notificationDate.toLocaleDateString();

  return (
    <div className={`relative mb-2 border-l-4 ${styles.border} ${styles.bg} p-3 rounded shadow-md w-full flex items-start`}>
      <button className="absolute right-1 top-1 p-1 transition hover:bg-red-200 rounded-2xl hover:rotate-45">
        <RxCross2 />
      </button>
      <div className="flex-shrink-0 mr-2">
        {styles.icon}
      </div>
      <div className="flex-1">
        <p className={`text-sm ${styles.text}`}>
          {message}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {timeString} • {dateString}
        </p>
      </div>
    </div>
  );
};

export default NotificationItem;