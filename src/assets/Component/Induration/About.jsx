import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import { MdOutlineEmojiPeople } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import projectBanner from '../../img/Screenshot 2025-04-21 223716.png'
import projectBanner1 from '../../img/Screenshot 2025-04-21 223749.png'
import projectBanner2 from '../../img/Screenshot 2025-04-21 224028.png'
import projectBanner3 from '../../img/Screenshot 2025-04-21 224055.png'
import projectBanner4 from '../../img/Screenshot 2025-04-21 224128.png'

const About = () => {
    const link=<>
   <fieldset className="fieldset">
  <label className="flex gap-2 cursor-pointer items-center">
    <input type="radio" name="theme-radios" className="radio radio-sm theme-controller" value="default"/>
    Default
  </label>
  <label className="flex gap-2 cursor-pointer items-center">
    <input type="radio" name="theme-radios" className="radio radio-sm theme-controller" value="retro"/>
    Retro
  </label>
  <label className="flex gap-2 cursor-pointer items-center">
    <input type="radio" name="theme-radios" className="radio radio-sm theme-controller" value="cyberpunk"/>
    Cyberpunk
  </label>
  <label className="flex gap-2 cursor-pointer items-center">
    <input type="radio" name="theme-radios" className="radio radio-sm theme-controller" value="valentine"/>
    Valentine
  </label>
  <label className="flex gap-2 cursor-pointer items-center">
    <input type="radio" name="theme-radios" className="radio radio-sm theme-controller" value="aqua"/>
    Aqua
  </label>
</fieldset></>
    return (
        <div className='space-y-2 border-2 p-3 rounded-3xl  max-h-150  overflow-y-auto
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>
            <div>

            <div className="navbar bg-base-100 shadow-sm fixed w-full top-0 left-0  ">
  <div className="navbar-start   ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
      <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  
      </div>
      <ul
        tabIndex={0}
        className="menu  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {link}
      </ul>
    </div>
  </div>
  <div className="navbar-center  ">
         <div className='flex gap-5 lg:gap-20 text-start'>

         
          <a  href='#about'  className='fle justify-center text-xl font-bold'>About</a>
    <a href='#skill' className='fle justify-center text-xl font-bold'>Skill</a>
    <a href='#project' className='fle justify-center text-xl font-bold'>Project</a>
    <a href='#contact' className='fle justify-center text-xl font-bold'>Contact</a>
         </div>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
            </div>
           
         <div id="about">
         <div >
                <h2 className='text-3xl font-bold'>About me</h2>
                <p className='font-thin  mt-5'>I am Sajedul_tasin, a passionate front-end web developer with a strong focus on creating modern and responsive websites using the latest technologies. My expertise lies in React.js, a powerful JavaScript library for building user interfaces, combined with Tailwind CSS, a highly customizable utility-first CSS framework. <br /> <br />

With a solid foundation in HTML5, CSS3, and JavaScript, I craft pixel-perfect designs and implement seamless user experiences. Beyond the front-end realm, I also possess experience with back-end technologies such as MongoDB, Node.js, Express.js, Firebase, and JWT for building robust and scalable web applications. <br /><br />

I am constantly exploring new technologies and staying updated with industry trends to enhance my skills and deliver cutting-edge solutions. <br /><br />

As a lifelong learner, I am eager to take on challenging projects that push my boundaries and allow me to grow both personally and professionally. With a keen eye for detail and a passion for creating exceptional digital experiences, I am committed to delivering high-quality work that exceeds expectations.

</p>
            </div> 
         </div>
         <div id='skill'>
         <div className='mt-16'>
            <h2 className='font-bold text-2xl'>Skill</h2>
            <div className='grid grid-cols-2 gap-3 mt-5'>
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
         </div>
           
           <div id='project'>
            <h2 className='text-3xl font-black mt-20'>Here My Project</h2>
            <div>
            
              <div className=' border rounded-3xl mt-10'>
              <img  className='object-contain w-1/2 mx-auto mt-5  p-2 '  src={projectBanner} alt="" />
                
              <div>
              <h2 className='text-center mt-5 p-2'>🌟 Induction to Gadget Heaven 🌟<br /> <br />

Welcome to Gadget Heaven—where  innovation meets passion! 
We’re thrilled  to have  you  as a part of our  tech-savvy family. <br /><br />

At Gadget Heaven, we don’t just sell gadgets—we create experiences. Whether it's the latest smartphones, smartwatches, gaming gear, or home automation devices, our goal is to bring cutting-edge technology to our customers with trust, care, and expertise.</h2>
              </div>
               <div className='space-y-4'>
                <a href='https://tas-grdget-heaven.vercel.app/' className='btn w-full'>Live Link</a>
                <a href='https://github.com/sajedul4D/tas-grdget-heaven' className='btn w-full'>Git Link</a>
                
                
               </div>

              </div>
              <div className=' border rounded-3xl'>
              <img  className='object-contain w-1/2 mx-auto mt-5  p-2 '  src={projectBanner4} alt="" />
                
              <div>
              <h2 className='text-center mt-5 p-2'>🌟 Induction to Hose🌟<br /> <br />

Welcome to Gadget Heaven—where  innovation meets passion! 
We’re thrilled  to have  you  as a part of our  tech-savvy family. <br /><br />

At Gadget Heaven, we don’t just sell gadgets—we create experiences. Whether it's the latest smartphones, smartwatches, gaming gear, or home automation devices, our goal is to bring cutting-edge technology to our customers with trust, care, and expertise.</h2>
              </div>
               <div className='space-y-4'>
                <a href='https://tas-grdget-heaven.vercel.app/' className='btn w-full'>Live Link</a>
                <a href='https://github.com/sajedul4D/tas-grdget-heaven' className='btn w-full'>Git Link</a>
                
                
               </div>

              </div>
              <div className=' border rounded-3xl'>
              <img  className='object-contain w-1/2 mx-auto mt-5  p-2 '  src={projectBanner3} alt="" />
                
              <div>
              <h2 className='text-center mt-5 p-2 font-thin'>🌟 Induction to Donate For BD 🌟<br /> <br />

Welcome to Gadget Heaven—where  innovation meets passion! 
We’re thrilled  to have  you  as a part of our  tech-savvy family. <br /><br />

At Gadget Heaven, we don’t just sell gadgets—we create experiences. Whether it's the latest smartphones, smartwatches, gaming gear, or home automation devices, our goal is to bring cutting-edge technology to our customers with trust, care, and expertise.</h2>
              </div>
               <div className='space-y-4'>
                <a href='https://tas-grdget-heaven.vercel.app/' className='btn w-full'>Live Link</a>
                <a href='https://github.com/sajedul4D/tas-grdget-heaven' className='btn w-full'>Git Link</a>
                
                
               </div>

              </div>
              <div className=' border rounded-3xl'>
              <img  className='object-contain w-1/2 mx-auto mt-5  p-2 '  src={projectBanner2} alt="" />
                
              <div>
              <h2 className='text-center mt-5 p-2 font-thin'>🌟 Induction to Peddy 🌟<br /> <br />

Welcome to Gadget Heaven—where  innovation meets passion! 
We’re thrilled  to have  you  as a part of our  tech-savvy family. <br /><br />

At Gadget Heaven, we don’t just sell gadgets—we create experiences. Whether it's the latest smartphones, smartwatches, gaming gear, or home automation devices, our goal is to bring cutting-edge technology to our customers with trust, care, and expertise.</h2>
              </div>
               <div className='space-y-4'>
                <a href='https://tas-grdget-heaven.vercel.app/' className='btn w-full'>Live Link</a>
                <a href='https://github.com/sajedul4D/tas-grdget-heaven' className='btn w-full'>Git Link</a>
                
                
               </div>

              </div>
              <div className=' border rounded-3xl'>
              <img  className='object-contain w-1/2 mx-auto mt-5  p-2 '  src={projectBanner1} alt="" />
                
              <div>
              <h2 className='text-center mt-5 p-2 font-thin'>🌟 Induction to Coffee Book 🌟<br /> <br />

Welcome to Gadget Heaven—where  innovation meets passion! 
We’re thrilled  to have  you  as a part of our  tech-savvy family. <br /><br />

At Gadget Heaven, we don’t just sell gadgets—we create experiences. Whether it's the latest smartphones, smartwatches, gaming gear, or home automation devices, our goal is to bring cutting-edge technology to our customers with trust, care, and expertise.</h2>
              </div>
               <div className='space-y-4'>
                <a href='https://tas-grdget-heaven.vercel.app/' className='btn w-full'>Live Link</a>
                <a href='https://github.com/sajedul4D/tas-grdget-heaven' className='btn w-full'>Git Link</a>
                
               
               </div>

              </div>
            </div>
           </div>
           <div id='contact' className='mt-20'>
            <h2 className='text-3xl font-black'>Contact</h2>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
	<form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Sedd me message</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">First name</label>
					<input  id="firstname" type="text" placeholder="First name" className="w-full border-2 border-black rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Last name</label>
					<input id="lastname" type="text" placeholder="Last name" className="w-full border-2 border-black rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" type="email" placeholder="Email" className="w-full border-2 border-black rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full">
					<label htmlFor="address" className="text-sm">Address</label>
					<input id="address" type="text" placeholder="" className="w-full border-2 border-black rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="city" className="text-sm">City</label>
					<input id="city" type="text" placeholder="" className="w-full border-2 border-black rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm">State / Province</label>
					<input id="state" type="text" placeholder="" className="w-full border-2 border-black rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">ZIP / Postal</label>
					<input id="zip" type="text" placeholder="" className="w-full border-2 border-black rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
			</div>
		</fieldset>
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Profile</p>
				<p className="text-xs">Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="username" className="text-sm">Username</label>
					<input id="username" type="text" placeholder="Username" className="w-full border-2 border-black rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="website" className="text-sm">Website</label>
					<input id="website" type="text" placeholder="https://" className="w-full rounded-md border-2 border-black focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full">
					<label htmlFor="bio" className="text-sm">Bio</label>
					<textarea id="bio" placeholder="" className="w-full border-2 border-black rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
				</div>
				<div className="col-span-full">
					<label htmlFor="bio" className="text-sm">Photo</label>
					<div className="flex items-center space-x-2">
						<img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10  rounded-full dark:bg-gray-300" />
						<button type="button" className="px-4 py-2 border rounded-md dark:border-gray-800">Change</button>
					</div>
				</div>
			</div>
		</fieldset>
	</form>
</section>
           </div>
        </div>
    );
};

export default About;