import React from 'react';
import { useLanguage } from '../contexts/OptimizedLanguageContext';
import { LanguageSwitcher } from '../Component/LanguageSwitcher';

// Example integration in existing Header component
export const ExampleHeader: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src="/logo.svg" alt="Bidyut" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                {t('home')}
              </a>
              <a href="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                {t('aboutUs')}
              </a>
              <a href="/school" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                {t('school')}
              </a>
              <a href="/robots" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                {t('robots')}
              </a>
              <a href="/gallery" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                {t('gallery')}
              </a>
              <a href="/contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                {t('contact')}
              </a>
            </div>
          </nav>

          {/* Language Switcher & LMS Login */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher 
              variant="dropdown" 
              showFlags={true} 
              showNames={false} 
              compact={true}
            />
            <a
              href="/login"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
            >
              {t('loginToLms')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

// Example integration in Hero Section
export const ExampleHeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('learnRobotics')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            {t('heroDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-150 ease-in-out">
              {t('scheduleDemoCall')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg transition duration-150 ease-in-out">
              {t('exploreProgram')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Example integration in Offerings Section
export const ExampleOfferingsSection: React.FC = () => {
  const { t } = useLanguage();

  const offerings = [
    {
      key: 'collaborativeLearning',
      icon: '🤝'
    },
    {
      key: 'smartProgress',
      icon: '📊'
    },
    {
      key: 'interactiveWorkshops',
      icon: '🛠️'
    },
    {
      key: 'roboticsLabs',
      icon: '🤖'
    },
    {
      key: 'personalizedMentorship',
      icon: '👨‍🏫'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('ourOfferings')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('offeringsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering) => (
            <div key={offering.key} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{offering.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t(offering.key)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`${offering.key}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Example Footer integration
export const ExampleFooter: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{t('bidyutTechnologies')}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footerDescription')}
            </p>
            
            {/* Language Switcher in Footer */}
            <div className="mb-4">
              <LanguageSwitcher 
                variant="buttons" 
                className="flex-wrap" 
                showFlags={true} 
                compact={true}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">{t('home')}</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">{t('aboutUs')}</a></li>
              <li><a href="/gallery" className="text-gray-400 hover:text-white transition-colors">{t('gallery')}</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">{t('contact')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contactInformation')}</h4>
            <div className="text-gray-400 space-y-2">
              <p>{t('phoneLabel')}: +91-XXXXXXXXXX</p>
              <p>{t('emailLabel')}: info@bidyut.com</p>
              <p>{t('address')}: Mumbai, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t('allRightsReserved')}</p>
        </div>
      </div>

      {/* Floating Language Switcher */}
      <LanguageSwitcher variant="floating" />
    </footer>
  );
};

// Main App component showing integration
export const ExampleApp: React.FC = () => {
  return (
    <div className="min-h-screen">
      <ExampleHeader />
      <ExampleHeroSection />
      <ExampleOfferingsSection />
      <ExampleFooter />
    </div>
  );
};

export default ExampleApp;
