import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-yellow-400 rounded-full" />
        <span className="text-sm font-semibold tracking-widest">PRO BLOX</span>
      </div>
      <div className="flex gap-12 text-md text-zinc-400">
        <Link href="#" className="text-black font-medium">
          Home
        </Link>
        <Link href="https://bloxui.vercel.app/" target="_blank">BloxUI</Link>
        <Link href="https://github.com/Ayuxh-Pratap" target="_blank">Github</Link>
      </div>
    </nav>
  );
};

export default Navbar;
