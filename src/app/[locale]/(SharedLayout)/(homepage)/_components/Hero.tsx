"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { Arrow } from "@/components/Animations/arrowDown";
import Image from "next/image";
import Link from "next/link";

const Hero = ({homeData,SettingData}:any) => {
  console.log("homeData",homeData.data.sliders)
  console.log("SettingData",SettingData?.data[0]?.setting?.company_information?.location.finance)

    const { t } = useTranslation("homepage");
  
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = homeData?.data?.sliders?.length
    ? homeData?.data?.sliders?.map((slide:any) => ({
        image: slide.original || "/assets/images/hero/mainbanner.png"
      }))
    : [{ image: "/assets/images/hero/mainbanner.png" }];
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); // Loop through the slides
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Loop through the slides
    };

  return (
    <div className="w-full">
    {/* Background Image */}
    <div
      className="w-full bg-cover bg-no-repeat relative"
    >
              <Image className="absolute top-0 left-0 right-0 bottom-0" src={"/assets/images/hero/mainbanner.png"} alt="Hero Banner" layout="fill" objectFit="cover" priority />

      <div className="w-full xl:w-[1440px] pt-[236px] pb-[64px] mx-auto my-0">
        <div className="flex w-full xl:w-[686px] flex-col gap-[64px] items-center flex-nowrap relative z-[1] mx-auto">
          <div className="flex flex-col gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[2]">
            <span className="flex w-full bukra-semi-bold xl:w-[686px] justify-center items-start self-stretch shrink-0 text-[64px] font-bold leading-[116.48px] text-[#fff] relative text-center z-[3] max-xs:text-[31px] max-xs:leading-[54.48px]">
              {homeData?.data?.title}
            </span>
            <span className="flex lg:w-[546px] h-[64px] justify-center items-start shrink-0 text-[16px] font-medium leading-[32px] text-[#f8fbfc] relative text-center z-[4]">
              {homeData?.data?.description}
            </span>
          </div>
          <div className="flex w-[350px] gap-[24px] items-start shrink-0 flex-nowrap relative z-[5]">
            <Link href={SettingData?.data[0]?.setting?.company_information?.location.finance} className="flex w-[163px] pt-[12px] pr-[46px] pb-[12px] pl-[46px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[16px] border-solid border border-[#5d9d9f] relative z-[8] pointer">
              <span className="flex w-[39px] h-[21px] justify-center items-start shrink-0 basis-auto text-[14px] font-medium leading-[21px] text-[#fff] relative text-center whitespace-nowrap z-[9]">
                {t("hero.apply")}
              </span>
            </Link>
            <Link href={SettingData?.data[0]?.setting?.company_information?.location.more} className="flex w-[163px] pt-[12px] pr-[46px] pb-[12px] pl-[46px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#5d9d9f] rounded-[16px] border-none relative z-[6] pointer">
              <span className="flex w-[71px] h-[21px] justify-center items-start shrink-0 basis-auto text-[14px] font-medium leading-[21px] text-[#fff] relative text-center whitespace-nowrap z-[7]">
                {t("hero.more")}
              </span>
            </Link>
          </div>
          <div className="flex w-[291.75px] flex-col gap-[16px] items-center shrink-0 flex-nowrap relative z-10">
            <span className="h-[25px] shrink-0 basis-auto text-[14px] font-normal leading-[25px] text-[#90bbbd] relative text-left whitespace-nowrap z-[11]">
              {t("hero.download")}
            </span>
            <div className="flex w-[291.75px] gap-[14px] items-center shrink-0 flex-nowrap relative z-[12]">
              <a className="w-[130.125px] h-[44px] shrink-0 bg-[url(/assets/images/hero/group.png)] bg-contain bg-no-repeat border-none relative overflow-hidden z-[13] pointer" href={SettingData?.data[0]?.setting?.company_information?.location?.Latitude}></a>
              <a className="w-[147.125px] h-[44px] shrink-0 bg-[url(/assets/images/hero/Badge.svg)] bg-cover bg-no-repeat border-none relative overflow-hidden z-[13] pointer" href={SettingData?.data[0]?.setting?.company_information?.location?.longitude}></a>
            </div>
          </div>
        </div>

        {/* Navigation Arrows & Bullets */}
        <div className="flex w-full xl:w-[1152px] h-[56px] justify-between items-center relative z-[17] mt-[100px] mb-0 mx-auto">
          <div className="flex w-[248px] gap-[32px] items-center shrink-0 flex-nowrap relative z-[17] max-xs:rtl:mr-5 max-xs:ltr:ml-5">
            <div className="flex w-[144px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[24] ltr:flex-row-reverse">
              {/* Right Arrow */}
              <div
                onClick={nextSlide}
                className="flex w-[64px] h-[46px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#5d9d9f] rounded-[32px] relative z-[27] cursor-pointer"
              >
                <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/images/hero/arrow-right-01.svg)] bg-cover bg-no-repeat relative z-[28]" />
              </div>
              {/* Left Arrow */}
              <div
                onClick={prevSlide}
                className="flex w-[64px] h-[46px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[32px] border-solid border border-[#5d9d9f] relative z-[25] pointer cursor-pointer"
              >
                <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/images/hero/arrow-left-01.svg)] bg-cover bg-no-repeat relative z-[26]" />
              </div>

            </div>

            {/* Pagination Dots */}
            <div className="flex w-[72px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[18]">
              {slides.map((_:any, index:any) => (
                <div
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-[8px] h-[8px] rounded-[24px] cursor-pointer ${
                    index === currentSlide ? "bg-[#fff]" : "bg-[#fff] opacity-40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Arrow Down */}
          <div className="w-[56px] h-[56px] flex justify-center items-center relative z-[16]">
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hero;
