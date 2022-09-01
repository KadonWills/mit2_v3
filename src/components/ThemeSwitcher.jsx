import {useState} from 'react'

const ThemeSwitcher = () => {

    
    const [darkMode, setDarkMode] = useState(true);

    

    const handleTheme = () => {
        setDarkMode((prev) => !prev);

        if (darkMode) {
            localStorage.theme = 'dark'
            document.documentElement.classList.add("dark");
            document.querySelector("body").classList.add("dark");
        }else{ 
            localStorage.removeItem('theme')
            document.documentElement.classList.remove("dark");
            document.querySelector("body").classList.remove("dark");
        }

    }

  return (
    <div onClick={handleTheme} title={ !darkMode ? 'light' : 'dark' } className='md:absolute flex group md:grid md:place-items-center md:top-[1.5rem] md:right-4 space-x-2 align-middle md:mx-auto justify-center md:space-y-1 md:float-right cursor-pointer hover:animate-pulse hover:text-secondary dark:hover:text-accent'>
        <span className=' duration-200 inline-block sm:hidden text-white mt-4  text-sm'>{ !darkMode ? 'light mode' : 'dark mode' }</span>
        <span className='group-hover:scale-125 duration-200 mt-[0.85rem] md:mt-0'>{ !darkMode ? '🌞' : '🌙' }</span>
    </div>
  )
}


export default ThemeSwitcher