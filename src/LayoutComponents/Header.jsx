import React from 'react'
// import { useOpen } from './OpenContext';
function Header() {
  // const [open, setOpen] = useState(true);

  // const toggleOpen = () => {
  //   setOpen(!open);
  // };

  // const { open, toggleOpen } = useOpen();

  return (
    <div className='relative z-0 lg:flex-grow'>
    <header className='flex bg-gray-700 text-white flex-grow items-center'>
      <button
        className='p-3 focus:outline-none focus:bg-gray-600 hover:bg-gray-600 rounded-md lg:hidden'
        // onClick={toggleOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <span className=' text-2xl flex flex-between sm:text-3xl p-3'>BeanCounter</span>
      
    </header>
    
  </div>

  )
}

export default Header