import { FiStar } from 'react-icons/fi';

const Review = () => {

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "The products are amazing and the delivery was super fast!",
              name: "Sarah Johnson",
              role: "Regular Customer"
            },
            {
              quote: "Excellent customer service. They really care about their customers.",
              name: "Michael Chen",
              role: "First-time Buyer"
            },
            {
              quote: "I've been shopping here for years. Always the best quality!",
              name: "Emily Rodriguez",
              role: "Loyal Customer"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-current w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Review
