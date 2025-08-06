import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Static = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug sm:leading-relaxed md:leading-snug text-gray-800 mb-6">
              {t('bidyutFocuses')} {" "}
              <span className="text-emerald-400">{t('educatingStudents')} </span>
              <br className="hidden sm:block" />
              {t('actWithIntegrity')}
              <br className="hidden sm:block " />
              <span className="text-emerald-400 "> {t('digitalWorld')}</span>
            </h1>
            </div>
            <p className="text-[#0A254070] text-base sm:text-lg max-w-6xl mx-auto leading-relaxed">
              {t('aboutDescription')}
            </p>
          </div>

          {/* Mission and Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Our Mission */}
            <div className="space-y-8 flex flex-col items-center md:items-start">
              <div className="relative w-full sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[520px]">
                <img
                  src="https://i.ibb.co/Xf74d2Xs/0ae07f15c7144df71a52f94be159ea2311903644.png"
                  alt="Our Mission"
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-center pt-4  md:pt-32 pb-12 sm:pb-20 md:pb-36">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 mb-4  ">
                  {t('ourMission')}
                </h2>
                <p className="text-gray-400 text-base sm:text-xl md:text-2xl font-semibold leading-relaxed">
                  {t('missionStatement')}
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="space-y-8 flex flex-col items-center md:items-start">
              <div className="text-center md:text-center  order-2 md:order-1 pt-8 md:pt-44 pb-12 sm:pb-20 md:pb-36">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 mb-4 sm:mb-3">
                  {t('ourVision')}
                </h2>
                <p className="text-gray-400 text-base   sm:text-xl md:text-2xl font-semibold leading-relaxed">
                  {t('visionStatement')}
                </p>
              </div>
              <div className="relative w-full sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[520px] order-1 md:order-2">
                <img
                                    src="https://i.ibb.co/5gf6JysH/f1c278f39c1e7100fd51971710b47389cf7bae76.png"
                  alt="Our Vision"
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Static;
