import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'

const MyDisclosure = () => {
    return (
        <Disclosure as='nav' className='max-w-7xl py-1 px-5 mx-auto'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                    </div>
                    <div className='flex flex-col items-center'>
                        <a href="/" className='text-3xl'>NAME</a>
                        <a href="/">EDUCATION</a>
                    </div>
                </div>
                <div className='hidden sm:block flex space-x-12'>
                    <a href="/" className='text-lg'>Home</a>
                    <a href="/" className='text-lg'>About</a>
                    <a href="/" className='text-lg'>Contact</a>
                </div>
                <Disclosure.Button className='sm:hidden flex space-x-12'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </Disclosure.Button>
            </div>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Disclosure.Panel as='div' className='p-2'>
                    <div className='flex flex-col'>
                        <a href="/" className='text-lg'>Home</a>
                        <a href="/" className='text-lg'>About</a>
                        <a href="/" className='text-lg'>Contact</a>
                    </div>
                </Disclosure.Panel>
            </Transition>

        </Disclosure>

    )
}

export default MyDisclosure