import initTranslations from "@/app/i18n";
import React from "react";
import MissionAndVision from "./_components/MissionAndVision";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";
import HomeAPI from "../../../api/api";

async function page({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ["aboutUs"]);
  const aboutData = await HomeAPI.getAboutUsData(locale);
  console.log("aboutData",aboutData)

  return (
<>
<BreadCrumbComponent value={'aboutUs'} />
<MissionAndVision t={t} aboutData={aboutData}/>
</>
  );
}

export default page;
