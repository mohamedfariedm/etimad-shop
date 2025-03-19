import initTranslations from "@/app/i18n";
import React from "react";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";
import { Calculate} from "../(homepage)/_components";
import HomeAPI from "../../../api/api";

async function page({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ["calculate"]);
  const homeData = await HomeAPI.getHomeData(locale);

  return (
<>
<BreadCrumbComponent value={'calculate'}/>
<Calculate homeData={homeData}/>
</>
  );
}

export default page;
