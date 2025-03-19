import initTranslations from "@/app/i18n";
import { BlogCard } from "@/components/Cards";
import { Container } from "@/components/Layout";
import {
  BlogList,
  Heading,
  Pagination,
  PreHeading,
  StartFreeTrial,
  SubHeading,
} from "@/components/Main";
import { Separator } from "@/components/ui/separator";
import BlogFilters from "./_components/BlogFilters";
import { getAllBlogs } from "@/app/api/apiClient/apiClient";
import { Products } from "../(homepage)/_components";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";
import HomeAPI from "../../../api/api";

type props = {
  params: { locale: string };
  searchParams: {
    page: string | undefined;
    tag: string | undefined;
    sort: string | undefined;
  };
};

async function page({
  params: { locale },
  searchParams: { page, tag, sort },
}: props) {
  // const currentPage = Number(page || 1);
  // const limit = Number(process.env.NEXT_PUBLIC_PAGINATION_LIMIT || 9);
  // const lang = locale; // Assuming the locale is the desired language

  // const { blogs, meta } = await getAllBlogs({
  //   page:currentPage,
  //   type:tag,
  //   limit,
  //   lang
  // }
  // );
  // const totalPages = meta.lastPage;
  // console.log(blogs);
  

  const { t } = await initTranslations(locale, ["homepage"]);
  const ServiceData = await HomeAPI.getServiceData(locale);
  const homeData = await HomeAPI.getHomeData(locale);

  return (<>
  
  <BreadCrumbComponent value={
    'homepage'
  }/>
  
  <Products t={t} ServiceData={ServiceData} homeData={homeData?.data?.sections[1]?.title}/>
  
  </>
  );
}

export default page;
