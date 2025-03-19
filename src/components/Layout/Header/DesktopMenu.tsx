"use client";
import { useState } from "react";

function DesktopMenu({className }: {className?: string }) {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the menu
  return (
<>
 {/* Logo */}
 <div className="w-[129px] h-[55px] bg-[url('/assets/images/logo.svg')] bg-cover bg-no-repeat absolute top-0 rtl:start-0 ltr:end-0 overflow-hidden z-[7]" />

{/* Desktop Navigation */}
<button className="hidden md:flex xl:w-[425px] h-[49px] items-center justify-center bg-[rgba(231,240,241,0.2)] rounded-[16px] border-none absolute top-[3px] left-1/2 translate-x-[-50%] translate-y-0 pointer">
  <span className="xl:w-[58px] text-[14px] font-semibold text-[#f8fbfc]">الرئيسية</span>
  <span className="xl:w-[55px] text-[14px] font-normal text-[#5d9d9f]">المنتجات</span>
  <span className="xl:w-[44px] text-[14px] font-normal text-[#5d9d9f]">من نحن</span>
  <span className="xl:w-[87px] text-[14px] font-normal text-[#5d9d9f]">احسب تمويلك</span>
  <span className="xl:w-[69px] text-[14px] font-normal text-[#5d9d9f]">تواصل معنا</span>
</button>

{/* Support Button */}
<div className="flex xl:w-[40px] h-[38px] bg-[rgba(231,240,241,0.2)] rounded-[8px] absolute top-[9px] left-[100px] sm:left-[115px] z-[11]">
  <div className="w-[20px] h-[20px] bg-[url('/assets/images/customer-support.svg')] bg-cover bg-no-repeat"></div>
  <span className="hidden sm:block text-[14px] text-[#5d9d9f]">تواصل معنا</span>
</div>

{/* Language Button */}
<button className="hidden md:flex xl:w-[103px] h-[38px] bg-[rgba(231,240,241,0.2)] rounded-[8px] absolute top-[9px] left-[50px] md:left-0 z-[8] pointer">
  <div className="w-[20px] h-[20px] bg-[url('/assets/images/global.svg')] bg-cover bg-no-repeat"></div>
  <span className="xl:w-[49px] text-[14px] text-[#5d9d9f]">English</span>
</button>

{/* Mobile Navigation Menu */}
<div className="flex md:hidden absolute top-[9px] left-0 z-[8]">
  <button
    className="text-[#5d9d9f] text-xl"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {/* Hamburger Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`w-6 h-6 ${menuOpen ? "rotate-180" : ""}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </button>
</div>

{/* Dropdown Menu */}
{menuOpen && (
  <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-[50] p-4 flex flex-col items-start gap-3">
    <a href="/" className="text-[#5d9d9f] text-[14px] font-medium">
      الرئيسية
    </a>
    <a href="/products" className="text-[#5d9d9f] text-[14px] font-medium">
      المنتجات
    </a>
    <a href="/about-us" className="text-[#5d9d9f] text-[14px] font-medium">
      من نحن
    </a>
    <a href="/calculate" className="text-[#5d9d9f] text-[14px] font-medium">
      احسب تمويلك
    </a>
    <a href="/contact-us" className="text-[#5d9d9f] text-[14px] font-medium">
      تواصل معنا
    </a>
  </div>
)}
</>
  );
}

export default DesktopMenu;
