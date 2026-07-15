"use client";

import { getCmsVal } from "@/lib/api-helper";

interface ProjectsProps {
  cms?: any;
}

export default function Projects({ cms }: ProjectsProps) {
  const t = (val: string) => getCmsVal(cms, val);

  return (
    <section className="py-24 bg-[#0d1b2a] text-white overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            {t("Project Excellence")}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium">
            {t("Take a look at our recent high-end transformations across the UAE's most prestigious communities.")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative rounded-[2rem] overflow-hidden group h-[400px] sm:h-[500px]">
            <img 
              alt={t("Villa Renovation")} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp6egzR5S8BkS7u8LFO_7c-SpKjdIXd2W-Y74LY9POQswK-A6f5uhpq4qeOAMMeH4WF879c1FzvULU_nsTQeZ1I3pviesdJRIaNM98b0_FGvnjI8WeQrMhAZHKi2GFTvW78OUp6UzIh2AZaJ1TgnuwEXLRlgpOC79jo6WJ4693s2zCoo1IdtQ8KlWmEV6QLFfPhmeIMi_D8DCLtYdAp64b2loUw3z4hXysFDdbXxQAKf45CjY9GE3yTGSw3g2--KGNv3nQP2Wtij8"
            />
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <p className="text-[#E46704] font-bold text-sm uppercase tracking-widest mb-2">
                {t("Villa Renovation • Emirates Hills")}
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight text-white">
                {t("Full Interior Painting & Lighting")}
              </h3>
            </div>
            <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider border border-white/10 shadow-sm">
              {t("Premium Finish")}
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden h-56 relative group">
                <img 
                  alt={t("AC Project")} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLiQsbcp9CIvalj5HlgjAve6IxUGPSM4J-rGQq130UOkUMQG3RJJCQ2VxXErbDVyZwlWwoozwli_5Mv_hiHzR9zCo-40P8adNutOjMh5UhTfpRgW6pQ4W_MPc5Oz_F5Q6dBk4Vx6FHUikwhJpMBY0uG8hPWprKrjWOPxqsmVNqoIkbd9076ARuMQDzyUF4uTjIqE1SdWHtss1QEihvuapg3LfDvz_4hZPH2R2gu1DvRx1xbdRqnmlIckfa_SmVFDLyVLHVKqK7qm8"
                />
                {/* Removed overlay to show pure image color */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs font-bold bg-white/20 text-white backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg shadow-sm">
                    {t("AC Overhaul")}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden h-56 relative group">
                <img 
                  alt={t("Plumbing Project")} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCelodmM1FwEyBLvvhwDxzmyF0fjretE3ZQEgmJJXMAdjPt014WY6Q8ywRyMelt9kaxzIbiLWsxzDMOWu7lOXUKBk4lml5zPmiUWxCz4No6C1Aqw-PsOOO77IXgDOHYTGBNmzBrPLJZXZ0nthZSBAZJrvSY9KgyiS76qNShEwYwI2bzWSv-XJtVq3S5LRyPRhGqS5J5uB60OKFrii9Mj3P1PoTKCMoObud-YcYw7jx968ppGjstF6V57LDLPPyK_NAY9kk3GA7YMFc"
                />
                {/* Removed overlay to show pure image color */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs font-bold bg-white/20 text-white backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg shadow-sm">
                    {t("Kitchen Plumbing")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg p-8 sm:p-10 rounded-[2rem] border border-white/10 shadow-2xl">
              <h4 className="text-2xl font-bold mb-4">
                {t("Results that speak for themselves")}
              </h4>
              <p className="text-white/60 mb-8 leading-relaxed font-medium">
                {t("Our project team handles everything from minor repairs to major aesthetic transformations, ensuring every detail meets the \"OsumFix Standard\".")}
              </p>
              <button className="px-8 py-4 bg-[#E46704] text-white font-extrabold rounded-xl  transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                {t("View Project Gallery")}
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
