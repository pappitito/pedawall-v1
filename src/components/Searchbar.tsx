import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
interface searchBarProps {
    ref?: any;
    isLarge?: boolean;
}
const Searchbar = ({ref, isLarge}: searchBarProps) => {
  return (
    <div className='w-full'>
        <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1" />
        <form className='flex w-full'>
            <input ref={ref} className={`text-[0.9rem] ${isLarge ? 'p-[1rem]' : 'p-[0.5rem]'} w-full outline-none border-[1.5px] border-r-[0px] border-gray-400  rounded-l-[0.64rem]`} type="text" placeholder='what do you want to learn' />
            <button className='bg-[#E50914] p-[0.56rem] ml-[-0.6rem] pr-[0.9rem] pl-[0.9rem] text-[0.9rem] text-white cursor-pointer trans rounded-r-[0.64rem]' type='submit'><SearchIcon/></button>
        </form>
    </div>
  )
}

export default Searchbar