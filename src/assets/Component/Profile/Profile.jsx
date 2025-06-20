import React from 'react';
import { MdOutlineAttachEmail } from "react-icons/md";
import { CiSaveUp1 } from "react-icons/ci";

const Profile = () => {
    return (
        <div className='mt-16 space-y-2 border-2 p-3 rounded-3xl  max-h-150  overflow-y-auto
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 '>
            <div className=' text-center ml-5'>
           
            <img className='rounded-full border-2 border-dotted p-2' src="https://i.ibb.co.com/C5Rsmk3L/Smart-BG-2025-02-20-3c12c416-3f33-4c77-99d7-2754d17ae4f4.png" alt="" />
            
            </div>
         <div className=' text-center'>
         <h1 className='text-3xl font-bold'>Sajedul_tasin</h1>
            <marquee className="text-xl font-bold" behavior="scroll" direction="left" scrollamount="5">
    <h2>Font_EnD_Developer</h2>
  </marquee>
  <marquee className="text-xl font-bold"  behavior="scroll" direction="left" scrollamount="15">
   <h2>Mern stack developer</h2>
  </marquee>
         </div>
         <div className=''>
          <div className=''>
         
          <div className='flex flex-wrap'>
          <button className='btn'>Html5</button>
          <button className='btn '>Tailwind</button>

          <button className='btn '>Css</button>
          </div>
          
          
            
          </div>
         <div className='grid lg:grid-cols-3'>
         
          <button className='btn w-full'>React</button>
            <button className='btn w-full flex'>Next.js</button>
            <button className='btn'>Node.js</button>
            <button className='btn'>Express.js</button>
            <button className='btn'>Firbase.js</button>
            <button className='btn'>MongoDb</button>
         </div>
         </div>
         <div className='space-y-2'>
            <button className='btn w-full text-xl flex justify-center items-center  ' title='sajedultasin17@gmail.com'> 
            <div className="dropdown dropdown-bottom dropdown-center">
  <div tabIndex={0} role="button" className="btn m-1"><MdOutlineAttachEmail className=''></MdOutlineAttachEmail> Contact</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>sajedultasin17@gmail.com</a></li>
    <li><a>01612928037</a></li>
  </ul>
</div></button> 
            <button className='btn w-full text-xl flex justify-center items-center r' ><CiSaveUp1></CiSaveUp1> Resume</button>
            
            
            <div>
             
                
            </div>
         </div>
         <p className='border-t-2 '></p>
         <div className='space-y-2'>
         <h2 className='font-bold text-2xl'>BIO</h2>
         <p className='font-bold text-gray-400'>I‘m a tech enthusiast interested in programming, computer science, design and many technologies. <br /> <br />
Currently, I am studying Diploma in Computer Science and Technology at Dhaka Polytechnic Institute in Dhaka, Bangladesh.</p>
         </div>
        </div>
    );
};

export default Profile;