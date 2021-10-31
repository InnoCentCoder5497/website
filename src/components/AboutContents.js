import React from "react";
import fbimg from '../images/fb.png'
import instaimg from '../images/insta.png'

const AboutContents = () => {
    return (
        <div className='mb-24'>
            <div className='flex flex-col justify-items-start rounded-2xl max-w-7xl px-5 mb-2 md:mx-auto mx-2'>
                <p className='text-3xl font-semibold'>About Us</p>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex flex-col w-full md:w-3/4 lg:mr-2'>
                        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea animi, rem ullam beatae incidunt molestiae porro pariatur, rerum sed sapiente esse adipisci impedit odio delectus. Excepturi laudantium nihil deserunt consectetur!</p>
                        <p className='my-3'>Eius ab accusamus voluptates. Nihil quasi mollitia culpa id reiciendis!</p>
                        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque ab animi quas facere laboriosam excepturi? Quod sed nulla corrupti.</p>
                        <p className='my-3'>Ipsa accusamus ipsam quae odio dolor provident commodi repellendus asperiores.</p>
                    </div>
                    <div className='flex flex-col w-full items-center md:w-1/4 bg-gray-100 rounded-3xl'>
                        <div className='mt-auto mb-2'>
                            <p className='text-xl font-semibold'>Connect At</p>
                        </div>
                        <div className='flex mb-auto space-x-12 md:space-x-6'>
                            <img src={fbimg} alt='Facebook' className='h-20 w-20' />

                            <img src={instaimg} alt='Instagram' className='h-20 w-20' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContents