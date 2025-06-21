
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const SustainabilityNewBusinessPartnerRegistration = () => {
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
    { title: 'Sustainability', href: '/sustainability' },
    { title: 'New Business Partner Registration' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Sustainability"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">New Business Partner Registration</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Best Engineers Inc. welcomes qualified partners who share our commitment 
              to excellence, integrity, and sustainability. Our business partner 
              registration process ensures that all suppliers, contractors, and 
              service providers meet our rigorous standards for quality, safety, 
              and ethical business practices.
            </p>
            
            <p className="mb-6">
              The registration process includes comprehensive evaluation of potential 
              partners' capabilities, financial stability, safety performance, 
              environmental management practices, and compliance with applicable 
              laws and regulations. This thorough assessment ensures successful 
              long-term partnerships.
            </p>

            <p className="mb-6">
              We require all business partners to demonstrate adherence to our 
              Code of Ethics and Supplier Standards, which cover areas including 
              labor practices, human rights, environmental protection, anti-corruption, 
              and health and safety management.
            </p>

            <p className="mb-6">
              Registered partners gain access to our global procurement opportunities, 
              technical collaboration programs, and business development initiatives. 
              We provide ongoing support and resources to help partners maintain 
              compliance and improve their capabilities.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-lovable-text mb-4">Registration Requirements</h3>
              <p className="text-lovable-text-light mb-4">
                To begin the registration process, please provide the following documentation:
              </p>
              <ul className="text-lovable-text-light space-y-2">
                <li>• Company registration and legal documents</li>
                <li>• Financial statements and credit references</li>
                <li>• Quality, safety, and environmental certifications</li>
                <li>• Insurance coverage documentation</li>
                <li>• References from previous clients</li>
                <li>• Compliance with Code of Ethics acknowledgment</li>
              </ul>
              <div className="mt-6">
                <a 
                  href="mailto:partnerships@Best Engineers Inc." 
                  className="bg-lovable-blue text-white px-6 py-3 rounded-lg hover:bg-lovable-blue-hover transition-colors"
                >
                  Begin Registration Process
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="Business partnership and collaboration"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Partnership Excellence</h4>
            <p className="text-lovable-text-light">
              Building strategic partnerships with qualified suppliers 
              and contractors who share our values and standards.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Partner Benefits</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Global Opportunities</li>
              <li>• Technical Support</li>
              <li>• Training Programs</li>
              <li>• Long-term Relationships</li>
              <li>• Performance Recognition</li>
              <li>• Business Development</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default SustainabilityNewBusinessPartnerRegistration;
