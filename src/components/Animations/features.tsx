"use client";

import React, { useState, useEffect } from "react";
import { BreadCrumbComponent } from "@/components/Animations/breadCrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import Link from "next/link";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL; 

function Features() {
  const { t } = useTranslation("products");
  const params = useParams();
  const id = parseInt(params?.productID as string, 10); 
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [serviceData, setServiceData] = useState<any>(null);
  const [DataOfservice, getDataOfService] = useState<any>(null);
  useEffect(() => {
    if (!isNaN(id)) {
      setActiveButton(id); 

    }
  }, [id]);

  console.log(serviceData)
  console.log(DataOfservice)

useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const Language = typeof window !== "undefined" ? localStorage.getItem("language") || "ar" : "ar";
        const i18nextLng = typeof window !== "undefined" ? localStorage.getItem("i18nextLng") || "ar" : "ar";

        const response = await fetch(`${API_BASE_URL}front/service_page/${activeButton}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": Language || i18nextLng || "ar",
          },
        });

        const Serviceresponse = await fetch(`${API_BASE_URL}front/OurService`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": Language || i18nextLng || "ar",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const DataOfService = await Serviceresponse.json();
        setServiceData(data);
        getDataOfService(DataOfService);
      } catch (error) {
        setServiceData(null);
        console.error("Error fetching service data:", error);
      }
    };

    if (activeButton !== null) {
      fetchServiceData();
    }
  }, [activeButton]); 




  const images = [
    '/assets/images/singleProduct/avatar.svg',
    '/assets/images/singleProduct/avatar.svg',
    '/assets/images/singleProduct/avatar.svg',
    '/assets/images/singleProduct/avatar.svg',

  ];


  // Array of buttons with their labels and icons
  const buttons = [
    { id: 1,activeIcon:"/assets/images/singleProduct/6.svg", label: "buttons.beauty", icon: "/assets/images/products/component1.svg" },
    { id: 2,activeIcon:"/assets/images/singleProduct/5.svg", label: "buttons.recruitment", icon: "/assets/images/products/component6.svg" },
    { id: 3,activeIcon:"/assets/images/singleProduct/4.svg", label: "buttons.travel", icon: "/assets/images/products/component5.svg" },
    { id: 4,activeIcon:"/assets/images/singleProduct/3.svg", label: "buttons.salati", icon: "/assets/images/products/component4.svg" },
    { id: 5,activeIcon:"/assets/images/singleProduct/2.svg", label: "buttons.personal_finance", icon: "/assets/images/products/component3.svg" },
    { id: 6,activeIcon:"/assets/images/singleProduct/1.svg", label: "buttons.shabab_tuwaiq", icon: "/assets/images/products/component2.svg" },
  ];
  return (
    <>
      <BreadCrumbComponent value={'products'} />
      <div className="main-container xl:w-[1152px] xl:h-[954px] relative mx-auto my-0">



      <div className="flex xl:w-[1152px] gap-[24px] items-center justify-center flex-wrap xl:flex-nowrap relative mt-0 mr-0 mb-0 ml-0">
                {DataOfservice?.data?.map((button:any) => (
            <Link href={`/products/${button.id}`}
              key={button.id}
              className={`flex ${
                button.id === activeButton ? "bg-[#5d9d9f]" : "bg-[#f8fbfc]"
              } w-auto h-[64px] pt-[12px] px-[26px] pb-[12px] flex-col gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[16px] border-none relative pointer`}
              
            >
              <div className="flex gap-[8px] items-center shrink-0 flex-nowrap relative">
                <div
                  className="w-[40px] h-[40px] shrink-0 bg-cover bg-no-repeat relative overflow-hidden"
                  style={{ backgroundImage: `url(${button.id !== activeButton ? button.attachment[1]?.original : button.attachment[0]?.original})` }}
                />
                <span
                  className={`flex h-[24px] justify-center items-start shrink-0 basis-auto text-[16px] font-normal leading-[24px] relative text-center xl:whitespace-nowrap ${
                    button.id === activeButton ? "text-[#fff]" : "text-[#5d9d9f]"
                  }`}
                >
                  {t(button.name)}
                </span>
              </div>
            </Link>
          ))}

    </div>




        <div className="flex w-full xl:w-[1152px] flex-col gap-[24px] items-center justify-center xl:items-start flex-nowrap relative mt-[64px]">
          <div className="flex gap-[24px] items-center flex-col xl:flex-row self-stretch shrink-0 flex-nowrap relative">
          <div className="flex w-full xl:w-[564px] h-[568px]  flex-col gap-[8px] items-center shrink-0 flex-nowrap rounded-[24px] relative max-xs:p-5">
      <Swiper
        modules={[Pagination,Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        autoplay
        loop
        pagination={{
          clickable: true
        }}
        className="w-full h-full"
      >
        {serviceData?.data[0]?.sliders?.map((image:any, idx:any) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full bg-cover bg-no-repeat rounded-[24px]"
              style={{ backgroundImage: `url(${image?.original })` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>


    </div>
            <div className="flex w-full xl:w-[564px] p-[31px] flex-col gap-[24px] items-start shrink-0 flex-nowrap bg-[#f8fbfc] rounded-[24px] relative">
              {serviceData?.data[0]?.sections.slice(0,2).map((items:any)=>(
                  <div className="flex flex-col gap-[16px]  self-stretch shrink-0 flex-nowrap relative max-xs:w-[85%]" key={items.key}>
                  <div className="flex gap-[8px]  items-center self-stretch shrink-0 flex-nowrap relative">
                    <div className="w-[16px] h-[5px] shrink-0 bg-[#5d9d9f] rounded-[6px]" />
                    <span className="flex w-[132px] h-[29px]  items-start shrink-0 basis-auto text-[16px] font-semibold leading-[29px] text-[#5d9d9f] relative text-start xl:whitespace-nowrap">
                      {items?.title}
                    </span>
                  </div>

                  <div className="flex flex-col gap-[12px] justify-center  self-stretch shrink-0 flex-nowrap relative">
                      <div
                        className="flex gap-[12px]  items-center self-stretch shrink-0 flex-nowrap xl:w-[77%]"
                      >
                        <div className="w-[40px] h-[40px] shrink-0 bg-[url(/assets/images/singleProduct/right.svg)] bg-cover bg-no-repeat rounded-[999px] relative overflow-hidden" />
                        <div className="block w-full items-start shrink-0 basis-auto text-[16px] font-normal leading-[29px] text-[#5d9d9f] relative text-start" dangerouslySetInnerHTML={{
    __html: items?.Posts[0]?.description || "",
  }}>
                          
                        </div>
                      </div>
                  </div>
                </div>
              ))}
           
              {/* <div className="flex flex-col gap-[16px]  self-stretch shrink-0 flex-nowrap relative">
                <div className="flex gap-[8px]  items-center self-stretch shrink-0 flex-nowrap relative">
                  <div className="w-[16px] h-[5px] shrink-0 bg-[#5d9d9f] rounded-[6px]" />
                  <span className="flex w-[150px] h-[29px]  items-start shrink-0 basis-auto text-[16px] font-semibold leading-[29px] text-[#5d9d9f] relative text-start xl:whitespace-nowrap">
                    {t("product_details.conditions.title")}
                  </span>
                </div>
                <div className="flex flex-col gap-[12px] justify-center  self-stretch shrink-0 flex-nowrap relative">
                  {[
                    "product_details.conditions.list.first",
                    "product_details.conditions.list.second",
                    "product_details.conditions.list.third",
                    "product_details.conditions.list.fourth",
                    "product_details.conditions.list.fifth",
                  ].map((condition, idx) => (
                    <div
                      key={idx}
                      className="flex gap-[12px]  items-center self-stretch shrink-0 flex-nowrap"
                    >
                      <div className="w-[40px] h-[40px] shrink-0 bg-[url(/assets/images/singleProduct/right.svg)] bg-cover bg-no-repeat rounded-[999px] relative overflow-hidden" />
                      <span className="flex w-full xl:w-[380px] xl:h-[29px]  items-start shrink-0 basis-auto text-[16px] font-normal leading-[29px] text-[#5d9d9f] relative text-start xl:whitespace-nowrap">
                        {t(condition)}
                      </span>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>

          </div>
          <div className="flex flex-col gap-[32px] items-start self-stretch shrink-0 flex-nowrap relative max-xs:p-5">
            <div className="flex flex-col gap-[16px] justify-center  self-stretch shrink-0 flex-nowrap relative">
              <span className="flex w-[191px] h-[44px]  items-start shrink-0 basis-auto text-[24px] font-semibold leading-[43.68px] text-[#5d9d9f] relative text-start xl:whitespace-nowrap max-xs:w-full">
              {serviceData?.data[0]?.sections[0]?.Posts[0]?.title}
              </span>
              <span className="xl:h-[32px] self-stretch shrink-0 basis-auto text-[16px] font-normal leading-[32px] text-[#5d9d9f] relative text-start xl:whitespace-nowrap" dangerouslySetInnerHTML={{
    __html: serviceData?.data[0]?.sections[2]?.Posts[0]?.description || "",
  }}>
                              </span>
            </div>
            <div className="flex flex-col gap-[9px] items-start self-stretch shrink-0 flex-nowrap relative">
              <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative">
                <span className="flex w-[145px] h-[29px] justify-center items-start shrink-0 basis-auto text-[16px] font-medium leading-[29px] text-[#5d9d9f] relative text-center xl:whitespace-nowrap">
                {serviceData?.data[0]?.sections[2]?.Posts[0]?.title}
                                </span>
                <span className="flex w-[128px] h-[44px]  items-start shrink-0 basis-auto text-[24px] font-semibold leading-[43.68px] text-[#5d9d9f] relative text-start xl:whitespace-nowrap">
                {serviceData?.data[0]?.sections[2]?.Posts[0]?.value}
                {t("product_details.amount")}
                </span>
              </div>
              <Link href={serviceData?.data[0]?.slug||"#"} className="flex p-[14px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#5d9d9f] rounded-[16px] border-none relative pointer">
                <span className="flex w-[81px] h-[29px] justify-center items-start shrink-0 basis-auto text-[16px] font-medium leading-[29px] text-[#fff] relative text-center xl:whitespace-nowrap">
                  {t("product_details.apply_now")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;