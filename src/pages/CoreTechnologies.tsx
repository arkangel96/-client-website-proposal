import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';
import { useLanguage } from '../contexts/LanguageContext';

const CoreTechnologies = () => {
  const { t } = useLanguage();

  const sidebarItems = [
    { title: 'Flare Stack Fabrication', href: '/core-technologies-flare-stack-fabrication' },
    { title: 'H2 Facilities Production', href: '/core-technologies-h2-facilities-production' },
    { title: 'CO2 Purification', href: '/core-technologies-co2-purification' },
    { title: 'Patents', href: '/core-technologies-patents' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Core Technologies' }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'transparent' }}>
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <Sidebar items={sidebarItems} title="Core Technologies" />
            <div className="flex-1 pl-8">
              <div className="py-8">
                <Breadcrumb items={breadcrumbItems} />
                <div className="animate-fade-in">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h1 className="text-4xl font-bold text-lovable-text mb-6">Core Technologies</h1>
                      <div className="prose prose-lg max-w-none text-lovable-text-light">
                        <p className="mb-6 text-xl font-semibold text-lovable-blue">
                          {t('core_technologies_description')}
                        </p>
                        <p className="mb-6">
                          Our core technologies represent decades of innovation and engineering excellence
                          in specialized industrial applications. These proprietary solutions provide our
                          clients with competitive advantages through improved efficiency, enhanced safety,
                          and reduced environmental impact.
                        </p>

                        <p className="mb-6">
                          From advanced flare stack designs to cutting-edge hydrogen production systems
                          and innovative CO2 purification technologies, our technical innovations address
                          the most challenging aspects of modern industrial operations while setting new
                          industry standards.
                        </p>

                        <p className="mb-6">
                          Our commitment to research and development, combined with extensive field experience,
                          ensures that our technologies are not only innovative but also proven in real-world
                          applications across diverse operating conditions and regulatory environments.
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <div className="bg-lovable-gray p-6 rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                          alt="Advanced industrial technology and innovation"
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <h4 className="text-xl font-semibold text-lovable-text mb-3">Innovation Leadership</h4>
                        <p className="text-lovable-text-light">
                          Our proprietary technologies are protected by multiple patents and have been
                          successfully deployed in facilities worldwide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoreTechnologies;
