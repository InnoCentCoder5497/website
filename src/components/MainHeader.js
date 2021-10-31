import React from "react";

const MainHeader = () => {
    return (
        <div className='h-screen w-full'>
            <div className='flex bg-cover bg-center h-5/6 w-full bg-main-head'>
                <div className='h-full w-full bg-gradient-to-t from-gray-900 bg-opacity-50 items-center'>
                    <div className='hidden md:flex w-full h-full'>
                        <div className='flex w-1/2'>

                        </div>
                        <div className='flex flex-col w-1/2 p-2 m-auto'>
                            <p className='text-5xl text-white font-medium m-auto p-2'>Classes</p>
                            <div className='flex flex-row mx-auto space-x-12 mt-5'>
                                {/* <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-10 mx-auto rounded-full'>
                                    About
                                </button>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-8 mx-auto rounded-full'>
                                    Learning
                                </button> */}
                            </div>
                        </div>
                    </div>
                    <div className='flex md:hidden w-full h-full'>
                        <div className='flex flex-col m-auto'>
                            <p className='text-5xl text-white font-medium m-auto p-2'>Classes</p>
                            <div className='flex flex-row mx-auto space-x-12 mt-5'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-10 mx-auto rounded-full'>
                                    About
                                </button>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-8 mx-auto rounded-full'>
                                    Learning
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader;