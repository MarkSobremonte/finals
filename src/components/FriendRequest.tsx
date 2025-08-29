import React from 'react'
import Link from 'next/link'

export default function FriendRequest() {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>Friends</span>
            <Link href='friends' className='text-blue-500 text-xs'>See all</Link>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLh22WwcNMhz_U18LIg6SDOc6qTy8wh1r96DvupUUf7el6MtH0FarmBcfb6EhBnuGq3Oo&usqp=CAU' className='w-10 h-10 rounded-full object-cover' width={40} height={40}></img>
                <span>Mark Sobremonte</span>
            </div>
            
            <div className=''></div>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img src='https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660487.jpg' className='w-10 h-10 rounded-full object-cover' width={40} height={40}></img>
                <span>Charles Marion Barandoc</span>
            </div>
            
            <div className=''></div>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img src='https://cdn.vectorstock.com/i/1000v/65/54/cute-anime-girl-in-black-hoodie-and-green-eyes-vector-39706554.jpg' className='w-10 h-10 rounded-full object-cover' width={40} height={40}></img>
                <span>Paul Lourence Calicoy</span>
            </div>
            <div className=''></div>
        </div>
                <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNWwy5soAU7U709rJS8W4vb0XXz9XCXtR1A&s' className='w-10 h-10 rounded-full object-cover' width={40} height={40}></img>
                <span>jamaric Jes</span>
            </div>
            <div className=''></div>
        </div>
    </div>
  )
}
