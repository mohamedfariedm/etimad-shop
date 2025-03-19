import initTranslations from "@/app/i18n";
import React from "react";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";
import { Faq } from "../(homepage)/_components";
import HomeAPI from "../../../api/api";

async function page({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ["faq"]);
  const homeData = await HomeAPI.getHomeData(locale);
  const FaqeData = await HomeAPI.getFaqPgaesData(locale);

  return (
<>
<BreadCrumbComponent value={'faq'}/>
<Faq homeData={homeData} FaqeData={FaqeData}/>
</>
  );
}

export default page;
