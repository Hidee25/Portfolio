"use client"
import Image from "next/image"
import Link from "next/link"
import { useState} from "react"

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="backdrop-blur-md bg-[#09090B]/50 px-20 md:px-0 fixed z-10 top-0 left-0 w-full border-b border-[#b3b3b3]/30">
      <div className="py-4 md:px-10 sm:px-5 flex flex-row items-center gap-8 justify-between max-w-7xl mx-auto">
        <Link href={"/"} className="cursor-pointer">
          <span className="flex justify-center items-center gap-2">
            <Image src={"/images/logo.png"} alt="logo" width={35} height={35}/>
            <span className="text-lg text-white font-semibold">Christo.prasetya</span>
          </span>
        </Link>
        <div className="flex flex-row items-center gap-4 text-[#b3b3b3] text-lg tracking-tight md:hidden">
          <Link className="p-1" href={"/"}>Home</Link>
          <Link className="p-1" href={"/about"}>About</Link>
          <Link className="p-1" href={"/projects"}>Projects</Link>
          <Link className="p-1" href={"/contact"}>Contact</Link>
        </div>
        <button onClick={() => {setOpenMenu(!openMenu)}} className="p-1 hidden md:block text-white border border-white/40 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className={`fixed h-screen w-[70vw] p-5 top-0 z-20 bg-[#09090B]/50 backdrop-blur-md transition ease-in-out duration-150 ${openMenu ? 'right-0 opacity-100' : 'right-[-10000px] opacity-0'} `}>
        <div className="h-full w-full flex flex-col gap-10 pb-10 items-end">
          <button onClick={() => {setOpenMenu(!openMenu)}} className="text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="h-full w-full flex flex-col items-center justify-between text-[#b3b3b3] text-xl font-medium tracking-tight">
            <Link className="p-2" href={"/"}>Home</Link>
            <Link className="p-2" href={"/about"}>About</Link>
            <Link className="p-2" href={"/projects"}>Projects</Link>
            <Link className="p-2" href={"/contact"}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}