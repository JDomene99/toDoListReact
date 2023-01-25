import React from 'react'
import {Link} from 'react-router-dom'
import FilterByName from '../Filters/FilterByName'

function Nav() {



  return (
    <>
        <ul className='list-none bg-slate-700 xs:text-3xl  sm:text-4xl flex flex-row justify-center xs:gap-32 sm:gap-64 py-5 sm:px-20'>

         

          <li>
            <Link to='/'>Tasks</Link>
          </li>

          <li>

          <Link to='/new'>New Task</Link>
          </li>
         
          
        </ul>
    </>
  )
}

export default Nav