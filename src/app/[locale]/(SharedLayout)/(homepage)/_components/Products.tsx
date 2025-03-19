import { Arrow } from "@/components/Animations/arrowDown";
import { TFunction } from "i18next";
import Link from "next/link";
import React from "react";

function Products({ ServiceData, t,homeData  }: { ServiceData: any ;t: TFunction;homeData:any  }) {
console.log("ServiceData",ServiceData.data[0]?.attachment.original)
  return (
    <div className="main-container w-full flex xl:w-[1152px] flex-col gap-[128px] items-start flex-nowrap relative mx-auto my-0">
      <div className="flex gap-[24px] justify-center items-center self-stretch shrink-0 flex-nowrap relative">
        <div
          className="w-[176px] h-[3px] shrink-0 bg-cover bg-no-repeat rounded-[4px] relative z-[1]"
          style={{ backgroundImage: "url(/assets/images/eassyway/line.svg)" }}
        />
        <span className="flex bukra-semi-bold rtl:w-[227px] h-[58px] justify-center items-start shrink-0 basis-auto text-[32px] font-semibold leading-[57.6px] text-[#5d9d9f] relative text-center whitespace-nowrap z-[2]">
          {homeData}
        </span>
        <div
          className="w-[176px] h-[3px] shrink-0 bg-cover bg-no-repeat rounded-[4px] relative z-[3]"
          style={{ backgroundImage: "url(/assets/images/eassyway/line.svg)", rotate: "180deg" }}
        />
      </div>
      <div className="flex gap-x-[24px] gap-y-[104px] items-center justify-center xl:items-start self-stretch shrink-0 flex-wrap relative z-[4]">
        {ServiceData?.data?.map((product:any) => (
          <Link key={product.id} href={`/products/${product.id}`} passHref>
            <div className="flex w-[368px] pt-[64px] group pr-[24px] pb-[16px] pl-[24px] flex-col gap-[16px] items-center flex-nowrap bg-[#f8fbfc] rounded-[24px] relative cursor-pointer transition-transform hover:scale-105">
              
              {/* Icon with hover effect */}
              <div
                className="flex w-[96px] h-[96px] pt-[16px] bg-[url(/assets/images/products/after.svg)] group-hover:bg-[url(/assets/images/products/before.svg)] transition-all
                duration-300 pr-[16px] pb-[16px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[24px] absolute top-[-48px] left-1/2 translate-x-[-50%]"
              >
                <div
                  className="w-[64px] h-[64px] shrink-0 bg-cover bg-no-repeat relative overflow-hidden"
                  style={{ backgroundImage: `url(${product?.attachment?.original || product?.attachment[0]?.original})` }}
                />
              </div>

              {/* Title and Description */}
              <div className="flex pt-[16px] pr-0 pb-[16px] pl-0 flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative">
                <span className="h-[30px] self-stretch shrink-0 text-[20px] font-semibold leading-[30px] bg-gradient-to-bl from-[#5D9D9F] to-[#3EDADF] bg-clip-text text-transparent text-center whitespace-nowrap">
                  {product?.name}
                </span>
                <span className="flex w-[320px] h-[64px] justify-center items-start text-[16px] font-normal leading-[32px] text-[#5d9d9f] text-center">
                  {product?.description}
                </span>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
