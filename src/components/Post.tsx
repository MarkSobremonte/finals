import React from 'react'
import Comments from './Comments'

export default function Post() {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md flex flex-col gap-12'>
        {/*user*/}
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img src='https://imgs.search.brave.com/NMChv8xzj-6NWFNbxmWmrsToLkVd5zU4IxD4xIXF1lQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8xNTIv/ODExL0hELXdhbGxw/YXBlci1mdW5ueS1t/b25rZXktYmFja2dy/b3VuZC1iZWF1dGlm/dWwtYmVzdC1hdmFp/bGFibGUtZm9yLWZ1/bm55LW1vbmtleS1t/b25rZXktbWVtZS10/aHVtYm5haWwuanBn' width={40} height={40} className='w-10 h-10 rounded-full'></img>
                <span className='font-medium'>Mark Sobremonte</span>
            </div>
            ...
        </div>
        {/*description*/}
        <div className='flex flex-col gap-4 justify-between items-center'>
            <div className='w-full min-h-96'>
                <img src='https://imgs.search.brave.com/kJpn4IB2H2ujoyw-16b94DPJ6kHB0M8LIE0IA3mvBLg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS4zMDA0/MTcyMzY1LjUwODcv/cHAsNTA0eDQ5OC1w/YWQsNjAweDYwMCxm/OGY4ZjguanBn'className='object-cover'/>
            </div>
            <p>Hello test description hreeee</p>
        </div>
        {/*interaction*/}
        <div className='flex items-center justify-between text-sm'>
            <div className='flex gap-8'>
                <div className=' flex items-center bg-slate-100 p-2 rounded-lg'>
                    <img src='/emoji.png'className='cursor-pointer' width={16} height={16}/>
                    <span className='text-gray-400'>1<span>likes</span>
                    </span>
                </div>
            </div>
            <div className=' flex items-center bg-slate-100 p-2 rounded-lg'>
                    <img src='/comment.png'className='cursor-pointer' width={16} height={16}/>
                    <span className='text-gray-400'>comment
                    </span>
                </div>
            <div className=''></div>
        </div>
        <Comments/>
    </div>
  )
}
