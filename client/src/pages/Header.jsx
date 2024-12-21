import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md flex justify-between items-center max-w-6xl mx-auto p-3'>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500 '>fessor</span>
        <span className='text-slate-700'>homes</span>
      </h1>

      <form className='bg-slate-100 rounded-lg p-2 flex items-center'>
        <input className='bg-transparent p-auto focus:outline-none w-24 sm:w-64' type="text" placeholder='Search . . .' />
        <FaSearch className='text-slate-500'/>
      </form>
      <ul className='flex gap-3'>
        <Link to="/">
          <li className='hover:underline hidden sm:inline-flex'>Home</li> 
        </Link>
        <Link to="/about">
          <li className='hover:underline hidden sm:inline-flex'>About</li> 
        </Link>
        <Link to="/signin">
          <li className='hover:underline'>Sign In</li>
        </Link>

      </ul>
    </header>
  )
}
