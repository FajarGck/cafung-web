import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
    <footer className="bottom-0 w-full bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 bottom-0 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to={'https://github.com/FajarGck/'} className="hover:underline">Fajar Ramadhan</Link>.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link to={'/'} className="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <Link to={'/'} className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link to={'/'} className="hover:underline me-4 md:me-6">Licensing</Link>
                </li>
                <li>
                    <Link to={'/'} className="hover:underline">contact</Link>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer