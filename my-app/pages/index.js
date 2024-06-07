import React from 'react';
import Link from 'next/link';



const LandingPage = () => {
  const showAlert = () => {
    alert('hola mundo');
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="curso-fullstack-dev-felix-delgado.vercel.app"><img src="https://i.ibb.co/N3z8qq9/Bloop.png" alt="Bloop" border="0" /></a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p0 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
              <Link legacyBehavior href="/aboutme">
              <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About this project</a>
               </Link>
              </li>
              <li>
                <Link legacyBehavior href="/contact">
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Additional sections would go here, following the same pattern. */}
      {/* Remember to replace all class attributes with className, close all tags properly, and adjust event handlers like onClick to use React syntax. */}

      {/* Example for a button with an event handler */}
   

      {/* Continue converting and adding other sections */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1em', marginBottom: '1em' }}>
          <div className="flex flex-col rounded-2xl w-[700px] bg-[#ffffff] shadow-xl">
            <div className="flex flex-col p-8">
              <div className="text-8xl font-bold text-center text-[#374151] pb-6">Bloop it!</div>
              <div className="text-lg text-center text-[#374151]">Find new music, keep a diary of your mood.</div>
              <div className="flex justify-end pt-6">
              <button className="bg-[#000000] text-[#fff6f6] w-full font-bold text-base p-3 rounded-lg hover:bg-gray-800 active:scale-95 transition-transform transform">
              <Link legacyBehavior href="/bloop">
    Try it out!
  </Link>
</button>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="bg-white dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Bloop is also a community</h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Join our web of users that care about mental health and love music as much as you. Receive music recommendations and advice from other users.</p>
      <Link legacyBehavior href="/loginpage">
  <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
    Sign In page example
  </a>
</Link>
    </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src="https://media.istockphoto.com/id/1344977982/photo/young-diverse-friends-dancing-and-listen-music-with-headphones-outdoor-in-the-city-focus-on.jpg?s=612x612&w=0&k=20&c=kM5-Mm1bKDSlWBcAIcTaxR5UmKVfttUplBK2dY_4Vs4=" alt="mockup" />
    </div>
  </div>
</section>
 {/* Continue converting and adding other sections */}
 <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div className="max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Meet the developer</h2>
      <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">Connect with me, add me on GitHub, or message me if you wish to collaborate!</p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
      <Link legacyBehavior href="https://github.com/srgt-noise">
        <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          GitHub
        </a>
        </Link>
      </div>
    </div>
  </div>
</section>
<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Felix Delgado®</a>. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
            <Link legacyBehavior href="/aboutme">
                <a href="#" className="hover:underline me-4 md:me-6">About this project</a>
            </Link>
            </li>
            <li>
            <Link legacyBehavior href="https://linktr.ee/felix.delgado">
                <a href="#" className="hover:underline me-4 md:me-6">Social Networks</a>
            </Link>
            </li>
            <li>
                <Link legacyBehavior href="/contact">
                <a href="#" className="hover:underline">Contact</a>
                </Link>
            </li>
        </ul>
    </div>
</footer>
    </div>
  );
};

export default LandingPage;