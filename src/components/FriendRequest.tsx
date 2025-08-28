import React from 'react'
import Link from 'next/link'

export default function FriendRequest() {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>Friend Request</span>
            <Link href='friends' className='text-blue-500 text-xs'>See all</Link>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img src='https://pics.craiyon.com/2024-03-26/CXcjSa16Q--U3HdIjqDDXQ.webp' className='w-10 h-10 rounded-full object-cover' width={40} height={40}></img>
                <span>Mark Sobremonte</span>
            </div>
            
            <div className=''></div>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img src='https://pics.craiyon.com/2024-03-26/CXcjSa16Q--U3HdIjqDDXQ.webp' className='w-10 h-10 rounded-full object-cover' width={40} height={40}></img>
                <span>Mark Sobremonte</span>
            </div>
            
            <div className=''></div>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img src='https://pics.craiyon.com/2024-03-26/CXcjSa16Q--U3HdIjqDDXQ.webp' className='w-10 h-10 rounded-full object-cover' width={40} height={40}></img>
                <span>Mark Sobremonte</span>
            </div>
            
            <div className=''></div>
        </div>
    </div>
  )
}
