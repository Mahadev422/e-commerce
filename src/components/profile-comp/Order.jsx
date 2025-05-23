import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Order = () => {
  const { orders } = useSelector((state) => state.order);

  return (
    <motion.div
      key="orders"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Orders</h2>

      {orders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => {
            const orderDate = new Date(order.createdAt);
            const timeString = orderDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });
            const dateString = orderDate.toLocaleDateString();

            return (
              <motion.div
                key={order._id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200"
              >
                <div className="flex justify-between flex-wrap gap-2">
                  {/* LEFT SIDE */}
                  <div className="flex flex-col min-w-[180px] max-w-full overflow-hidden">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium w-fit mb-1 ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status}
                    </span>

                    <p
                      className="text-sm text-gray-700 truncate max-w-[180px]"
                      title={`Order ID: ${order._id}`}
                    >
                      Order ID: {order._id}
                    </p>

                    <p
                      className="text-sm text-gray-500 truncate max-w-[180px]"
                      title={`Placed on: ${dateString} ${timeString}`}
                    >
                      Placed on: {dateString} {timeString}
                    </p>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="text-right ml-auto flex flex-col items-end justify-between gap-1">
                    <p className="text-sm text-gray-600">
                      {order.items} item{order.items > 1 ? "s" : ""}
                    </p>
                    <p className="text-gray-800 font-semibold">
                      ₹ {order.totalAmt.toFixed(2)}
                    </p>
                    <button className="text-sm text-blue-600 hover:underline mt-1">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

export default Order;
