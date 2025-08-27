import React from 'react'

export default function Stories() {
  return (
    <div className=' p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide'> 
        <div className='flex gap-8 w-max'>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <img src="https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyaTVoNWo5NXg5eDdvbjBsbjhybXRuMGFkeHA1aXpkMHI3MnhweWJqayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lxxOGaDRk4f7R5TkBd/200w.gif" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/> 
                <span className='font-medium'>Mark</span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <img src="https://i.makeagif.com/media/9-30-2023/OYZZON.gif" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/> 
                <span className='font-medium'>Charles</span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <img src="https://gifdb.com/images/high/profile-pic-franklin-gta-funny-zoom-in-95wfnve6gfrdmbro.gif" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/> 
                <span className='font-medium'>Paul</span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <img src="https://wallpapers-clan.com/wp-content/uploads/2022/11/meme-gif-pfp-25.gif" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/> 
                <span className='font-medium'>sobremonte</span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <img src="https://memes.memedrop.io/production/DXV7866e8N29/source.gif" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/> 
                <span className='font-medium'>calicoy</span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <img src="https://wallpapers-clan.com/wp-content/uploads/2022/11/meme-gif-pfp-24.gif" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/> 
                <span className='font-medium'>barandoc</span>
            </div>
        </div>
    </div>
    
    
  )
}
