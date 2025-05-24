import { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const Footer = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rating = 'positive';
  try {
    const response = await fetch('https://node-authentication-d8r6.onrender.com/auth/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating, feedback }),
    });

    const result = await response.json();

    if (response.ok) {
      setSubmitted(result);
      setFeedback('');
    } else {
      console.log('Error submitting feedback:', result);
    }
  } catch (error) {
    console.error('Error:', error);
  }
    setTimeout(() => setSubmitted(false), 3000);
  };

  
  const socialMedia = [
    {
      name: FaFacebook,
      link: "#",
    },
    {
      name: FaTwitter,
      link: "#",
    },
    {
      name: FaInstagram,
      link: "https://www.instagram.com/rajmahadev422/",
    },
    {
      name: FaLinkedin,
      link: "#",
    },
    {
      name: FaYoutube,
      link: "#",
    },
  ];
  const customerService = [
    {
      name: 'FAQs',
      link: '#'
    },
    {
      name: 'Shipping Policies',
      link: '#'
    },
    {
      name: 'Return Policies',
      link: '#'
    },
    {
      name: 'Privacy Policies',
      link: '#'
    },
    {
      name: 'Terms & Conditions',
      link: '#'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="mb-4 text-gray-300">
              Your premier destination for quality products and exceptional
              service since 2010.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((social, idx) => (
                <a key={idx}
                  href={social.link}
                  className="text-gray-300 hover:text-white hover:scale-[1.4] transition"
                >
                  <social.name size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {customerService.map((service, idx) => <li key={idx}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  {service.name}
                </a>
              </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <RiCustomerService2Fill className="mt-1 mr-2" />
                <div>
                  <p className="font-semibold">Customer Support</p>
                  <p className="text-gray-300">support@example.com</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              {submitted ? (
            <div className="p-4 bg-green-900/30 text-green-400 rounded-md">
              {submitted}
            </div>)
              : (<div>
                <h4 className="font-semibold mb-2">Your Feedback Help us.</h4>
                <div className="flex">
                  <input
                  onChange={(e) => setFeedback(e.target.value)}
                  value={feedback}
                    type="text"
                    placeholder="Your feedback"
                    className="px-3 py-2 bg-gray-800 text-white rounded-l focus:outline-none focus:ring-1 focus:ring-white w-full"
                  />
                  <button
                  onClick={handleSubmit}
                   className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r font-medium transition">
                    send
                  </button>
                </div>
              </div>)}
            </div>
          </div>
        </div>

        {/* Payment Methods & Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <MdPayment className="mr-2 text-2xl" />
              <div className="flex space-x-2">
                <img
                  src="https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-2006.png"
                  alt="Visa"
                  className="h-8"
                />
                <img
                  src="https://static-00.iconduck.com/assets.00/mastercard-icon-2048x1225-3kb6axel.png"
                  alt="Mastercard"
                  className="h-8"
                />
                <img
                  src="https://www.computerhope.com/jargon/g/google-pay.png"
                  alt="Google Pay"
                  className="h-8"
                />
                <img
                  src="https://img.icons8.com/?size=512&id=OYtBxIlJwMGA&format=png"
                  alt="Phone Pe"
                  className="h-8"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Your E-Commerce Store. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
