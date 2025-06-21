import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';
import { useLanguage } from '../contexts/LanguageContext';

const Businesses = () => {
  const { t } = useLanguage();

  const sidebarItems = [
    { title: 'Petrochemical', href: '/businesses-petrochemical' },
    { title: 'Refinery', href: '/businesses-refinery' },
    { title: 'Power Generation', href: '/businesses-power-generation' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Businesses' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <Sidebar items={sidebarItems} title="Businesses" />
            <div className="flex-1 pl-8">
              <div className="py-8">
                <Breadcrumb items={breadcrumbItems} />
                <div className="animate-fade-in">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h1 className="text-4xl font-bold text-lovable-text mb-6">Our Business Areas</h1>
                      <div className="prose prose-lg max-w-none text-lovable-text-light">
                        <p className="mb-6 text-xl font-semibold text-lovable-blue">
                          {t('businesses_description')}
                        </p>
                        <p className="mb-6">
                          Best Engineers Inc operates across three core business sectors, each representing 
                          decades of specialized expertise and proven track records. Our diversified 
                          portfolio allows us to leverage cross-industry knowledge while maintaining 
                          deep technical specialization in each sector.
                        </p>
                        
                        <p className="mb-6">
                          Our comprehensive approach spans from initial feasibility studies through 
                          detailed engineering, construction, and long-term operational support. 
                          We have successfully delivered projects ranging from small-scale 
                          modifications to multi-billion dollar grassroots facilities.
                        </p>

                        <p className="mb-6">
                          With a focus on innovation, safety, and environmental responsibility, 
                          we continue to push the boundaries of what's possible in industrial 
                          engineering while delivering exceptional value to our clients across 
                          all business sectors.
                        </p>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-lovable-gray p-6 rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                          alt="Industrial facilities across different sectors"
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <h4 className="text-xl font-semibold text-lovable-text mb-3">Industry Leadership</h4>
                        <p className="text-lovable-text-light">
                          Our proven expertise across multiple industries positions us as a 
                          trusted partner for complex engineering challenges and innovative solutions.
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

export default Businesses;
