import initTranslations from "@/app/i18n";
import React from "react";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";
import ContactForm from "./_components/ContactForm";
import LeftPart from "./_components/LeftPart";

async function page({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ["contactUs"]);

  return (
<>
<BreadCrumbComponent value={'contactUs'}/>
<div className="main-container flex flex-col xl:flex-row w-full  xl:w-[1148px] gap-[64px] justify-center items-start flex-nowrap relative mx-auto my-0">
<ContactForm/>
<LeftPart/>


  </div>
</>

  );
}

export default page;
