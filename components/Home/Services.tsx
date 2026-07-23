"use client";

import Link from "next/link";
import Image from "next/image";
import { getCmsVal } from "@/lib/api-helper";

interface ServicesProps {
  cms?: any;
}

export default function Services({ cms }: ServicesProps) {
  const t = (val: string) => getCmsVal(cms, val);

  // Services array items mapped exactly as requested
  const services = [
    {
      title: t("AC Service"),
      description: t("From AED 99"),
      slug: "ac-work",
      icon: "ac_unit",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLiQsbcp9CIvalj5HlgjAve6IxUGPSM4J-rGQq130UOkUMQG3RJJCQ2VxXErbDVyZwlWwoozwli_5Mv_hiHzR9zCo-40P8adNutOjMh5UhTfpRgW6pQ4W_MPc5Oz_F5Q6dBk4Vx6FHUikwhJpMBY0uG8hPWprKrjWOPxqsmVNqoIkbd9076ARuMQDzyUF4uTjIqE1SdWHtss1QEihvuapg3LfDvz_4hZPH2R2gu1DvRx1xbdRqnmlIckfa_SmVFDLyVLHVKqK7qm8"
    },
    {
      title: t("Plumbing"),
      description: t("From AED 99"),
      slug: "plumbing-work",
      icon: "plumbing",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCelodmM1FwEyBLvvhwDxzmyF0fjretE3ZQEgmJJXMAdjPt014WY6Q8ywRyMelt9kaxzIbiLWsxzDMOWu7lOXUKBk4lml5zPmiUWxCz4No6C1Aqw-PsOOO77IXgDOHYTGBNmzBrPLJZXZ0nthZSBAZJrvSY9KgyiS76qNShEwYwI2bzWSv-XJtVq3S5LRyPRhGqS5J5uB60OKFrii9Mj3P1PoTKCMoObud-YcYw7jx968ppGjstF6V57LDLPPyK_NAY9kk3GA7YMFc"
    },
    {
      title: t("Electrical"),
      description: t("From AED 79"),
      slug: "electrical-work",
      icon: "bolt",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSlvPWqj6GwG_HDpZ-1FpLBOTxqrXSg0ZrxjGIQ_xrI5U5t-_F2xypsIE1pRIwElOsKFbtznu6nIyKpoyatolCBH647dyin6c276A2dhCmAYv9XcT3CuskjEdebghFo3C13iAVcad96KasFxwX-zzCTtoSNihcOsieoz4oRyDuTYvhwa6WdSLucXYjM9KfKOQfmv5djkHwa-3rogyX-T-daUFO_xpHrDFuWYzKZBDujfmmWcXjxfQBsArChDtwzpdGtuDkx0gHRIQ"
    },
    {
      title: t("Cleaning"),
      description: t("From AED 69"),
      slug: "cleaning-services",
      icon: "cleaning_services",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxMe7jrQ724cQDSBLEud4BB2TXELkybXintcYXLIbwX0XO024vmw0CddVrcD8FugSgQEcxkbapQuWQ1GM4rEtx5Y9AacfiGSEM78x-_jBEEuPKKGRgfNqSvQBGks2mlsgE8bbsxyysTGve1pecJTIUstg2Gt06sLxq_zmZ9xMFwoPtsyka4HvZNVRVNYvvgpw7AWxRgQbC9ytW8uxHFsZlVKAXVtg1VcX0Y634FNjtt8wPVoFizwHe8VtMgmrFgtBWBe1sw8gsbkY"
    },
    {
      title: t("Painting"),
      description: t("From AED 99"),
      slug: "painting-work",
      icon: "format_paint",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCp6egzR5S8BkS7u8LFO_7c-SpKjdIXd2W-Y74LY9POQswK-A6f5uhpq4qeOAMMeH4WF879c1FzvULU_nsTQeZ1I3pviesdJRIaNM98b0_FGvnjI8WeQrMhAZHKi2GFTvW78OUp6UzIh2AZaJ1TgnuwEXLRlgpOC79jo6WJ4693s2zCoo1IdtQ8KlWmEV6QLFfPhmeIMi_D8DCLtYdAp64b2loUw3z4hXysFDdbXxQAKf45CjY9GE3yTGSw3g2--KGNv3nQP2Wtij8"
    },
    {
      title: t("Carpentry"),
      description: t("From AED 89"),
      slug: "carpentry-work",
      icon: "carpenter",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0cVxb5Oz_TS11CxMHOwRHmzQKo-ohe9aFNtqXyPFce7uqeYU_22ageudQeqsOHunq1vQTnh63LLmnQf4SAvEWvqup4X29FLzTRC15soiHC0eNkNco9WB5KnyJ4KDREgEIh20lTjGlAKjhN5ByB1xgpuzc4bYnF-9s0XZn7HP2-gph690HMgDkAWGIJk-XyeWYsCM1r1VFCi13JBqoLWzUbZ_Rs87QnqTl6bCYUTDg-yy_lCyLi5LmjwOqLcLmio5PG4R20vaRugo"
    },
    {
      title: t("Interior Design"),
      description: t("From AED 99"),
      slug: "interior-design",
      icon: "chair",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&q=80"
    },
    {
      title: t("Handyman"),
      description: t("From AED 69"),
      slug: "handyman-services",
      icon: "handyman",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_Nd5YYCtNSw55zMXdXtZIcfKfzAGuh_CuLbinLS0J8Ou446Zz5jcWvlphahq2c_jk8EaIt8m6_TkWY-HXNWSBeUNnXIq2pFITAvT-oGRMD5L0ESICpgwFiiRuAdMCDFGjtZWWr4LcuefZZfMwqts0-rTG6LiO_s40Xynr49Axkcky0YrbpB0cdIm3siS2h4QGej7R_KtlJgBeudqzxRFMIFrk29gjIiPg_SI9-YyN2qpcOQ-PiCT-8C1vdZ-RDdeNIgi-3a5pxuU"
    }
  ];

  return (
    <section className="py-20" id="services">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">

        {/* Header matching provided code */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-black mb-2 tracking-tight">
              {t("Popular Services")}
            </h2>
            <p className="text-base md:text-lg text-slate-500 font-medium">
              {t("Expert solutions for every corner of your home.")}
            </p>
          </div>
          <Link
            href="/services"
            className="group flex items-center gap-2 font-bold text-[#E46704] hover:text-[#c45600] transition-colors mt-4 md:mt-0"
          >
            {t("View All Services")}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        {/* Services Grid mapping */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group cursor-pointer block">
              <div className="aspect-square bg-slate-50 rounded-3xl mb-4 flex items-center justify-center border border-slate-200 group-hover:border-[#E46704] transition-all duration-300 group-hover:shadow-2xl group-hover:animate-bounce relative overflow-hidden">
                <Image
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 12vw"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={service.title}
                  src={service.image}
                />
                <span className="material-symbols-outlined text-4xl text-black group-hover:text-white relative z-10 transition-all">
                  {service.icon}
                </span>
              </div>
              <p className="font-bold text-black text-sm text-center group-hover:text-[#E46704] transition-colors">{service.title}</p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
