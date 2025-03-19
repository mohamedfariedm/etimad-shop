import { TFunction } from "i18next";
import React from "react";

function MissionAndVision({ t, aboutData }: { t: TFunction; aboutData: any }) {
  return (
    <div className="main-container flex w-full lg:w-[1152px] flex-col gap-[64px] items-start flex-nowrap relative mx-auto my-0 px-5 lg:px-0">
      <div className="flex flex-col gap-[24px] self-stretch shrink-0 flex-nowrap relative">
        <span className="lg:h-[58px] self-stretch shrink-0 basis-auto text-[32px] font-semibold bukra-semi-bold leading-[58px] text-[#5d9d9f] relative text-center lg:whitespace-nowrap z-[1]">
          {aboutData?.data?.sections[0]?.title}
        </span>
        <span className="flex lg:w-[1135px] lg:h-[105px] items-start self-stretch shrink-0 text-[16px] font-medium leading-[35.2px] text-[#90bbbd] relative text-start z-[2]">
          {aboutData?.data?.sections[0]?.Posts[0]?.description}
        </span>
      </div>
      <div className="flex flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap relative z-[3]">
        <div className="flex gap-[64px] flex-col lg:flex-row items-center self-stretch shrink-0 flex-nowrap relative z-[4]">
          <div
            className="w-[500px] h-[500px] shrink-0 bg-cover bg-no-repeat relative overflow-hidden z-[18]"
            style={{ backgroundImage: `url(${aboutData?.data?.sections[1]?.Posts[0]?.attachment[0]?.original || '/fallback-image.jpg'} )` }}
          />
          <div className="flex w-full lg:w-[588px] flex-col gap-[24px] shrink-0 flex-nowrap relative z-[5]">
            <span className="h-[58px] self-stretch shrink-0 basis-auto text-[32px] font-semibold bukra-semi-bold leading-[58px] text-[#5d9d9f] relative text-start whitespace-nowrap z-[6]">
              {aboutData?.data?.sections[1]?.title}
            </span>
            <span className="flex w-full lg:w-[568px] lg:h-[70px] items-start self-stretch shrink-0 text-[16px] font-medium leading-[35.2px] text-[#90bbbd] relative text-start z-[7]">
              {aboutData?.data?.sections[1]?.Posts[0]?.description}
            </span>
          </div>
        </div>
        <div className="flex gap-[64px] flex-col lg:flex-row items-center self-stretch shrink-0 flex-nowrap relative z-[17]">
          <div className="flex lg:w-[588px] flex-col gap-[24px] shrink-0 flex-nowrap relative z-[19]">
            <span className="lg:h-[58px] self-stretch shrink-0 basis-auto text-[32px] font-semibold bukra-semi-bold leading-[58px] text-[#5d9d9f] relative text-start whitespace-nowrap z-20">
              {aboutData?.data?.sections[2]?.title}
            </span>
            <span className="flex lg:w-[568px] lg:h-[105px] items-start self-stretch shrink-0 text-[16px] font-medium leading-[35.2px] text-[#90bbbd] relative text-start z-[21]">
              {aboutData?.data?.sections[2]?.Posts[0]?.description}
            </span>
          </div>
          <div
            className="w-[500px] h-[500px] shrink-0 bg-cover bg-no-repeat relative overflow-hidden z-[18]"
            style={{ backgroundImage: `url(${aboutData?.data?.sections[2]?.Posts[0]?.attachment[0]?.original})` }}
          />
        </div>
      </div>
    </div>
  );
}

export default MissionAndVision;
