import React from 'react';

function TestSection() {
  const testItems = [
    {
      title: 'ADHD Test',
      description: 'Take this test to help identify symptoms of ADHD in children. This test is designed to provide a preliminary indication of attention deficit hyperactivity disorder.',
      buttonLabel: 'Check Now',
      imageUrl: 'https://via.placeholder.com/300', // Larger image
      link: 'https://adhd-test.vercel.app/',
    },
    {
      title: 'Dyslexia Test',
      description: 'This test can help recognize signs of dyslexia in children. It provides a preliminary assessment of dyslexia symptoms based on various factors.',
      buttonLabel: 'Check Now',
      imageUrl: 'https://via.placeholder.com/300', // Larger image
      link: 'https://dyslexia-test.vercel.app/',
    },
    {
      title: 'Autism Test',
      description: 'Use this test to detect early signs of autism spectrum disorder in children. The test is designed to provide an initial indication of autism.',
      buttonLabel: 'Check Now',
      imageUrl: 'https://via.placeholder.com/300', // Larger image
      link: 'https://autism-test.vercel.app/',
    },
  ];

  return (
    <div className="py-12 px-4 bg-gray-200 dark:bg-gray-700">
      <div className="max-w-6xl mx-auto mt-32">
        <h2 className="text-6xl font-bold mb-6 text-center text-teal-500 dark:text-teal-300">Test Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> {/* Increased gap */}
          {testItems.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition w-full flex flex-col items-center">
              <img src={item.imageUrl} alt={item.title} className="mb-4 w-80 h-64 object-cover rounded-lg" /> {/* Larger image size */}
              <h3 className="text-xl font-bold mb-2 text-teal-500 dark:text-teal-300">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-teal-500 text-white font-bold py-2 px-4 rounded-full hover:bg-teal-600 dark:bg-teal-700 dark:hover:bg-teal-600 transition">
                  {item.buttonLabel}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestSection;