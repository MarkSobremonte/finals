import Link from "next/link"
import Image from "next/image"
import MobileMenu from "./MobileMenu"


const Navbar = () => {
    return (
        <div className="h-24 flex items-center justify-between">
            {/* LEFT */}
            <div className="md:hidden lg:block w-[20%]">
                <Link href="/" className="font-bold text-xl text-blue-500">Smasnug</Link>
            </div>
            {/* CENTER */}
            <div className="hidden md:flex w-[50%] text-sm">
                {/* LINKS */}
                <div className="flex gap-6 text-gray-600">
                    <Link href="homepage" className="flex items-center gap-2">
                        <Image src="/home.png" alt="Homepage" width={16} height={16} className="w-4 h-4"/>
                        <span>Homepage</span>
                    </Link>
                    <Link href="friends" className="flex items-center gap-2">
                        <Image src="/friends.png" alt="Homepage" width={16} height={16} className="w-4 h-4"/>
                        <span>Friends</span> className="w-4 h-4"
                    </Link>
                    <Link href="stories" className="flex items-center gap-2">
                        <Image src="/stories.png" alt="Homepage" width={16} height={16} className="w-4 h-4"/>
                        <span>Sotries</span>
                    </Link>
                </div>
            </div>
            {/* RIGHT */}
            
            <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end h-[4%]">
                <MobileMenu/>
                <div className="flex gap-6 text-blue-600 text-sm">
                     <Link href="login" className="flex items-center gap-2 ">
                        <span>Login/Register</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar