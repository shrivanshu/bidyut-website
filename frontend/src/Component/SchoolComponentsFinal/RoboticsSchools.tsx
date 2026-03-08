import { Link } from 'react-router-dom'
import { useLanguage } from "../../contexts/OptimizedLanguageContext";
export function RoboticsSchools () {
  const { t } = useLanguage();
  return (
    <section className='py-16 px-4 dark:bg-black bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Heading */}
        <div className='mb-12 text-center lg:text-left'>
          <h2 className='text-3xl md:text-5xl font-heading font-bold dark:text-gray-300 text-gray-900 mb-2'>
            {t("schoolRoboticsSectionHeading")}
          </h2>
          {/* <p className='text-lg md:text-xl font-roboto dark:text-gray-400 text-gray-600'>
           
          </p> */}
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-stretch'>
          {/* Left side - Main image and content */}
          <div className='space-y-6 flex flex-col'>
            <div className='rounded-2xl overflow-hidden flex-grow'>
              <img
                src='/school_images/WhatsApp Image 2025-09-22 at 7.45.54 PM.webp'
                alt={t("schoolRoboticsImageAlt")}
                className='w-full h-full min-h-[600px] object-cover'
              />
            </div>
          </div>

          {/* Right side - Content blocks */}
          <div className='space-y-8'>
            <div className='space-y-4 pb-8 border-b border-gray-200'>
              <p className='text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide'>
                {t("schoolRoboticsBlock1Label")}
              </p>
              <h3 className='text-xl md:text-2xl font-subheading dark:text-gray-300 font-bold text-gray-900'>
                {t("schoolRoboticsBlock1Title")}
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                {t("schoolRoboticsBlock1Description")}

              </p>
            </div>

            <div className='space-y-4 pb-8 border-b border-gray-200'>
              <p className='text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide'>
                {t("schoolRoboticsBlock2Label")}
              </p>
              <h3 className='text-xl md:text-2xl font-subheading dark:text-gray-300 font-bold text-gray-900'>
                {t("schoolRoboticsBlock2Title")}
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                {t("schoolRoboticsBlock2Description")}
              </p>
            </div>

            <div className='space-y-4 pb-8 border-b border-gray-200 last:border-b-0'>
              <p className='text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide'>
                {t("schoolRoboticsBlock3Label")}
              </p>
              <h3 className='text-xl md:text-2xl font-subheading dark:text-gray-300 font-bold text-gray-900'>
                {t("schoolRoboticsBlock3Title")}
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                {t("schoolRoboticsBlock3Description")}

              </p>
            </div>

            <div className='pt-4'>
              <Link to='/Gallery'>
                <button
                  className='
                   w-[350px] h-[40px] md:w-[591px]  md:h-[61px]
                  
                  border border-gray-300
                  text-gray-700
                  dark:text-gray-300
                  hover:bg-gray-50
                  bg-transparent
                  rounded-md
                  font-medium
                  transition
                '
                >
                  {t("schoolRoboticsViewMore")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

