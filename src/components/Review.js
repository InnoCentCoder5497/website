import React from "react";
import simg from '../images/sample.jpg'

const Review = () => {
    return (
        <div className='my-10'>
            <div className='flex flex-col md:flex-row rounded-2xl max-w-7xl py-5 px-5 mb-2 lg:mx-auto mx-2 my-10 justify-around bg-gray-100'>
                <div className='flex flex-col px-5 md:px-10 '>
                    <div className='flex shadow-lg w-full my-2 rounded-3xl -mt-10 md:-mt-16'>
                        <img src={simg} alt='reviews' className='rounded-3xl' />
                    </div>
                </div>
                <div className='flex flex-col m-auto'>
                    <p className='text-blue-800 font-semibold text-xl my-1'>Lorem, ipsum dolor</p>

                    <p className='font-light text-blue-600 my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus commodi dignissimos adipisci repudiandae at, debitis rerum ut ducimus eaque quidem dolor harum atque mollitia nihil aliquam delectus illo provident minus.</p>

                    <div>
                        <button className='rounded-full py-2 px-4 my-1 bg-blue-300 hover:bg-blue-400 text-white'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review