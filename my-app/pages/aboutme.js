import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



const LandingPage = () => {
  const showAlert = () => {
    alert('hola mundo');
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/N3z8qq9/Bloop.png" alt="Bloop" border="0" /></a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p0 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About this project</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Additional sections would go here, following the same pattern. */}
      <section>
      <div className="w-full max-w-7xl px-4 mx-auto sm:px-8 mt-24">
    <blockquote className="relative grid items-center bg-white shadow-xl md:grid-cols-3 rounded-xl">
        
        <img className="hidden object-cover w-full h-full rounded-l-xl md:block" style={{clipPath: 'polygon(0 0%, 100% 0%, 75% 100%, 0% 100%)'}} src="https://i.ibb.co/WvcjDq9/photo-1-2.png" alt="photo-1-2" />

        <article className="relative p-6 md:p-8 md:col-span-2">
            <svg className="absolute top-0 right-0 hidden w-24 h-24 -mt-12 -mr-12 text-primary-600 md:block" width="256"
                height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
                    stroke="currentColor" strokeWidth="8"></path>
            </svg>

            <div className="space-y-8">
                <p className="text-base sm:leading-relaxed md:text-2xl">
                Hi, I&apos;m Felix. I&apos;m a musician, DJ, writer and producer from Mexico. I intend to present this as part of my portfolio for Development jobs or collaborations.
                I&apos;m always happy to learn and collaborate with people from different backgrounds. See my information and Resume on the Contact page and send me a message to talk about it!
                </p>

                <footer className="flex items-center space-x-4 md:space-x-0">
                    <img className="w-12 h-12 rounded-full md:hidden" src="https://i.ibb.co/WvcjDq9/photo-1-2.png" alt="photo-1-2" />
                    <span className="font-bold text-lg">Felix Delgado</span>
                </footer>
            </div>
        </article>
    </blockquote>
</div>
      </section>
<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Felix Delgado®</a>. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">About this project</a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Social Networks</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
</footer>
    </div>
  );
};

export default LandingPage;