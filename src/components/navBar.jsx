import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
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
              <span className="text-sm text-gray-400">ー Welcome</span>{' '}
              <span className="rounded-full bg-indigo-200 p-2 text-sm text-indigo-500">
                student
              </span>
            </div>
          </div>
        </Link>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <NavLink
                to="/learn"
                className="block rounded py-2 px-3 md:rounded-3xl"
                aria-current="page">
                Learn{' '}
                {pathname === '/learn' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/practice"
                className="block rounded py-2 px-3 md:rounded-3xl">
                Practice{' '}
                {pathname === '/practice' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorites"
                className="block rounded py-2 px-3 md:rounded-3xl">
                About
              </NavLink>
            </li>
            <li>
              <select className="mr-2 rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500">
                <option value="en-US">English</option>
                <option value="ja-JP">日本語</option>
                <option value="my-MM">မြန်မာ</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
