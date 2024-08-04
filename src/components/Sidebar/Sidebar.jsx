import React, { useContext, useState } from 'react'
import { MdMenu } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { FaHistory } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import { Context } from '../../Context/Context';

const Sidebar = () => {

const [extented, setExtented] = useState(false)
const{setRecentPrompt,prevPrompt,onSent} = useContext(Context)

function change(){
   setExtented((prev => !prev))
}

  return (
   <>
   
<div className="sidebar min-h-[100vh] inline-flex flex-col justify-between bg-[#f0f4f9] p-6">
  <div className="top ">
        <MdMenu onClick={change} className='text-2xl cursor-pointer text-gray-700'/>
        <div className="newchat inline-flex  items-center px-3 py-2 justify-between bg-[#E5EAF1] rounded-full gap-3 mt-20 cursor-pointer">
        <MdAdd className='text-[#9A9DA1] text-2xl'/>
       {extented ?  <h1 className='inline-block text-[#9A9DA1]'>New chat</h1> : null }
       </div>
       
         

       {extented ? 
       <div>
        <h1 className='mt-6 mb-3'>Recent</h1>
        {prevPrompt.map((item,index)=>{
          return(
            <div className='flex  rounded-full  items-center  gap-2 pr-36 p-2 hover:bg-[#E9EEF6]'>
            <LuMessageSquare className=''/>
            <h1 className='pl-4'>{item.slice(0,16)}....</h1>
         </div>
          )
        })}

        </div> :
        
        null}
       
      
  </div>
  <div className="bottom flex flex-col gap-3">
        <div className="help flex items-center gap-3 hover:bg-[#E9EEF6] cursor-pointer rounded-full">
        <HiOutlineQuestionMarkCircle className='text-xl' />
        {extented?    <h1>Help</h1> :null}
     
        </div>
       <div className='history flex items-center gap-3 hover:bg-[#E9EEF6] cursor-pointer rounded-full'> 
       <FaHistory />
       {extented ?  <h1>History</h1> : null}
       </div>
        <div className="setting flex items-center gap-3 hover:bg-[#E9EEF6] cursor-pointer rounded-full">
        <IoSettingsSharp />
       {extented ?   <h1>Setting</h1> : null}
        </div>
   </div>
</div>
   </>
  )
}

export default Sidebar