"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  style?:any;
}

export default function NavLink({ href, children, className,style }: NavLinkProps) {
  const pathname = usePathname();
  
  const isActive = pathname === href;
// console.log(href);

  return (
    <>
    <Link
      href={href}
      className={cn(
        "relative",
        isActive && (href === "/" || href === "/en") 
          ? "font-semibold text-white bukra-semi-bold" 
          : isActive 
            ? "font-semibold text-[#5d9d9f] bukra-semi-bold"
            : "text-[#5d9d9f]",
        className
      )}
      style={style}
    >
      {children}
    <div className={cn(
  isActive 
    ? (href === "/" || href === "/en") 
      ? "w-full h-[2px] shrink-0 bg-white absolute bottom-[-10px] left-0 z-[6]" 
      : "w-full h-[2px] shrink-0 bg-[#5d9d9f] absolute bottom-[-10px] left-0 z-[6]"
    : "hidden"
)}
 />
    </Link>
    

    </>

  );
}
