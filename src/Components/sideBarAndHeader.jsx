import React, { useState } from 'react';

const SideBarAndHeader = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={`antialiashed min-h-screen relative lg:flex`} x-data={`{ open: ${open} }`}>
      <nav
        className={`absolute inset-0 duration-500 ease-in lg:transform-none lg:opacity-100 transform ${open ? 'translate-x-0' : '-translate-x-full '} lg:relative z-10 w-80 bg-[#c1b5b5] text-black h-screen p-3`}
      >
        <div className='flex justify-between'>
          <div className='font-bold text-2xl sm:text-3xl p-2'>sidebar</div>
          <button
            className='p-2 focus:outline-none focus:bg-indigo-300 hover:bg-indigo-200 rounded-md lg:hidden'
            onClick={toggleOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
              <path
                fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <ul className='mt-10'>
          <li>
            <a href='' className='block px-3 py-2 hover:bg-indigo-300 rounded-md'>
              home
            </a>
          </li>
          <li>
            <a href='' className='block px-3 py-2 hover:bg-indigo-300 rounded-md'>
              About
            </a>
          </li>
          <li>
            <a href='' className='block px-3 py-2 hover:bg-indigo-300 rounded-md'>
              Product
            </a>
          </li>
          <li>
            <a href='' className='block px-3 py-2 hover:bg-indigo-300 rounded-md'>
              Pricing
            </a>
          </li>
        </ul>
      </nav>
      <div className='relative z-0 lg:flex-grow'>
        <header className='flex bg-gray-700 text-white items-center'>
          <button
            className='p-3 focus:outline-none focus:bg-gray-600 hover:bg-gray-600 rounded-md lg:hidden'
            onClick={toggleOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <span className='block text-2xl sm:text-3xl p-3'>BeanCounter</span>
        </header>
      </div>
    </div>
  );
};

export default SideBarAndHeader;
