import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav
      className="rounded border-gray-200 px-2 py-2.5 dark:bg-gray-800 sm:px-4"
      aria-label="navbar">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="30pt"
            height="30pt"
            className="mr-1 h-10"
            viewBox="0 0 120 120"
            preserveAspectRatio="xMidYMid meet">
            <g
              transform="translate(0.000000,120.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none">
              <path
                d="M955 1021 c-6 -6 -161 -35 -345 -66 -319 -54 -393 -61 -442 -40 -30
12 -21 -21 14 -50 50 -42 72 -47 135 -29 31 9 184 42 340 74 231 47 285 55
290 44 3 -8 -19 -40 -52 -77 -57 -61 -191 -187 -200 -187 -3 0 -24 14 -47 30
-22 17 -49 30 -60 30 -17 0 -18 -1 -2 -25 23 -36 20 -86 -11 -185 -37 -115
-88 -218 -157 -314 -31 -44 -55 -82 -52 -85 10 -10 108 97 159 174 60 91 94
156 140 267 31 75 34 78 116 134 95 65 160 116 236 186 28 26 57 48 62 48 28
0 7 33 -31 49 -66 28 -83 32 -93 22z"
              />
            </g>
          </svg>

          <div className="flex flex-col">
            <span className="whitespace-nowrap text-lg font-semibold dark:text-white">
              katakana
            </span>
            <div className="md:-mr-20">
              {
                <>
                  <span className="text-sm text-gray-400">ー Welcome</span>{' '}
                  <span className="rounded-full bg-indigo-200 p-2 text-sm text-indigo-500">
                    hpn{' '}
                  </span>
                </>
              }
            </div>
          </div>
        </Link>
        <div className="md:order-2">
          <div className="flex items-center">
            {/* <select className="mr-2 rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500">
              <option value="en-US">English</option>
              <option value="ja-JP">日本語</option>
              <option value="my-MM">မြန်မာ</option>
            </select> */}
            {
              //   <NavLink to="/logout">
              //     <button
              //       type="button"
              //       className="mr-3 rounded-lg bg-transparent px-3 py-2 text-center text-sm font-medium text-indigo-700 hover:bg-indigo-700 hover:text-white focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 md:mr-0">
              //       Logout
              //       <svg
              //         xmlns="http://www.w3.org/2000/svg"
              //         className="inline h-5 w-5"
              //         fill="none"
              //         viewBox="0 0 24 24"
              //         stroke="currentColor">
              //         <path
              //           strokeLinecap="round"
              //           strokeLinejoin="round"
              //           strokeWidth={2}
              //           d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              //         />
              //       </svg>
              //     </button>
              //   </NavLink>
            }
          </div>

          <button
            data-collapse-toggle="mobile-menu-4"
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="mobile-menu-4"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
            <svg
              className="hidden h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="mobile-menu-4">
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-3 md:text-sm md:font-medium">
            <li>
              <NavLink
                to="/learn"
                className="block rounded py-2 px-3 md:rounded-3xl"
                aria-current="page">
                Learn
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/practice"
                className="block rounded py-2 px-3 md:rounded-3xl">
                Practice
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorites"
                className="block rounded py-2 px-3 md:rounded-3xl">
                Favorites
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
