import { Heading, PreHeading, SubHeading } from "@/components/Main";
import { BlogListSkeleton } from "@/components/Skeletons";
import { Button } from "@/components/ui/button";
import { TFunction } from "i18next";
import dynamic from "next/dynamic";
import Link from "next/link";
const BogsSection = dynamic(() => import("./BogsSection"), {
  loading: () => <BlogListSkeleton />,
});
function Blogs({ locale,t }: { locale:any,t: TFunction }) {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="w-full flex justify-between items-start mb-12 md:mb-16 gap-5">
        <div className="w-full lg:w-4/6  ">
          <PreHeading className="text-start">
            {t("Blogs.PreHeading")}
          </PreHeading>
          <Heading className="mt-3 mb-5 text-start">
            {t("Blogs.Heading")}
          </Heading>
          <SubHeading className="text-start">
            {t("Blogs.SubHeading")}
          </SubHeading>
        </div>
        <Button asChild className="h-12 hidden lg:-flex">
          <Link href="/blog">{t("Blogs.cta")}</Link>
        </Button>
      </div>

      <BogsSection locale={locale} />
      <Button
        asChild
        className="h-12 flex  lg:hidden w-full max-w-[450px] mx-auto mt-12"
      >
        <Link href="/blog">{t("Blogs.cta")}</Link>
      </Button>
    </section>
  );
}

export default Blogs;
