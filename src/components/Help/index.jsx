import React from 'react'
import { MdOutlineMarkChatUnread } from "react-icons/md";
const Help = () => {
  return (
    <div className=' flex w-fit bg-[#4D2952] p-3 rounded-full text-white items-center justify-center font-bold' >
        
        
        <p className='hidden  md:flex mr-2 text-xs'>Live Help</p>
        <MdOutlineMarkChatUnread  className='text-sm'/>
        
        </div>
  )
}

export default Help