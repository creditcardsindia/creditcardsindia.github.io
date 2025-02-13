"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-50 text-justify font-sans text-gray-900">
      <nav className="bg-blue-600 text-white py-4 fixed w-full px-4 z-10 top-0 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Credit Cards India</h1>
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="hidden md:flex space-x-6">
            <Link href="#home" className="hover:text-blue-300">Home</Link>
            <Link href="#about" className="hover:text-blue-300">About</Link>
            <Link href="#projects" className="hover:text-blue-300">Projects</Link>
            <Link href="#blog" className="hover:text-blue-300">Blogs</Link>
          </div>
        </div>
        <div className={`md:hidden ${isOpen ? 'fixed inset-0 bg-blue-600 flex flex-col items-center' : 'hidden'} transition-all duration-300`}>
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-white text-3xl">
              &times;
            </button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6 text-2xl text-white">
            <Link href="#home" className="block hover:text-blue-300" onClick={toggleMenu}>Home</Link>
            <Link href="#about" className="block hover:text-blue-300" onClick={toggleMenu}>About</Link>
            <Link href="#projects" className="block hover:text-blue-300" onClick={toggleMenu}>Projects</Link>
            <Link href="#blog" className="block hover:text-blue-300" onClick={toggleMenu}>Blogs</Link>
          </div>
        </div>
      </nav>

      <section id="home" className="h-screen p-4 flex items-center justify-center bg-gray-100 text-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-800">Welcome to Credit Cards India</h2>
          <p className="mt-4  text-lg text-gray-600">An open-source platform dedicated to helping users in India manage and explore their credit card benefits.</p>
          <div className="mt-8 space-x-4 flex justify-center">
            <Link href="#projects" className="text-white bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700">Explore Projects</Link>
            <Link href="#about" className="text-blue-600 px-6 py-2 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">Learn More</Link>
          </div>
        </div>
      </section>

      <section id="about" className="h-screen flex flex-col lg:flex-row justify-center items-center bg-gray-200 text-center lg:text-left px-6 py-12">
        <div className="lg:w-1/2 p-4 text-center lg:text-left">
          <h2 className="text-4xl font-semibold text-gray-800">About Credit Cards India</h2>
          <p className="mt-4 text-justify text-lg text-gray-700 max-w-3xl mx-auto lg:mx-0">
            Credit Cards India is a community-driven open-source initiative to help users in India make informed financial decisions by providing tools to manage and track credit card benefits. Our mission is to optimize credit card usage and financial health.
          </p>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src="/banner.png" alt="Credit Card" className="rounded-lg shadow-lg mx-auto lg:mx-0" />
        </div>
      </section>

      <section id="projects" className="flex min-h-screen flex-col justify-center items-center bg-gray-100 px-4 text-center py-8 sm:py-16 md:py-24">
        <h2 className="text-4xl font-semibold text-gray-800">Upcoming Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <Link href="https://github.com/creditcardsindia/LoungeTracker" className="bg-white rounded-lg shadow-lg overflow-hidden block">
            <img src="https://kannurairport.aero/kial/public/uploads/lounge_img/jFk0BBH45FdJuoeF3AYqRGGnSi9N40.jpg" alt="Lounge Track" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Lounge Track</h3>
              <p className="mt-4 text-gray-600">An app to track and know credit card lounge access benefits.</p>
            </div>
          </Link>
          <Link href="#" className="bg-white rounded-lg shadow-lg overflow-hidden block">
            <img src="https://assets.datamation.com/uploads/2023/06/dm-top-database-challenges.png" alt="Credit Card Database" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Credit Card Database</h3>
              <p className="mt-4 text-gray-600">A comprehensive open-source database of credit cards in India, helping users compare rewards, cashback, fees, and more.</p>
            </div>
          </Link>
          <Link href="#" className="bg-white rounded-lg shadow-lg overflow-hidden block">
            <img src="https://img.freepik.com/free-vector/coming-soon-sticker-yellow-background_1017-39369.jpg" alt="Exciting Projects" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">And many more exciting projects!</h3>
              <p className="mt-4 text-gray-600">Stay tuned for more projects coming your way!</p>
            </div>
          </Link>
        </div>
      </section>


      <section id="blog" className=" px-4 flex flex-col justify-center items-center bg-gray-200 text-center py-8 sm:py-16">
        <h2 className="text-4xl font-semibold text-gray-800">Blog</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Stay tuned for future blog posts on credit card tips, financial advice, and more!
        </p>

        {/* Blog Posts Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Blog 1 */}
          <Link href="#" className="bg-white rounded-lg shadow-lg overflow-hidden block">
            <img src="https://img.freepik.com/free-vector/coming-soon-sticker-yellow-background_1017-39369.jpg" alt="Blog 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Understanding Credit Card Rewards</h3>
              <p className="mt-4 text-gray-600">Learn how to maximize your credit card rewards and make the most out of your purchases.</p>
              <span className="mt-4 text-blue-600 hover:underline">Read More</span>
            </div>
          </Link>

          {/* Blog 2 */}
          <Link href="#" className="bg-white rounded-lg shadow-lg overflow-hidden block">
            <img src="https://img.freepik.com/free-vector/coming-soon-sticker-yellow-background_1017-39369.jpg" alt="Blog 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">How to Choose the Best Credit Card</h3>
              <p className="mt-4 text-gray-600">Find out which credit cards are best for your spending habits and lifestyle.</p>
              <span className="mt-4 text-blue-600 hover:underline">Read More</span>
            </div>
          </Link>

          {/* Blog 3 */}
          <Link href="#" className="bg-white rounded-lg shadow-lg overflow-hidden block">
            <img src="https://img.freepik.com/free-vector/coming-soon-sticker-yellow-background_1017-39369.jpg" alt="Blog 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Credit Card Myths You Should Stop Believing</h3>
              <p className="mt-4 text-gray-600">We debunk the most common credit card myths that can hurt your finances.</p>
              <span className="mt-4 text-blue-600 hover:underline">Read More</span>
            </div>
          </Link>

          {/* Blog 4 */}
          <Link href="#" className="bg-white rounded-lg shadow-lg overflow-hidden block">
            <img src="https://img.freepik.com/free-vector/coming-soon-sticker-yellow-background_1017-39369.jpg" alt="Blog 4" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">How to Build Credit with a Credit Card</h3>
              <p className="mt-4 text-gray-600">Learn the best strategies for using your credit card to build a strong credit score.</p>
              <span className="mt-4 text-blue-600 hover:underline">Read More</span>
            </div>
          </Link>

          {/* Blog 5 */}
          <Link href="#" className="bg-white rounded-lg shadow-lg overflow-hidden block">
            <img src="https://img.freepik.com/free-vector/coming-soon-sticker-yellow-background_1017-39369.jpg" alt="Blog 5" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">The Benefits of Credit Card Insurance</h3>
              <p className="mt-4 text-gray-600">Discover how credit card insurance can protect you from unexpected expenses.</p>
              <span className="mt-4 text-blue-600 hover:underline">Read More</span>
            </div>
          </Link>

          {/* Blog 6 */}
          <Link href="#" className="bg-white rounded-lg shadow-lg overflow-hidden block">
            <img src="https://img.freepik.com/free-vector/coming-soon-sticker-yellow-background_1017-39369.jpg" alt="Blog 6" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Credit Card Fees You Should Know About</h3>
              <p className="mt-4 text-gray-600">Learn about the hidden fees that can sneak up on you and how to avoid them.</p>
              <span className="mt-4 text-blue-600 hover:underline">Read More</span>
            </div>
          </Link>
        </div>
      </section>



      <section id="involved" className="px-4 min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center py-8 sm:py-16">
        <h2 className="text-4xl font-semibold text-gray-800">Get Involved</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Join us in building a better credit card ecosystem in India. Here's how you can get involved:
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Report Bugs</h3>
            <p className="mt-4 text-lg">Help us improve by reporting any bugs you encounter while using our apps or services.</p>
          </div>
          <div className="bg-green-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Suggest Features</h3>
            <p className="mt-4 text-lg">Share your ideas for new features or improvements that could benefit the community.</p>
          </div>
          <div className="bg-yellow-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Join Discussions</h3>
            <p className="mt-4 text-lg">Engage with the community in discussions about credit cards, apps, and financial tools.</p>
          </div>
        </div>
      </section>

      <section id="contribute" className="px-4 min-h-screen flex flex-col justify-center items-center bg-gray-200 text-center py-8 sm:py-16">
        <h2 className="text-4xl font-semibold text-gray-800">How to Contribute</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          We believe in collaboration! If you want to contribute to our projects, follow these steps:
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Fork the repository</h3>
            <p className="mt-4 text-lg">Start by forking the repository to your GitHub account.</p>
          </div>
          <div className="bg-green-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Clone it locally</h3>
            <p className="mt-4 text-lg">Clone the forked repository to your local machine.</p>
          </div>
          <div className="bg-yellow-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Create a new branch</h3>
            <p className="mt-4 text-lg">Create a new branch for your changes.</p>
          </div>
          <div className="bg-purple-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Make your changes</h3>
            <p className="mt-4 text-lg">Implement the changes you want in the project.</p>
          </div>
          <div className="bg-pink-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Test your changes</h3>
            <p className="mt-4 text-lg">Test your changes locally to ensure everything works.</p>
          </div>
          <div className="bg-red-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">Submit a Pull Request</h3>
            <p className="mt-4 text-lg">Submit your pull request for review and merging.</p>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section id="follow-us" className="flex flex-col min-h-screen justify-center items-center bg-gray-100 px-4 text-center py-8 sm:py-16 md:py-24">
        <h2 className="text-4xl font-semibold text-gray-800">Follow Us</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <a href="https://www.instagram.com/credit_cards_india/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg shadow-lg overflow-hidden block">
            <img src="https://images.macrumors.com/t/4f7q_1wFXgE7og9et0c2PDsOCSk=/2250x/article-new/2021/03/Instagram-Feature-1.jpg" alt="Instagram" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Instagram</h3>
              <p className="mt-4 text-gray-600">Follow us on Instagram for the latest updates and tips.</p>
            </div>
          </a>
          <a href="https://www.reddit.com/r/CreditCardsIndia" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg shadow-lg overflow-hidden block">
            <img src="https://bgr.com/wp-content/uploads/2024/08/Reddit-Logo.jpg?quality=82&strip=all" alt="Reddit" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Reddit</h3>
              <p className="mt-4 text-gray-600">Join our Reddit community for discussions and advice.</p>
            </div>
          </a>
          <a href="https://github.com/creditcardsindia" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg shadow-lg overflow-hidden block">
            <img src="https://media.wired.com/photos/5b36a5b6e237e87ce9592b8e/master/pass/Github-Microsoft-BIZ-FINAL.jpg" alt="GitHub" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">GitHub</h3>
              <p className="mt-4 text-gray-600">Contribute to our open-source projects on GitHub.</p>
            </div>
          </a>
        </div>
      </section>

      <footer className="bg-blue-600 text-white text-center py-6">
        <p className="text-lg">© 2025 Credit Cards India</p>

      </footer>
    </div>
  );
}
