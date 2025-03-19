import initTranslations from "@/app/i18n";
import { Container } from "@/components/Layout";
import React from "react";
import { Features } from "@/components/Shared";
import { StartFreeTrial } from "@/components/Main";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";
import ComplaintsForm from "./_components/ComplaintsForm";

async function Complaints
({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ["complaints"]);

  return (
    <>
  <BreadCrumbComponent value={"complaints"}/>
    
    <div className="main-container flex w-full xl:w-[1148px] flex-col gap-[64px] items-center flex-nowrap relative mx-auto my-0">
      <div className="flex w-full xl:w-[790px] flex-col gap-[16px] items-center shrink-0 flex-nowrap relative">
        <span className="flex w-full xl:w-[790px] xl:h-[58px] justify-center items-start shrink-0 basis-auto  text-[32px] font-semibold leading-[57.6px] text-[#5d9d9f] relative text-center xl:whitespace-nowrap z-[1]">
        {t("title")}

        </span>
        <span className="flex w-full xl:w-[602px] xl:h-[70px] justify-center items-start shrink-0  text-[16px] font-medium leading-[35.2px] text-[#90bbbd] relative text-center z-[2]">
{t("description")}
        </span>
      </div>
      <ComplaintsForm/>
    </div>
    </>

  );
}

export default Complaints
;
