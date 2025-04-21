import React from 'react';
import Profile from '../Profile/Profile';
import About from '../Induration/About';
import Learnin from '../Induration/Learnin';

const Root = () => {
    return (
        <div className='w-11/12  mx-auto flex justify-center flex-wrap gap-10'>
         <div className='w-72   mt-5   '>
         <Profile></Profile> 
         </div>
         <div className='w-[600px] mt-20'>
            <About></About>

         </div>
         <div className='w-48 mt-20'>
            <Learnin></Learnin>

         </div>
        </div>
    );
};

export default Root;