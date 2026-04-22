'use client'

import { ChartBar, House, Timer } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathName = usePathname()
    return (
        <nav className=" bg-white border-b-2 border-gray-100">
            <div className="navbar p-2 w-11/12 mx-auto ">
 <div className="flex-1">
          <Link href="/" className="text-2xl ">
            <span className="text-slate-900 font-extrabold">Keen</span>
            <span className="text-[#1A4332] font-bold ">Keeper</span>
          </Link>
        </div>
  <div className="flex items-center gap-2">
    <button  className={ `btn btn-ghost text-[#64748B] ${pathName=== '/' ? 'bg-[#244D3F] text-white'  : '' }`}><Link href='/' className="flex justify-center items-center gap-1" ><House/> Home</Link></button>
    <button className={ `btn btn-ghost text-[#64748B] ${pathName=== '/timeline' ? 'bg-[#244D3F] text-white'  : '' }`}><Link href='/timeline' className="flex justify-center items-center gap-1"><Timer></Timer> Timeline</Link></button>
    <button className={ `btn btn-ghost text-[#64748B] ${pathName=== '/stats' ? 'bg-[#244D3F] text-white'  : '' }`}><Link href='/stats' className="flex justify-center items-center gap-1"><ChartBar/> Stats</Link></button>
  </div>
</div>
        </nav>
    );
};

export default Navbar;