"use client";

import { TestimonialCard } from "@/components/Cards";
import { Heading } from "@/components/Main";
import { testimonials } from "@/constants/temp";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { A11y, Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Testimonials({ heading }: { heading: string }) {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="w-full lg:w-4/6 mx-auto ">
        <Heading className=" mb-8 ">{heading}</Heading>
      </div>
      <div className="w-full">
        <Swiper
          modules={[A11y, EffectFade, Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          grabCursor={true}
          className="hero__slider max-w-lg mx-auto "
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx global>{`
          .hero__slider {
            --swiper-pagination-color: var(--fg-brand-primary_alt);
            --swiper-pagination-bullet-size: 10px;
            --swiper-pagination-bullet-inactive-color: var(--bg-quaternary);
            --swiper-pagination-bullet-inactive-opacity: 1;
            --swiper-pagination-bullet-horizontal-gap: 16px;
            --swiper-pagination-bottom: 0px;
          }
        `}</style>
      </div>
    </section>
  );
}

export default Testimonials;
