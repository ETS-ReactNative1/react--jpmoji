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
            className="mr-3 h-10"
            viewBox="0 0 52 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z"
              fill="#76A9FA"></path>
            <path
              d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z"
              fill="#A4CAFE"></path>
            <path
              d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z"
              fill="#1C64F2"></path>
          </svg>
          <div className="flex flex-col">
            <span className="whitespace-nowrap text-lg font-semibold dark:text-white">
              katakana
            </span>
            <div className="md:-mr-20">
              {
                <>
                  <span className="text-sm text-gray-400">ー Welcome</span>{' '}
                  <span className="rounded-full bg-green-200 p-2 text-sm text-green-500">
                    {' '}
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
