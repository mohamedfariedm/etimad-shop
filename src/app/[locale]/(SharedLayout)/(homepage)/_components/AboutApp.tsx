import { Arrow } from "@/components/Animations/arrowDown";
import { TFunction } from "i18next";
import React from "react";


function AboutApp({ t, homeData }: { t: TFunction; homeData: any }) {
  return (
    <div className="main-container flex w-full flex-wrap justify-center items-center xl:w-[1152px] xl:h-[954.354px] relative mx-auto my-0">
    <div className="flex w-[323px] h-[766.354px] flex-col gap-[48px] items-center flex-nowrap xl:absolute xl:top-0 xl:end-[829px] z-[18]">
      <div className="flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[19]">
      <div className="w-[46px] h-[46px] shrink-0 bg-[url(/assets/images/aboutapp/1-1.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[25]" />
      <div
            className="w-px h-[50px] shrink-0 bg-[url(/assets/images/aboutapp/line.svg)] bg-cover bg-no-repeat relative z-[24]"
           
          />


        <div className="w-[245px] h-[124px] shrink-0 relative z-20">
          <div className="w-[22px] h-[64px] bg-[url(/assets/images/aboutapp/1.svg)] bg-cover bg-no-repeat relative z-[23] mt-[-1px] mr-0 mb-0 ml-[219px]" />
          <span className="flex w-[92px] h-[27px] justify-end items-start  text-[14px] font-bold leading-[26.6px] text-[#5d9d9f] relative text-right whitespace-nowrap z-[21] mt-[-10px] mr-0 mb-0 ml-[153px]">
          {homeData?.data?.sections[3]?.Posts[0]?.title}
                              </span>
          <span className="flex w-[212px] h-[54px] justify-end items-start  text-[14px] font-normal leading-[26.6px] text-[#5d9d9f] relative text-right z-[22] mt-0 mr-0 mb-0 ml-[33px]">
          {homeData?.data?.sections[3]?.Posts[0]?.description}
          </span>
        </div>
      </div>
      <div className="w-[306.975px] h-[594.354px] shrink-0 bg-[url(/assets/images/aboutapp/iPhone.svg)] bg-cover bg-no-repeat relative z-[26]" 
       style={{
        backgroundImage: `url(${homeData?.data?.sections[3]?.Posts[0]?.attachment[0]?.original || "/assets/images/aboutapp/iPhone.svg"})`
      }}/>
    </div>
    <div className="flex w-[323px] h-[776.354px] flex-col gap-[48px] items-center flex-nowrap xl:absolute xl:top-[71px] xl:end-[414.5px] z-[9]">
      <div className="flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-10">
      <div className="w-[46px] h-[46px] shrink-0 bg-[url(/assets/images/aboutapp/2-2.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[16]" />
        <div className="w-px h-[50px] shrink-0 bg-[url(/assets/images/aboutapp/line.svg)] bg-cover bg-no-repeat relative z-[15]" />

        <div className="w-[245px] h-[134px] shrink-0 relative z-[11]">
          <div className="w-[46px] h-[64px] bg-[url(/assets/images/aboutapp/2.svg)] bg-cover bg-no-repeat relative z-[14] mt-[4px] mr-0 mb-0 ml-[199px]" />
          <span className="flex w-[69px] h-[27px] justify-end items-start  text-[14px] font-bold leading-[26.6px] text-[#5d9d9f] relative text-right whitespace-nowrap z-[12] mt-[-10px] mr-0 mb-0 ml-[176.5px]">
       {homeData?.data?.sections[3]?.Posts[1]?.title}
          </span>
          <span className="flex w-[191px] h-[54px] justify-end items-start  text-[14px] font-normal leading-[26.6px] text-[#5d9d9f] relative text-right z-[13] mt-0 mr-0 mb-0 ml-[55px]">
            {homeData?.data?.sections[3]?.Posts[1]?.description}
          </span>
        </div>
      </div>
      <div
      className="w-[306.975px] h-[594.354px] shrink-0 bg-cover bg-no-repeat relative z-[17]"
      style={{
      backgroundImage: `url(${homeData?.data?.sections[3]?.Posts[1]?.attachment[0]?.original || "/assets/images/aboutapp/iPhone1.svg"})`
         }}
      />

    </div>
    <div className="flex w-[323px] h-[778.354px] flex-col gap-[48px] items-center flex-nowrap xl:absolute xl:top-[176px] xl:end-0">
      <div className="flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[1]">
      <div className="w-[46px] h-[46px] shrink-0 bg-[url(/assets/images/aboutapp/3-3.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[7]" />
        <div className="w-px h-[50px] shrink-0 bg-[url(/assets/images/aboutapp/line.svg)] bg-cover bg-no-repeat relative z-[6]" />

        <div className="w-[245px] h-[136px] shrink-0 relative z-[2]">
          <div className="w-[48px] h-[64px] bg-[url(/assets/images/aboutapp/3.svg)] bg-cover bg-no-repeat relative z-[5] mt-[5px] mr-0 mb-0 ml-[197px]" />
          <span className="flex w-[97px] h-[27px] justify-end items-start  text-[14px] font-bold leading-[26.6px] text-[#5d9d9f] relative text-right whitespace-nowrap z-[3] mt-[-10px] mr-0 mb-0 ml-[148px]">
            {homeData?.data?.sections[3]?.Posts[2]?.title}
          </span>
          <span className="flex w-[245px] h-[54px] justify-end items-start  text-[14px] font-normal leading-[26.6px] text-[#5d9d9f] relative text-right z-[4] mt-0 mr-0 mb-0 ml-0">
            {homeData?.data?.sections[3]?.Posts[2]?.description}
          </span>
        </div>
      </div>
      <div
      className="w-[306.975px] h-[594.354px] shrink-0 bg-cover bg-no-repeat relative z-[8]"
      style={{
        backgroundImage: `url(${homeData?.data?.sections[3]?.Posts[2]?.attachment[0]?.original || "/assets/images/aboutapp/iPhone2.svg"})`
        }}
      />

    </div>
  </div>



  );
}

export default AboutApp;
