import initTranslations from "@/app/i18n";
import Container from "../Container";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import LanguageChanger from "../LanguageChanger";
import MenuItemsDesktop from "./MenuItemsDesktop";
import { Logo } from "@/components/Main";
import Link from "next/link";
import HomeAPI from "@/app/api/api";

async function Header({ locale }: { locale: string }) {

  const { t } = await initTranslations(locale, ["common"]);
  const menu = await HomeAPI.getMenu(locale ? locale : "ar");
  console.log("menu", menu.data);

  // Define static menu items
  const staticMenuItems = [
    { key: "home", href: `${locale === "ar" ? `/` : `/en`}`, width: "58px" },
    { key: "products", href: `${locale === "ar" ? `/products` : `/en/products`}`, width: "55px" },
    { key: "about_us", href: `${locale === "ar" ? `/about-us` : `/en/about-us`}`, width: "44px" },
    { key: "calculate_finance", href: `${locale === "ar" ? `/calculate` : `/en/calculate`}`, width: "87px" },
    { key: "contact_us", href: `${locale === "ar" ? `/contact-us` : `/en/contact-us`}`, width: "69px" },
  ];

  // Convert fetched menu data to the required format
  const dynamicMenuItems = menu?.data
  ?.filter((item: any) => item.active !== 0) // Exclude inactive items
  .map((item: any) => ({
    key: `custom_${item.id}`, // Ensuring a unique key
    href: `${locale === "ar" ? `/${item.link}` : `/en/${item.link}`}`,
    width: "auto", // Allow dynamic width
    name: item.name, // Keep the name for display
  })) || [];

  // Merge static and dynamic items
  const menuItems = [...staticMenuItems, ...dynamicMenuItems];
  return (
    <header className="w-full h-20  backdrop-blur-[19.20px] absolute top-0 z-50">
      <Container className="   xl:w-[1152px] h-[55px]  mx-auto mt-[33px]">
        <nav className="w-full flex relative  justify-between flex-row-reverse items-center h-full">
          <Logo/>
<MenuItemsDesktop t={t} locale={locale} menuItems={menuItems}/>

<div dir="ltr" className="flex   md:w-[40px] md:hover:w-[120px] transition-all duration-1000 h-[38px] pt-[8px] pr-[10px] pb-[8px] pl-[10px] gap-[8px] items-center flex-nowrap bg-[rgba(231,240,241,0.2)] rounded-[8px] absolute top-[9px] start-[100px] sm:start-[115px] overflow-hidden z-[11]">
  <Link href="/contact-us"  className="flex   xl:w-[69px] h-[22px] justify-end items-start shrink-0 basis-auto ltr:text-[12px]  rtl:text-[14px] font-normal leading-[22px] text-[#5d9d9f] absolute top-[8px] left-[41px] text-start whitespace-nowrap z-[13]">
    {t("menu.contact_us")}
  </Link>
  <div className=" w-[20px] h-[20px] shrink-0 bg-[url('/assets/images/customer-support.svg')] bg-cover bg-no-repeat relative z-[12]" />
</div>
<LanguageChanger />
 {/* Mobile Navigation Menu */}
 <MobileMenu locale={locale} menuItems={menuItems} />


        </nav>
      </Container>
    </header>
  );
}

export default Header;
