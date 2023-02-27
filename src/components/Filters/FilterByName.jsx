import React,{useState} from 'react'
import TextField from '@mui/material/TextField'

function FilterByName({ toFind }) {

    const [selectedName, setselectedName] = useState('');

    function findPokemon(e){
        setselectedName(e.target.value === '' ? null : (e.target.value))
    }
  
    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(selectedName != ''){
          toFind(selectedName);
        }
       
        setselectedName('')     
    }

  return (
    <form className='xs:w-12/12 sm:w-11/12 md:w-5/12 lg:w-4/12 2xl:w-5/12 xs:mb-4 xs:mx-auto sm:mb-6 sm:mx-auto md:ml-0 pt-5'>
      <TextField  
      className='sm:w-10/12 text-white'
      label="Task Name" 
      value={selectedName}
      onChange={findPokemon}
      />
      
      <button 
        className= 'sm:w-2/12 bg-slate-800 p-4 hover:scale-105 ease-in-out duration-300'
        onClick={handleSubmit}>
        🔎
      </button>
      
    </form>
  )
}

export default FilterByName