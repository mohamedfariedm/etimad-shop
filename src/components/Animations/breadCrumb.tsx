"use client";


import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
const BreadCrumb: React.FC<{
  className?: string;
  value?:string
}> = ({ className,value}) => {

const {t}= useTranslation(value)
  return (
<div className="main-container flex w-[200px] gap-[12px] items-center flex-nowrap relative mx-auto mt-[164px] mb-[64px]">
      <div className="flex  justify-center items-center shrink-0 flex-nowrap relative">
      <Link href="/" className="h-[20px] shrink-0 basis-auto  text-[14px] font-medium leading-[20px] text-[#90bbbd] relative text-left whitespace-nowrap z-[3]">
      {t("home")}
      </Link>
       
      </div>
      <div
      style={{ backgroundImage: "url(/assets/images/mission&vission/arrow-left.svg)" }}
      className="w-[24px] h-[24px] shrink-0  bg-cover bg-no-repeat relative z-[2] ltr:rotate-180"/>
      <span className="h-[20px] shrink-0 basis-auto  text-[14px] font-semibold leading-[20px] text-[#5d9d9f] relative text-left whitespace-nowrap z-[1]">
          {t("breadCrumb")}
        </span>
    </div>
  );
};

export const BreadCrumbComponent = React.memo(BreadCrumb);
