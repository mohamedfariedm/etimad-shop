import React from "react";
import { FaXTwitter, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa6";
import initTranslations from "@/app/i18n";
import Link from "next/link";
import HomeAPI from "../../app/api/api";


async function Footer({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["common"]);
  const getDataSetting = await HomeAPI.getSetting(locale);
console.log("getDataSetting",getDataSetting)
  const socialIcons = [
    { url: getDataSetting?.data[0]?.setting?.social?.instgram || "", icon: "/assets/images/socialicons/instagram.svg" },
    { url: getDataSetting?.data[0]?.setting?.social?.linked_in || "", icon: "/assets/images/socialicons/linkedin.svg" },
    { url: getDataSetting?.data[0]?.setting?.social?.twetter || "", icon: "/assets/images/socialicons/new-twitter.svg" },
    { url: getDataSetting?.data[0]?.setting?.social?.snapchat || "", icon: "/assets/images/socialicons/snapchat.svg" },
    { url: getDataSetting?.data[0]?.setting?.social?.whatsapp || "", icon: "/assets/images/socialicons/whatsapp.svg" },
    ];

  const links = [
    { title: t("footer.complaints"), url: "/complaints" },
    { title: t("footer.contact_us"), url: "/contact-us" },
    { title: t("footer.faq"), url: "/faq" },
    { title: t("footer.products"), url: "/products" },
    { title: t("footer.about_us"), url: "/about-us" },
    { title: t("footer.calculate"), url: "/calculate" },
  ].reverse(); 

  const policyLinks = [
    { title: t("footer.privacy_policy"), url: "/privacy-policy" },
    { title: t("footer.terms_of_use"), url: "/terms-of-use" },
  ];

  return (
    <div className="bg-[#3d898d] w-full relative mt-[350px]">
<div
className="main-container w-[1152px] h-[350px] bg-[url(/assets/images/footertrack.svg)] bg-contain bg-no-repeat overflow-hidden -top-[286px] my-0 z-[1] absolute left-1/2 transform -translate-x-1/2" />

      <div className="main-container flex w-full lg:w-[1440px] pt-[64px] px-5 lg:px-[144px] pb-[40px] flex-col gap-[48px] items-center relative z-10 mx-auto">
        <div className="flex gap-[32px] justify-center lg:justify-start items-center self-stretch relative">
          <div className="flex flex-col lg:flex-row gap-[24px] items-center relative">
            <div className="w-[129px] h-[55px] bg-[url(/assets/images/framefooter.svg)] bg-cover bg-no-repeat" />
            <div className="w-[167.658px] h-[54.848px] bg-[url(/assets/images/surfacefooter.svg)] bg-[length:100%_100%] bg-no-repeat" />
            <span className="flex w-full lg:w-[375px] lg:h-[44px] text-[12px] text-[#fff] leading-[21.84px]">
{t("footer.supervised_by")}
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col lg:flex-row lg:w-[1152px] justify-between items-start relative">
          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[12px]">
                <span className="text-[24px] text-[#fff] font-semibold leading-[33.6px]">
                {t("footer.newsletter")}
                </span>
                <span className="text-[14px] text-[#fff] leading-[21px]">
                {t("footer.newsletter_description")}
                </span>
              </div>
              <div className="flex flex-col lg:flex-row gap-[8px]">
                <input
                  className=" w-full lg:w-[343px] h-[45px] bg-transparent outline-none placeholder:text-[#fff] rounded-[12px] border border-[#f8fbfc] p-[16px] text-[#fff]"
                  placeholder={t("footer.enter_email")}
                />
                <button className="w-[99px] h-[45px] bg-[#fff] text-[#667680] rounded-[12px] shadow-md">
                {t("footer.subscribe_now")}
                </button>
              </div>
            </div>
            <div className="flex gap-[16px]  my-5 lg:my-0">
  {socialIcons.map((iconData, index) => (
    <a
      key={index}
      href={iconData.url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[20px] h-[20px]"
    >
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${iconData.icon})` }}
      />
    </a>
  ))}
</div>

          </div>

          <div className="flex flex-col gap-[56px]">
            <div className="flex flex-col gap-[16px]">
              <span className="text-[16px] text-[#fff] font-semibold leading-[22px]">
              {t("footer.have_questions")}
              </span>
              <div className="flex flex-col sm:flex-row gap-[56px]">
                <div className="flex gap-[16px] items-center">
                  <div
                  className="w-[32px] h-[32px] bg-[url(/assets/images/socialicons/call.svg)] bg-cover" />
                  <div className="flex flex-col gap-2">
                    <span className="text-[12px] text-[#fff] leading-[18px]">
                    {t("footer.call_us")}
                    </span>
                    <span dir="ltr" className="text-[14px] text-[#fff] font-medium">
  {getDataSetting?.data[0]?.setting?.company_information?.phone?.value
    ?.split(",") // Split by comma
    .map((phone: string, index: number) => (
      <a
        key={index}
        href={`tel:${phone.trim()}`} // Call action on click
        className="block text-white hover:underline"
      >
        {phone.trim()}
      </a>
    ))}
</span>
                  </div>
                </div>
                <div className="flex gap-[16px] items-center">
                  <div className="w-[32px] h-[32px] bg-[url(/assets/images/socialicons/mail.svg)] bg-cover" />
                  <div className="flex flex-col gap-2">
                    <span className="text-[12px] text-[#fff] leading-[18px]">
                    {t("footer.email_us")}
                    </span>
                    <span className="text-[14px] text-[#fff] font-medium">
  {getDataSetting?.data[0]?.setting?.company_information?.email?.value
    ?.split(",") // Split by comma
    .map((email: string, index: number) => (
      <a
        key={index}
        href={`mailto:${email.trim()}`} // Email action on click
        className="block text-white hover:underline"
      >
        {email.trim()}
      </a>
    ))}
</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
      <span className="text-[16px] text-[#fff] font-semibold leading-[22px]">
      {t("footer.site_links")}
      </span>
      <div className="flex w-full gap-[16px] flex-wrap">
        {links.map((link, index) => (
          <Link key={index} href={link.url} className="text-[14px] text-[#fff] leading-[21px] hover:underline">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
          </div>
        </div>

        <div className="flex w-full flex-col lg:flex-row lg:w-[1152px] justify-between items-center border-t border-[#5d9d9f] pt-[40px]">
        <div className="flex gap-[32px]">
      {policyLinks.map((link, index) => (
        <Link key={index} href={link.url} className="text-[14px] text-[#fff] leading-[21px] hover:underline">
          {link.title}
        </Link>
      ))}
    </div>
          <span className="text-[14px] text-[#fff] leading-[21px]">
          {t("footer.copyright")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
