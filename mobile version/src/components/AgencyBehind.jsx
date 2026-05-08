import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clientLogos = [
  {
    type: "img",
    alt: "Red Bull",
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/red-bull-logo-black.png?w=1200&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1754645714&s=c061c13019bb1d451a955b05760ed64a",
  },
  {
    type: "img",
    alt: "Untitled design",
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/Untitled-design.png?w=1200&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1752040111&s=df024c0353d5509e8d289a9a9333a57d",
  },
  {
    type: "img",
    alt: "Logo 01J76SW3",
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/01J76SW385WN4X1CBJWJV7QSAP.png?w=400&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=cf563c922200541f4e285cd2aae59e65",
  },
  {
    type: "img",
    alt: "SN",
    src: "https://rise-atseven.transforms.svdcdn.com/production/images/SN.webp?w=400&q=80&auto=format&fit=crop&crop=focalpoint&fp-x=0.5338&fp-y=0.5169&dm=1777373493&s=51485f524412c800c6318b3dd5375763",
  },
  {
    type: "text",
    label: "Pooky",
  },
  {
    type: "text",
    label: "Hbomax",
  },
  {
    type: "text",
    label: "BuyBoxer",
  },
  {
    type: "text",
    label: "JD Sports",
  },
  {
    type: "text",
    label: "Emirates",
  },
  {
    type: "text",
    label: "PrettyLittleThing",
  },
  {
    type: "text",
    label: "Lloyds Pharmacy",
  },
  {
    type: "text",
    label: "Magnet Trade",
  },
  {
    type: "text",
    label: "Revolution Beauty",
  },
  {
    type: "text",
    label: "Parkdean Resorts",
  },
];

export default function AgencyBehind() {
  return (
    <section className="w-full pt-6">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 w-full gap-y-3">
          <div className="flex items-center">
            <h2 className="inline-flex flex-wrap text-left text-grey-900 text-sm font-sans-primary font-medium tracking-tight max-w-32">
              The agency behind ...
            </h2>
          </div>

          <div className="relative w-full">
            <div className="w-full relative overflow-hidden marquee-mask">
              <Swiper
                slidesPerView={3}
                spaceBetween={16}
                loop
                speed={6000}
                allowTouchMove={false}
                modules={[Autoplay]}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 4 },
                }}
                className="!ease-linear"
              >
                {clientLogos.map((logo, index) => (
                  <SwiperSlide key={`${logo.alt || logo.label}-${index}`}>
                    <div className="w-20 py-5 relative">
                      <div className="aspect-[20/9] w-full h-full relative flex items-center justify-center">
                        {logo.type === "img" ? (
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            loading="lazy"
                            className="w-full h-full object-contain absolute inset-0"
                          />
                        ) : (
                          <span className="text-grey-900 text-base font-sans-primary font-medium tracking-tight whitespace-nowrap">
                            {logo.label}
                          </span>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
