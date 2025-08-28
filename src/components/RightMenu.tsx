import React from 'react'
import Link from 'next/link'
import FriendRequest from './FriendRequest'
import Birthdays from './Birthdays'
import Ad from './Ad'

export default function RightMenu() {
  return (
    <div className='flex flex-col gap-6'>
      <FriendRequest/>
      <Birthdays/>
      <Ad size='md'/>
    </div>
    
  )
}
