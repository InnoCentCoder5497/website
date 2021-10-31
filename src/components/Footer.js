import React from "react";

const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row border-2 rounded-2xl max-w-6xl py-5 px-10 mb-2 lg:mx-auto mx-2 bg-blue-900 shadow-md'>
            <div className='flex flex-col h-1/3 w-full p-5'>
                <p className='text-4xl text-white font-medium my-3'>Name</p>
                <a href='/' className='text-white hover:text-gray-200 py-1'>Sample</a>
                <a href='/' className='text-white hover:text-gray-200 py-1'>Sample</a>
                <a href='/' className='text-white hover:text-gray-200 py-1'>Sample</a>
                <a href='/' className='text-white hover:text-gray-200 py-1'>Sample</a>

            </div>
            <div className='flex flex-col h-1/3 w-full p-5'>
            <p className='text-white font-bold text-lg'>NAME</p>
            <p className='text-white'>Hyde Street Practice57 Hyde Street, Adelaide</p>
            <p className='text-white font-bold text-lg'>NAME</p>
            <p className='text-white'>Woodville64c Woodville Road, Woodville SA 5011, Australia</p>
                <div className='flex my-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className='text-white hover:border-gray-50 border-transparent border-b-2 hover:border-current'>+91-9729112835</p>
                </div>
                <div className='flex my-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <p className='text-white hover:border-gray-50 border-transparent border-b-2 hover:border-current'>email@emai.com</p>
                </div>
            </div>
            <div className='h-1/3 w-full bg-green-600 rounded-2xl p-5 lg:-mr-24'>
                <p className='text-blue-900 font-bold text-lg'>Sign up for our eNews</p>
                <p className='text-blue-800'>SHINE SA has a range of eNewsletters to suit your needs.</p>
                <input className='w-full py-1 px-5 my-2 rounded-full' placeholder='Hello' />

                <input className='w-full py-1 px-5 my-2 rounded-full' placeholder='Wassup' />
                <button className='rounded-full py-2 px-4 my-1 bg-blue-300 hover:bg-blue-400 text-white'>
                    Subscribe
                </button>

            </div>
        </div>
    )
}

export default Footer;