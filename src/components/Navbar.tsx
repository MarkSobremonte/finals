import Link from "next/link"
import Image from "next/image"


const Navbar = () => {
    return (
        <div className="h-24 flex items-center justify-between">
            <div className="md:hidden lg:block w-[20%]">
                <Link href="homepage" className="font-bold text-2xl text-blue-500">Macebook</Link>
            </div>
            <div className="hidden md:flex w-[50%] text-md items-center justify-between">
                <div className="flex gap-6 text-gray-600">
                    <Link href="homepage" className="flex items-center gap-2">
                        <Image src="/home.png" alt="Homepage" width={16} height={16} className="w-6 h-6"/>
                        <span>Homepage</span>
                    </Link>
                    <Link href="friends" className="flex items-center gap-2">
                        <Image src="/friends.png" alt="Homepage" width={16} height={16} className="w-6 h-6"/>
                        <span>Friends</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/stories.png" alt="Homepage" width={16} height={16} className="w-6 h-6"/>
                        <span>Sotries</span>
                    </Link>
                </div>
                <div className="md:flex xl:flex p-2 bg-slate-100 items-center rounded-xl">
                    <input type="text" placeholder="search..." className="bg-transparent outline-none"/>
                    <Image src="/search.png" alt="Homepge" width={16} height={16}></Image>
                </div>
            </div>
            <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end h-[4%]">
                <div className="flex gap-6 text-blue-600 text-xl">
                     <Link href="login" className="flex items-center gap-2 ">
                        <Image src="/login(2).png" alt="Login" width={45} height={45} className="w-7 h-7"/>
                        <span>login</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar