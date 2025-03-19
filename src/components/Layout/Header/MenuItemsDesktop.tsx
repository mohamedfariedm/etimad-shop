import HomeAPI from "@/app/api/api";
import { NavLink } from "@/components/Main";
import { cn } from "@/lib/utils";
import { TFunction } from "i18next";

export default async function MenuItemsDesktop({
  t,
  className,
  locale,
  menuItems
}: {
  t: TFunction;
  className?: string;
  locale?: string;
  menuItems: any[];
}) {
  

  return (
    <div
      className={cn(
        "hidden md:flex flex-wrap gap-[16px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] items-center justify-center bg-[rgba(231,240,241,0.2)] rounded-[16px] border-none absolute top-[3px] left-1/2 translate-x-[-50%] pointer",
        className
      )}
    >
      {menuItems.map((item, index) => (
        <NavLink
          key={index}
          href={item.href}
          className={cn("flex items-center justify-center shrink-0 ltr:text-[12px] rtl:text-[14px] font-normal relative")}
          style={{ height: "25px" }}
        >
          {item.key.startsWith("custom_") ? item.name : t(`menu.${item.key}`)}
        </NavLink>
      ))}
    </div>
  );
}
