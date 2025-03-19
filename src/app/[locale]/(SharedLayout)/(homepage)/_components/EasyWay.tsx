import { Arrow } from "@/components/Animations/arrowDown";
import { TFunction } from "i18next";
import React from "react";

function EasyWay({ t, homeData }: { t: TFunction; homeData: any }) {
  return (
    <div className="main-container flex w-full xl:w-[1152px] flex-col gap-[64px] items-center flex-wrap xl:flex-nowrap relative mx-auto my-0">
      <div className="flex w-full xl:w-[750px] flex-col gap-[12px] items-center shrink-0 flex-wrap xl:flex-nowrap relative">
        <div className="flex gap-[24px] justify-center items-center self-stretch shrink-0 flex-wrap xl:flex-nowrap relative z-[1]">
          <div
            className="w-[176px] h-[3px] shrink-0 bg-cover bg-no-repeat rounded-[4px] relative z-[2]"
            style={{ backgroundImage: "url(/assets/images/eassyway/line.svg)" }}
          />
          <span className="flex w-full bukra-semi-bold rtl:xl:w-[500px] xl:h-[58px] justify-center items-start shrink-0 basis-auto text-[32px] font-semibold leading-[57.6px] text-[#5d9d9f] relative text-center xl:whitespace-nowrap z-[3]">
            {homeData?.data?.sections[0]?.title}
          </span>
          <div
            className="w-[176px] h-[3px] shrink-0 bg-cover bg-no-repeat rounded-[4px] relative z-[4]"
            style={{ backgroundImage: "url(/assets/images/eassyway/line.svg)", rotate: "180deg" }}
          />
        </div>
        <span className="xl:h-[24px] self-stretch shrink-0 basis-auto text-[16px] font-medium leading-[24px] text-[#90bbbd] relative text-center xl:whitespace-nowrap z-[5]">
          {homeData?.data?.sections[0]?.Posts[0]?.description}
        </span>
      </div>
      <div className="flex w-full justify-center gap-y-10 xl:justify-between items-center self-stretch shrink-0 flex-wrap xl:flex-nowrap relative z-[6]">
        {homeData?.data?.sections[0]?.Posts.slice(1,4).map((item:any, index:any) => (
          <div key={index} className="w-[368px] h-[101px] shrink-0 relative z-[7]">
            <div className="w-[336px] h-[101px] bg-[#f8fbfc] rounded-[16px] absolute top-0 end-0 z-[8]" />
            <div
              className="flex w-[64px] h-[64px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[8px] items-center flex-wrap xl:flex-nowrap rounded-[16px] absolute top-[19px] end-[304px] z-[12]"
              style={{ backgroundImage: `url(${item?.attachment[0]?.original})` }}
            />
            <div className="flex w-[212px] h-[61px] flex-col gap-[4px] items-start flex-wrap xl:flex-nowrap absolute top-1/2 end-[68px] translate-x-0 translate-y-[-50%] z-[9]">
              <span className="h-[30px] self-stretch shrink-0 basis-auto text-[20px] font-medium leading-[30px] text-[#5d9d9f] relative text-start xl:whitespace-nowrap z-10">
                {item?.title}
              </span>
              <span className="flex w-[218px] h-[27px] justify-start items-start shrink-0 basis-auto ltr:text-[12px] rtl:text-[14px] font-normal ltr:leading-4 rtl:leading-[26.6px] text-[#5d9d9f] relative text-start rtl:xl:whitespace-nowrap z-[11]">
                {item?.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EasyWay;
