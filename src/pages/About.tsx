import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const sidebarItems = [
    { title: 'Overview', href: '/about-overview' },
    { title: 'Values', href: '/about-values' },
    { title: 'CEO Message', href: '/about-ceo-message' },
    { title: 'History', href: '/about-history' },
    { title: 'Business Permits', href: '/about-business-permits' },
    { title: 'Location', href: '/about-location' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'About Us' }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'transparent' }}>
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <Sidebar items={sidebarItems} title="About Us" />
            <div className="flex-1 pl-8">
              <div className="py-8">
                <Breadcrumb items={breadcrumbItems} />
                <div className="animate-fade-in">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h1 className="text-4xl font-bold text-lovable-text mb-6">About Best Engineers Inc</h1>
                      <div className="prose prose-lg max-w-none text-lovable-text-light">
                        <p className="mb-6 text-xl font-semibold text-lovable-blue">
                          {t('about_description')}
                        </p>
                        <p className="mb-6">
                          Best Engineers Inc. is a leading industrial engineering company specializing
                          in comprehensive solutions for the petrochemical, refinery, and power generation
                          industries. With a steadfast commitment to excellence and innovation, we deliver
                          exceptional results for our clients worldwide.
                        </p>

                        <p className="mb-6">
                          Our team of highly skilled engineers, project managers, and technical experts
                          collaborate to provide cutting-edge services, including engineering design,
                          procurement, construction management, commissioning, and technical consulting.
                        </p>

                        <p className="mb-6">
                          We leverage advanced technologies, sustainable practices, and industry-leading
                          expertise to optimize project outcomes, reduce costs, and enhance operational
                          efficiency. Our client-centric approach ensures that we understand and exceed
                          expectations, building long-term partnerships based on trust and mutual success.
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <div className="bg-lovable-gray p-6 rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
                          alt="Engineering and project management team collaboration"
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h4 className="text-xl font-semibold text-lovable-text mb-3">Our Expertise</h4>
                        <p className="text-lovable-text-light">
                          Comprehensive engineering solutions tailored to meet the unique needs
                          of the petrochemical, refinery, and power generation industries.
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

export default About;
