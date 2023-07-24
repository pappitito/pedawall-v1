import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
interface searchBarProps {
    ref?: any;
}
const Searchbar = ({ref}: searchBarProps) => {
  return (
    <div className='w-full'>
        <form className='flex w-full'>
            <input ref={ref} className='text-[0.9rem] p-[0.5rem] w-full outline-none border-[1.5px] border-r-[0px] border-gray-400  rounded-l-[0.64rem]' type="text" placeholder='what do you want to learn' />
            <button className='bg-[#E50914] p-[0.56rem] pr-[0.9rem] pl-[0.9rem] text-[0.9rem] text-white cursor-pointer trans rounded-r-[0.64rem]' type='submit'><SearchIcon/></button>
        </form>
    </div>
  )
}

export default Searchbar