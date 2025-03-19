import initTranslations from "@/app/i18n";
import {
  AboutApp,
  Calculate,
  Certifications,
  EasyWay,
  Faq,
  Hero,
  Numbers,
  Products,
  Tamwilk,
} from "./_components";
import HomeAPI from "../../../api/api";

const Home = async ({ params: { locale } }: { params: { locale: string } }) => {

  const { t } = await initTranslations(locale, ["homepage"]);

  
  const homeData = await HomeAPI.getHomeData(locale);
  const ServiceData = await HomeAPI.getServiceData(locale);
  const FaqeData = await HomeAPI.getFaqData(locale);
  const SettingData = await HomeAPI.getSetting(locale);

  // const newsData = await HomeAPI.getNewsData();



  return (
    <section className="">
      <Hero  homeData={homeData} SettingData={SettingData}/>
      <div className="flex flex-col gap-[136px] my-[136px] px-5 sm:px-0">
      <EasyWay t={t} homeData={homeData}/>
      <Products t={t} ServiceData={ServiceData} homeData={homeData?.data?.sections[1]?.title}/>
      <Calculate homeData={homeData}/>
      <AboutApp t={t} homeData={homeData}/>
      <Faq homeData={homeData} FaqeData={FaqeData}/>
      <Numbers t={t} homeData={homeData}/>
      <Tamwilk t={t} homeData={homeData}/>
      <Certifications t={t} homeData={homeData}/>
      </div>
    </section>
  );
};

export default Home;
