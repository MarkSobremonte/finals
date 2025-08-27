import React from 'react'
import Link from 'next/link'

export default function RightMenu() {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
      <div className='flex justify-between items-center'>
        <span className='text-gray-400'>Friend Request </span>
        <Link href="/" className='text-blue-400 text-xs '>See all</Link>
      </div>
      <div className='flex items-center justify-between'>
        <div className=''><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFiz5Lt3rjcmo1vOl5LuclZj1Na2-eb3X2QA&s" className='w-10 h-10 rounded-full' width={40} height={40}/><span>Mark Sobremonte</span></div>
        <div className=''></div>
      </div>
    </div>
    
  )
}
