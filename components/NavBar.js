'use client'
import Link from "next/link"

const NavBar = () => {

    return(
        <nav className="dark:bg-black">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://github.com/mitesh-24" target="_blank" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://www.debian.org/Pics/debian-logo-1024x576.png" className="h-8" alt="logo" />
                    <span className="sel-center text-2xl font-semibold whitespace-nowrap text-green-500 dark:text-green-300">
                        Portfolio
                    </span>
                </a>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-600 rounded-lg bg-gray-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
                        <li>
                        <Link href="#" className="block py-2 px-3 text-green-500 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-green-300 md:p-0 dark:text-green-300 md:dark:hover:text-green-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
                        </li>
                        <li>
                        <Link href="#" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-green-300 md:p-0 dark:text-green-300 md:dark:hover:text-green-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</Link>
                        </li>
                        <li>
                        <Link href="#" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-green-300 md:p-0 dark:text-green-300 md:dark:hover:text-green-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume</Link>
                        </li>
                        <li>
                        <Link href="#" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-green-300 md:p-0 dark:text-green-300 md:dark:hover:text-green-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar