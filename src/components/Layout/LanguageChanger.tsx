"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  const handleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    // Set a cookie to save the preferred locale
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
    localStorage.setItem("language", newLocale);
    localStorage.setItem("i18nextLng", newLocale);

    // Redirect to the new locale path
    let newPath;
    if (
      currentLocale === "en" && // Assuming 'en' is the default locale
      !currentPathname.includes("/en")
    ) {
      newPath = `/${newLocale}${currentPathname}`;
    } else {
      newPath = currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);
    }
    localStorage.setItem("language", newLocale);
    localStorage.setItem("i18nextLng", newLocale);

    window.location.href = newPath;

  };

  return (
    <div className="absolute top-[9px] left-[50px] md:left-0">
      {/* Language Switcher Button */}
      <button
        className="flex xl:w-[103px] h-[38px] pt-[8px] pr-[13px] pb-[8px] pl-[13px] gap-[8px] items-center bg-[rgba(231,240,241,0.2)] rounded-[8px] border-none z-[8]"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <div className="w-[20px] h-[20px] shrink-0 bg-[url('/assets/images/global.svg')] bg-cover bg-no-repeat relative z-[9]" />
        <span className="hidden md:flex xl:w-[49px] h-[22px] justify-start items-start text-[14px] font-normal leading-[22px] text-[#5d9d9f] relative z-10">
          {currentLocale === "ar" ? "العربية" : "English"}
        </span>
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <motion.div
          className="absolute top-[45px] left-0 w-[120px] bg-white shadow-lg rounded-lg z-[9] flex flex-col"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <button
            onClick={() => {
              setDropdownOpen(false);
              handleChange("ar");
            }}
            className="px-4 py-2 text-[14px] text-[#5d9d9f] hover:bg-gray-100"
          >
            العربية
          </button>
          <button
            onClick={() => {
              setDropdownOpen(false);
              handleChange("en");
            }}
            className="px-4 py-2 text-[14px] text-[#5d9d9f] hover:bg-gray-100"
          >
            English
          </button>
        </motion.div>
      )}
    </div>
  );
}
