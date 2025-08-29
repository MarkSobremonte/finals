import React from 'react'

export default function Birthdays() {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
      <div className='flex justify-between items-center font-medium'>
          <span className='text-gray-500'>Birthday</span>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img src='https://w0.peakpx.com/wallpaper/766/843/HD-wallpaper-cool-anime-boy-mirror-selfie-animation-thumbnail.jpg' className='w-10 h-10 rounded-full object-cover' width={40} height={40}></img>
                <span>Alfie Nicholas</span>
            </div>
            <div className=''></div>
        </div>
    </div>
  )
}
