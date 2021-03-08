import React from 'react';

const Speacing = () => {
    return (
        <div className='p-8 bg-gray-900 min-h-screen flex items-center justify-center'>
            <div className='w-96 mx-auto'>
                <div className='relative h-80 bg-blue-500 rounded-xl'>
                     <div className='absolute top-10 right-24 bottom-22 -left-10'>
                        <div className='bg-white w-full h-full rounded-lg shadow-lg p-3 font-sans'>
                            <img className='w-10 h-10 rounded-full' src='https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg' alt='Next' />
                            <h1 className='mb-1 text-2xl text-gray-400'>sajjat hossain</h1>
                            <p>Bangladesh is my own country. This is my home land. if any one attack me then I will be kill him</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Speacing;