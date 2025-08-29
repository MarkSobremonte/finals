import Link from "next/link"
import ProfileCard from "./ProfileCard"

const LeftMenu = ({type}:{type:"home" | "profile"}) => {
  return (
    <div className="flex flex-col gap-6">
      {type==="home" && <ProfileCard/>}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <img src="/myposts.png" width={20} height={20}></img>
        <span>My Posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"></hr>
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <img src="/activities.png" width={20} height={20}></img>
        <span>Activities</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"></hr>
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <img src="/marketplace.png" width={20} height={20}></img>
        <span>Marketplace</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"></hr>
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <img src="/events.png" width={20} height={20}></img>
        <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"></hr>
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <img src="/album.jpg" width={20} height={20}></img>
        <span>Album</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"></hr>
        <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <img src="/blogs.png" width={20} height={20}></img>
        <span>Blogs</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"></hr>
      </div>
    </div>
  )
}

export default LeftMenu