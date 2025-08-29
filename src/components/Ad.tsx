import React from 'react'

const Ad = ({size}: {size: "sm" | "md" | "lg"}) => {
    return <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
        <div className='flex items-center justify-between text-gray-500 font-medium'>
            <span>Sponsored Ads</span>
            <span>...</span>
        </div>
        <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
            <img src="https://i.kym-cdn.com/entries/icons/facebook/000/055/084/coco-martin-sir-tapos-na-po.jpg" className='round-lg object-cover'></img>
        </div>
    </div>
}

export default Ad;