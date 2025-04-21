import React from 'react';

const Skill = () => {
    return (
        <div>
            <h2 className='font-bold text-2xl'>Skill</h2>
            <div className='grid grid-cols-2 gap-3 '>
            <div className='border-2 h-64 p-2 rounded-2xl'>
                <h2 className='font-bold'>Programming Language</h2>
                <p className='border-t-2'></p>
                <div className='flex justify-center items-center mt-10 ' title='JavaScript'>
                <img width={50} height={50} src="https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-vue-angular-coding-lang-pack-logos-icons-7577991.png?f=webp" alt="" />
                </div>


            </div>
            <div className='border-2 h-64 p-2 rounded-2xl'>
                <h2 className='font-bold'>Front End</h2>
                <p className='border-t-2'></p>
                <div className='flex justify-center items-center flex-wrap mt-2 gap-1 ' >
                <img width={50} height={50} src="https://static-00.iconduck.com/assets.00/html5-icon-2018x2048-st7q7lm6.png" alt="" />
                <img className='rounded-full' width={70} height={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0FLBwYnrHJdOwzo33Upz-NAaLgcTkhiRDg&s" alt="" />
                <img className='rounded-full' width={100} height={50} src="https://logowik.com/content/uploads/images/t_tailwind4523.jpg" alt="" />
                <img className='rounded-full' width={70} height={50} src="https://www.svgrepo.com/show/327388/logo-react.svg" alt="" />
                <img className='rounded-full' width={70} height={50} src="https://www.svgrepo.com/show/353940/jquery.svg" alt="" />
                <img className='rounded-full' width={70} height={50} src="https://seeklogo.com/images/E/express-js-logo-FA36FF1D3F-seeklogo.com.png" alt="" />
                <img className='rounded-full' width={100} height={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vAX0g2Tk_VUh4H1k4KDNdr3t0B0EPRA14A&s" alt="" />
                </div>

            </div>
            <div className='border-2 h-64 p-2 rounded-2xl'>
                <h2 className='font-bold'>Back End</h2>
                <p className='border-t-2'></p>
                <div className='flex justify-center items-center mt-10 ' >
                <img className='rounded-full' width={100} height={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXSMfpYd56bTUxZzRIVgDeG1G5MsXJCs14tBl0BdpfETNMFXBoASNB4DPSKCCqfCsC1NI&usqp=CAU" alt="" />
                <img className='rounded-full object-cover' width={100} height={50} src="https://www.svgrepo.com/show/306891/typescript.svg" alt="" />
                </div>


            </div>
            <div className='border-2 h-64 p-2 rounded-2xl'>
                <h2 className='font-bold'>Authentication</h2>
                <p className='border-t-2'></p>

                <div className='flex justify-center items-center mt-10 ' >
                
                <img className='rounded-full object-cover' width={100} height={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Ix8ZI8CFmYGSzUI3BKCq3mhKPtraUdEVEQ&s" alt="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Skill;