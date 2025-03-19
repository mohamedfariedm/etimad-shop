import HomeAPI from "@/app/api/api";
import initTranslations from "@/app/i18n";
import { BreadCrumbDynamicComponent } from "@/components/Animations/breadCrumbDynamic";
import Features from "@/components/Animations/features";

async function page({
  params: { locale, pageID },
}: {
  params: { locale: string; pageID: string };
}) {

console.log("id", pageID);
const Condition = await HomeAPI.getPageData(locale, pageID);
console.log("pageData",Condition.data);

  return (<>
      <BreadCrumbDynamicComponent value={Condition.data.name} />
      <div className="main-container flex w-full xl:w-[1152px] flex-col gap-[96px] items-center flex-nowrap relative mx-auto my-0">
        <div className="flex w-full xl:w-[662px] flex-col gap-[64px] items-center shrink-0 flex-nowrap relative">
          <div className="flex flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap relative z-[1]">
            <div className="flex flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[2]">
              <span className="flex justify-end items-start shrink-0 basis-auto bukra-semi-bold text-[32px] font-semibold leading-[58px] text-[#5d9d9f] relative text-right whitespace-nowrap z-[3]">
                {Condition.data.name}
              </span>
              <span className="flex w-full xl:w-[662px] xl:h-[96px] justify-center items-start self-stretch shrink-0 text-[16px] font-normal leading-[32px] text-[#5d9d9f] relative text-center z-[4]">
                {Condition.data.title}
              </span>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="flex xl:w-[1152px] flex-col gap-[24px] items-start shrink-0 relative z-10 text-right">
          
          {/* Acceptance of Terms */}
          <p className="text-[18px] flex font-normal leading-[32px] text-[#5d9d9f]" dangerouslySetInnerHTML={{
              __html:Condition?.data?.description || "",
            }}>
          </p>
         

        </div>
      </div>
  
  </>
      );
}

export default page;
