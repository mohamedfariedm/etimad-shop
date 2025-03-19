import initTranslations from "@/app/i18n";
import React from "react";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";
import HomeAPI from "../../../api/api";

async function page({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ["privacy"]);
  const terms = await HomeAPI.getTerms(locale);


  return (
    <>
      <BreadCrumbComponent value={'privacy'} />
      <div className="main-container flex w-full xl:w-[1152px] flex-col gap-[96px] items-center flex-nowrap relative mx-auto my-0">
        <div className="flex w-full xl:w-[662px] flex-col gap-[64px] items-center shrink-0 flex-nowrap relative my-2">
          <div className="flex flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap relative z-[1]">
            <div className="flex flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[2]">
              <span className="flex justify-end items-start shrink-0 basis-auto bukra-semi-bold text-[32px] font-semibold leading-[58px] text-[#5d9d9f] relative text-right whitespace-nowrap z-[3]">
                {terms?.data?.sections[0]?.title}
              </span>
              <span className="flex w-full xl:w-[662px] xl:h-[96px] justify-center items-start self-stretch shrink-0 text-[16px] font-normal leading-[32px] text-[#5d9d9f] relative text-center z-[4]">
                {terms?.data?.sections[0]?.Posts[0]?.description}
              </span>
            </div>
          </div>
        </div>

        <div className="flex xl:w-[1152px] flex-col gap-[24px] items-start shrink-0 relative z-10 text-right">
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#5d9d9f]" dangerouslySetInnerHTML={{
              __html: terms?.data?.sections[0]?.Posts[1]?.description || "",
            }}>
          </p>
        </div>
      </div>
    </>
  );
}

export default page;
