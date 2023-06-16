import React, { useEffect, useState } from 'react'

function Navbar() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode')==='true');
  const [left, setLeft] = useState('left-0');
  const [shadow, setShadow] = useState('left-0');


  const element = document.documentElement;

  useEffect(() => {
    darkMode ? element.classList.add('dark') : element.classList.remove('dark')
    darkMode ? setLeft('left-7 bg-blue-300') : setLeft('left-0 bg-amber-300');
    darkMode ? setShadow('shadow-blue-400') : setShadow('shadow-amber-400');
  }, [darkMode])

  const handleClick = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode) ? true : false);
  }
  return (
    <div className='flex justify-between items-center backdrop-blur-md shadow-sm shadow-blue-50 h-14 px-3 z-10 sticky top-0 bg-gray-200 dark:bg-transparent'>
      <div className='text-xl bg-clip-text text-transparent bg-gradient-to-r font-semibold  from-yellow-400 via-green-400 to-green-400'>UrlShortener</div>
      <div className={`w-14 h-7 rounded-2xl relative transition-all duration-300 shadow-narrow ${shadow} bg-white dark:bg-transparent`}>
        <div className={`absolute w-7 h-7 rounded-full transition-all duration-300 ${left} ${shadow} shadow-narrow`} onClick={handleClick}></div>
      </div>
    </div>
  )
}

export default Navbar