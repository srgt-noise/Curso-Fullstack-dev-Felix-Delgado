import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  return (
    <>
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
      </div>

      <div style={{ textAlign: "center", padding: "100px", border: "1px solid #ccc", borderRadius: "5px", maxWidth: "500px", height: "250px", margin: "0 auto" }}>
        {session ? (
          <>
            <p style={{ fontSize: "1.2em", fontWeight: "bold" }}>Signed in as {session.user.name}</p>
            <img src={session.user.image} alt="Profile Picture" style={{ borderRadius: "50%", width: "100px", height: "100px", marginBottom: "10px" }} />
            <button style={{ padding: "5px 10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "3px", cursor: "pointer" }} onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            <p style={{ fontSize: "1.2em", fontWeight: "bold" }}>Not signed in</p>
            <button style={{ padding: "5px 10px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "3px", cursor: "pointer" }} onClick={() => signIn()}>Sign in</button>
          </>
        )}
      </div>
      
      <section>
      <footer style={{ position: "fixed", bottom: 0, width: "100%", backgroundColor: "#fff", padding: "10px", textAlign: "center" }}>
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
      </section>
    </>
    
  );
}