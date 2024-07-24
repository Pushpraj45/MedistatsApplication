import React from 'react';

function TestSection() {
  const testItems = [
    {
      title: 'ADHD Test',
      description: 'Take this test to help identify symptoms of ADHD in children. This test is designed to provide a preliminary indication of attention deficit hyperactivity disorder.',
      buttonLabel: 'Check Now',
      imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-adhd-illustration_23-2149382142.jpg?size=626&ext=jpg&ga=GA1.1.1321514707.1721805392&semt=sph', // Larger image
      link: 'https://adhd-test.vercel.app/',
    },
    {
      title: 'Dyslexia Test',
      description: 'This test can help recognize signs of dyslexia in children. It provides a preliminary assessment of dyslexia symptoms based on various factors.',
      buttonLabel: 'Check Now',
      imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-speech-therapy-illustration_23-2149205949.jpg?t=st=1721808391~exp=1721811991~hmac=70dabb1a5435f4d05685ae2fabcd78d48161e2757e03868c6794b3a855e7a468&w=740', // Larger image
      link: 'https://dyslexia-test.vercel.app/',
    },
    {
      title: 'Autism Test',
      description: 'Use this test to detect early signs of autism spectrum disorder in children. The test is designed to provide an initial indication of autism.',
      buttonLabel: 'Check Now',
      imageUrl: 'https://img.freepik.com/free-photo/cartoon-like-kid-playing-with-puzzle-indoors_23-2150898574.jpg?t=st=1721808660~exp=1721812260~hmac=60d0e41081370eb8b59614c1a8451a55cc25708b4e9fef45a2b72ce69fe13863&w=740', // Larger image
      link: 'https://autism-test.vercel.app/',
    },
  ];

  return (
    <div className="py-12 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto mt-32">
        <h2 className="text-5xl font-bold mb-6 text-center text-teal-500 dark:text-teal-300">Assessment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14"> {/* Increased gap */}
          {testItems.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition w-full flex flex-col items-center">
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
