import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="w-full bg-black py-5 mt-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 lg:px-0">
        <div className="inline-flex items-center">
        </div>
        <div className="hidden items-center md:inline-flex">
          <span className="text-sm font-medium text-white">Ready to Get Started ?</span>
          <Link to='/'>
          <button
            type="button"
            className="ml-2 rounded-md bg-white px-3 py-2 text-sm font-bold text-black shadow-sm hover:bg-while/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Get Started
          </button>
          </Link>
        </div>
      </div>
      <hr className="my-8" />
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-3xl text-white font-bold">Subscribe to our Website</h1>
          <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
            <input
              className="flex h-10 w-full bg-white rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className="ml-4 rounded-full bg-white px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
            </button>
          </form>
          <div className='text-white mt-16'>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved. @Suraj</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700 hover:text-white cursor-pointer">Company</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li className='hover:text-white cursor-pointer'>About us</li>
                <li className='hover:text-white cursor-pointer'>Company History</li>
                <li className='hover:text-white cursor-pointer'>Our Team</li>
                <li className='hover:text-white cursor-pointer'>Our Vision</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
