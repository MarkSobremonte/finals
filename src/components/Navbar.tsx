import Link from "next/link"
import Image from "next/image"
import MobileMenu from "./MobileMenu"


const Navbar = () => {
    return (
        <div className="h-24 flex items-center justify-between">
            {/* LEFT */}
            <div className="md:hidden lg:block w-[20%]">
                <Link href="/" className="font-bold text-xl text-blue-500">Macebook</Link>
            </div>
            {/* CENTER */}
            <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
                {/* LINKS */}
                <div className="flex gap-6 text-gray-600">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/home.png" alt="Homepage" width={16} height={16} className="w-4 h-4"/>
                        <span>Homepage</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/friends.png" alt="Homepage" width={16} height={16} className="w-4 h-4"/>
                        <span>Friends</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/stories.png" alt="Homepage" width={16} height={16} className="w-4 h-4"/>
                        <span>Sotries</span>
                    </Link>
                </div>
                <div className="md:flex xl:flex p-2 bg-slate-100 items-center rounded-xl">
                    <input type="text" placeholder="search..." className="bg-transparent outline-none"/>
                    <Image src="/search.png" alt="Homepge" width={16} height={16}></Image>
                </div>
            </div>
            {/* RIGHT */}
            
            <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end h-[4%]">
                <MobileMenu/>
                <div className="flex gap-6 text-blue-600 text-sm">
                     <Link href="login" className="flex items-center gap-2 ">
                        <Image src="/login.png" alt="Login" width={16} height={16} className="w-4 h-4"/>
                        <span>Login/Register</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar