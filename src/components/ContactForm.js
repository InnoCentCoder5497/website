import React from "react";

const ContactForm = () => {
    return (
        <div className='mb-24'>
            <div className='flex flex-col justify-items-start rounded-2xl max-w-7xl px-5 mb-2 md:mx-auto mx-2'>
                <p className='text-3xl font-semibold'>Contact Us</p>

                <div className='flex flex-col w-full my-5'>
                    <div className='w-3/4'>
                        <div className='flex flex-col md:flex-row mb-3'>
                            <input type="text" className='border-2 w-2/4 mr-1 border-blue-600 rounded-full px-3 py-1' placeholder='First Name' />
                            <input type="text" className='border-2 w-2/4 border-blue-600 rounded-full px-3 py-1' placeholder='Last Name' />
                        </div>
                        <div className='mb-3'>
                            <input type="text" className='border-2 w-2/4 border-blue-600 rounded-full px-3 py-1' placeholder='Email' />
                        </div>
                        <div>
                            <textarea name='enquiry' rows='5' className='border-2 w-full border-blue-600 rounded-lg px-3 py-1' placeholder='Enquiry' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm