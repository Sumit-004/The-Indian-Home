import React from "react";

const Contact = () => {
  return (
    <div className="mt-14 min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-2xl rounded-2xl max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Side - Info */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg">
              Have any questions or concerns? We’re always ready to help!
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
            <p className="mb-2">📍 788, Global Industrial Area Sector 72, Faridabad</p>
            <p className="mb-2">📞 +91 9311032091</p>
            <p className="mb-2">📧 example@yourshop.com</p>

            {/* <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-yellow-300">🌐</a>
              <a href="#" className="hover:text-yellow-300">📘</a>
              <a href="#" className="hover:text-yellow-300">🐦</a>
              <a href="#" className="hover:text-yellow-300">📸</a>
            </div> */}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-10">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Your message..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
