import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding ADHD in Children',
    excerpt: 'Learn about the symptoms, causes, and treatments for ADHD in children to help them thrive.',
    image: 'https://img.freepik.com/free-photo/young-woman-doing-speech-therapy-with-little-boy_23-2149110208.jpg?t=st=1721808298~exp=1721811898~hmac=c6b363e9adc5eae6c10e4ad0f8a06213b7b3d1c4d1b6d1e2ac5e8aacdf7f3654&w=996',
  },
  {
    id: 2,
    title: 'Recognizing Dyslexia Early',
    excerpt: 'Early recognition of dyslexia can make a significant difference in a child’s learning journey.',
    image: 'https://img.freepik.com/free-photo/boy-having-occupational-therapy-session-with-psychologist_23-2149091524.jpg?t=st=1721808765~exp=1721812365~hmac=9311dc6e514b2f462a34a48a872977e0f9818720a5f8a683b6ae8b5a9ea3603e&w=996',
  },
  {
    id: 3,
    title: 'Signs of Autism Spectrum Disorder',
    excerpt: 'Identifying early signs of autism can help in providing the necessary support and interventions.',
    image: 'https://img.freepik.com/free-photo/depressed-girl-sitting-sofa-with-female-psychologist-writing-note-clipboard_23-2148026249.jpg?t=st=1721808800~exp=1721812400~hmac=77483f82f36f68b8d4717d2515d897e9fccd9c2dd4c7d6af95fc617c967cff29&w=996',
  },
  {
    id: 4,
    title: 'Effective Support for ADHD',
    excerpt: 'Discover strategies and resources for supporting children with ADHD in school and at home.',
    image: 'https://img.freepik.com/free-photo/professional-young-psychologist-trying-get-through-girl-with-problems_23-2148026225.jpg?t=st=1721808840~exp=1721812440~hmac=fdde5195b13d4e1ef3dc54acce7c19602a9c1c9e5ff7671595e81d93e514e257&w=1060',
  },
  {
    id: 5,
    title: 'Teaching Strategies for Dyslexia',
    excerpt: 'Explore teaching strategies that can help children with dyslexia succeed academically.',
    image: 'https://img.freepik.com/free-photo/mother-watching-babies-while-they-are-playing_23-2149355588.jpg?t=st=1721808875~exp=1721812475~hmac=2016ebe12df9d475457e5015c60e4db4b332a8496fd1ff3251421c82ecdeac1c&w=996',
  },
  {
    id: 6,
    title: 'Social Skills for Children with Autism',
    excerpt: 'Learn about activities and programs that can enhance social skills in children with autism.',
    image: 'https://img.freepik.com/free-photo/happy-family-sitting-floor-looking-mobile_23-2148456326.jpg?t=st=1721808767~exp=1721812367~hmac=17dea946ce7e9dc5579d02dfcac57b641d107f10d1e074eb98639433b4fa1b01&w=996',
  },
  {
    id: 7,
    title: 'Parenting Tips for ADHD',
    excerpt: 'Practical parenting tips for managing the challenges and celebrating the strengths of children with ADHD.',
    image: 'https://img.freepik.com/free-photo/young-family-with-child-posing-abandoned-building_1153-7534.jpg?t=st=1721808974~exp=1721812574~hmac=fc007a97361c923b75f8087dab03eba6904151139da1b78afb015fb51042a278&w=996',
  },
  {
    id: 8,
    title: 'Assistive Technology for Dyslexia',
    excerpt: 'Discover assistive technology tools that can help children with dyslexia in their learning process.',
    image: 'https://img.freepik.com/free-photo/affectionate-relationship-family-field-sunset_23-2150984391.jpg?t=st=1721809003~exp=1721812603~hmac=c560f31c03f2744159fab257650017e66f2437bd4e6a85a30577b78e4025af5d&w=1060',
  },
  {
    id: 9,
    title: 'Creating Inclusive Environments',
    excerpt: 'How to create inclusive environments for children with autism to foster their growth and development.',
    image: 'https://img.freepik.com/free-photo/young-family-countryside-enjoying-nature_1153-7540.jpg?t=st=1721809031~exp=1721812631~hmac=4f7d89322901e4a30e6e22e7afc4ca9e5dfbedc5a46f6c8a3a32008a6da4f132&w=996',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function BlogSection() {
  return (
    <section className="bg-white dark:bg-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Latest Blog Posts</h2>
        <Carousel
          swipeable
          draggable
          showDots
          responsive={responsive}
          ssr
          infinite
          autoPlay
          autoPlaySpeed={5000}
          keyBoardControl
          customTransition="all .5"
          transitionDuration={800}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {blogPosts.map((post) => (
            <div key={post.id} className="p-4">
              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4 rounded-md" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-teal-500 hover:text-teal-700">Read More</Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      
    </section>
  );
}
