import React from 'react';

export default function notFound() {
    return (
        <div className='text-center h-screen bg-gray-900'>
            <h1 className='mb-4 text-6xl font-semibold text-blue-600'>404</h1>
            <p className="mb-4 text-xl text-gray-400">
                Looks like you found a sceret page!!
            </p>
            <p className="mb-4 text-lg text-gray-400">
                This page is either Under Development or Not Found
            </p>
            <div className='animate-bounce'>
                <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 1919 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
            </div>
        </div>
    );
}