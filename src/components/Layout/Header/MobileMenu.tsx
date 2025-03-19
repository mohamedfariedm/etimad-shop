"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function MobileMenu({
  locale,
  className,
  menuItems
}: {
  locale: string;
  className?: string;
  menuItems: any[];
}) {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu visibility
  const { t } = useTranslation("common");

  return (
    <div className="flex md:hidden   xl:w-[103px] h-[38px] pt-[8px] pr-[13px] pb-[8px] pl-[13px] gap-[8px] items-center flex-nowrap  border-none absolute top-[9px] left-0 z-[8] pointer">
      {/* Hamburger Button */}
      <button
        className="text-[#5d9d9f] text-xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="absolute top-20 left-0 w-[100vw] bg-white shadow-lg z-50 p-4 flex flex-col items-center gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Menu Items */}
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-[#5d9d9f] text-[14px] font-medium"
                variants={itemVariants}
              >
          {item.key.startsWith("custom_") ? item.name : t(`menu.${item.key}`)}
          </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenu;
