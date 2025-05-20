import { motion } from "framer-motion";

const Order = () => {

  const orders = []
  
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
            const timeString = orderDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const dateString = orderDate.toLocaleDateString();

              return (
              <motion.div
                key={order._id}
                whileHover={{ y: -2 }}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-sm"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-gray-800">Order #{order._id}</h3>
                    <p className="text-sm text-gray-500">Placed on {dateString}__{timeString}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-sm text-gray-600">{order.items} item{order.items > 1 ? 's' : ''}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="font-semibold text-gray-800">₹   {order.totalAmt.toFixed(2)}</p>
                  </div>
                </div>
              </motion.div>
            )})}
          </div>
        )}
      </motion.div>
  )
}

export default Order;
