import React from 'react'
import {Link} from 'react-router-dom'
import FilterByName from '../Filters/FilterByName'

function Nav() {



  return (
    <>
        <ul className='list-none bg-slate-700 xs:text-3xl  sm:text-4xl flex flex-row justify-center xs:gap-32 sm:gap-64 py-5 sm:px-20 shadow-md'>

         

          <li>
            <Link to='/' className='hover:text-gray-500'>Tasks</Link>
          </li>

          <li>

          <Link to='/new'  className='hover:text-gray-500'>New Task</Link>
          </li>
         
          
        </ul>
    </>
  )
}

export default Nav