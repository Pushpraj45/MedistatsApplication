import React from 'react';

export default function ContactUs() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-5xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden md:flex md:space-x-8">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-8 text-teal-500 dark:text-teal-300">Contact Us</h2>
          <form>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold">Name</label>
              <input
                type="text"
                className="w-full p-4 border border-gray-300 rounded-lg mt-1 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold">Email</label>
              <input
                type="email"
                className="w-full p-4 border border-gray-300 rounded-lg mt-1 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold">Message</label>
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg mt-1 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="6"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 dark:bg-teal-700 dark:hover:bg-teal-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Image Section */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url('https://via.placeholder.com/800x1000')" }}
        ></div>
      </div>
    </div>
  );
}
