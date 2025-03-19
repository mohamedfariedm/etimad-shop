import { Arrow } from "@/components/Animations/arrowDown";
import { TFunction } from "i18next";
import React from "react";

function Tamwilk({ t, homeData }: { t: TFunction; homeData: any }) {
  return (
    <div className="main-container w-full flex flex-col items-center lg:flex-row lg:w-[1152px] lg:h-[443.254px] relative mx-auto my-0">
      <div className="w-[500px] h-[460px] overflow-hidden z-[1] max-xs:h-[367px] bg-custom-gradient"  style={{
        backgroundImage: `url(${homeData?.data?.sections[6]?.Posts[0]?.attachment[0]?.original || "/assets/images/aboutapp/iPhone2.svg"})`
        }}></div>
      <div className="flex w-full lg:w-[564px] lg:h-[222px] flex-col gap-[24px] items-end flex-nowrap lg:absolute top-[126.254px] end-0 z-[47]">
        <div className="flex gap-[24px] items-center self-stretch shrink-0 flex-nowrap relative z-[48]">
          <span className="flex rtl:lg:w-[184px] bukra-semi-bold lg:h-[58px] items-start shrink-0 basis-auto text-[32px] font-semibold leading-[58px] text-[#5d9d9f] relative text-start whitespace-nowrap z-50">
            {homeData?.data?.sections[6]?.title}
          </span>
          <div className="w-[176px] h-[3px] shrink-0 bg-[url(/assets/images/eassyway/line.svg)] rotate-180 bg-cover bg-no-repeat rounded-[4px] relative z-[49]" />
        </div>
        <span className="flex lg:w-[564px] lg:h-[140px] items-start self-stretch shrink-0 text-[16px] font-medium leading-[35.2px] text-[#90bbbd] relative text-start z-50">
          {homeData?.data?.sections[6]?.Posts[0]?.description}
        </span>
      </div>
    </div>
  );
}

export default Tamwilk;
