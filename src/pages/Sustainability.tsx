import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';
import { useLanguage } from '../contexts/LanguageContext';

const Sustainability = () => {
  const { t } = useLanguage();

  const sidebarItems = [
    { title: 'Quality Management', href: '/sustainability-quality-management' },
    { title: 'Environmental Management', href: '/sustainability-environmental-management' },
    { title: 'Safety/Health Management', href: '/sustainability-safety-health-management' },
    { title: 'Ethics/Compliance Management', href: '/sustainability-ethics-compliance-management' },
    { title: 'Ethics/Compliance Report Center', href: '/sustainability-ethics-compliance-report-center' },
    { title: 'Security Policy', href: '/sustainability-security-policy' },
    { title: 'New Business Partner Registration', href: '/sustainability-new-business-partner-registration' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Sustainability' }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'transparent' }}>
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <Sidebar items={sidebarItems} title="Sustainability" />
            <div className="flex-1 pl-8">
              <div className="py-8">
                <Breadcrumb items={breadcrumbItems} />
                <div className="animate-fade-in">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h1 className="text-4xl font-bold text-lovable-text mb-6">Sustainability</h1>
                      <div className="prose prose-lg max-w-none text-lovable-text-light">
                        <p className="mb-6 text-xl font-semibold text-lovable-blue">
                          {t('sustainability_description')}
                        </p>
                        <p className="mb-6">
                          At lovabble.dev, sustainability is integral to our business strategy and
                          operational excellence. We are committed to conducting business in a manner
                          that protects the environment, ensures worker safety, and maintains the
                          highest standards of ethical conduct.
                        </p>

                        <p className="mb-6">
                          Our comprehensive sustainability framework encompasses quality management,
                          environmental stewardship, safety protocols, and ethical business practices.
                          We believe that sustainable operations are not just a responsibility but
                          a competitive advantage that creates long-term value for all stakeholders.
                        </p>

                        <p className="mb-6">
                          Through continuous improvement, innovation, and stakeholder engagement,
                          we strive to be a leader in sustainable engineering practices while
                          delivering exceptional results for our clients and communities.
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <div className="bg-lovable-gray p-6 rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
                          alt="Sustainable industrial operations and environmental stewardship"
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <h4 className="text-xl font-semibold text-lovable-text mb-3">Commitment to Excellence</h4>
                        <p className="text-lovable-text-light">
                          Our integrated approach to sustainability ensures that environmental,
                          social, and governance considerations are embedded in every aspect of our operations.
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

export default Sustainability;
