import React from 'react'
import {useMutation} from '@tanstack/react-query'

export default function Comments() {
  return (
    <div className=''>
        {/*write*/}
        <div className='flex items-center gap-4'>
        <div className='flex-1 bg-gray-100 items-center justify-between rounded-xl text-sm px-6 py-2 w-full'>
            <input type='text' placeholder='wirte a cooment' className=''></input>
        </div>
        </div>
        {/*comments*/}
        <div className=''></div>
    </div>
  )
}
