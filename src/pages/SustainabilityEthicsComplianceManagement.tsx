
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const SustainabilityEthicsComplianceManagement = () => {
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
    { title: 'Ethics/Compliance Management' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Sustainability"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Ethics & Compliance Management</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Best Engineers Inc. maintains the highest standards of ethics and compliance 
              across all business operations. Our comprehensive ethics and compliance 
              program ensures integrity, transparency, and accountability in all 
              interactions with clients, partners, employees, and communities.
            </p>
            
            <p className="mb-6">
              Our Code of Ethics establishes clear guidelines for professional 
              conduct, conflict of interest management, anti-corruption practices, 
              and fair dealing. We provide regular training and awareness programs 
              to ensure all employees understand and adhere to these standards.
            </p>

            <p className="mb-6">
              Compliance management encompasses adherence to all applicable laws, 
              regulations, and industry standards across our global operations. 
              We maintain robust monitoring systems, regular audits, and corrective 
              action procedures to ensure continuous compliance.
            </p>

            <p className="mb-6">
              We encourage open communication and provide multiple channels for 
              reporting ethical concerns or compliance violations. Our whistleblower 
              protection program ensures that individuals can report concerns 
              without fear of retaliation, promoting a culture of transparency and trust.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
              alt="Ethics and compliance documentation and governance"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Code of Ethics</h4>
            <p className="text-lovable-text-light">
              Comprehensive ethics and compliance framework ensuring 
              integrity and transparency in all business operations.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Compliance Areas</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Anti-Corruption</li>
              <li>• Conflict of Interest</li>
              <li>• Data Protection</li>
              <li>• Fair Trading</li>
              <li>• Regulatory Compliance</li>
              <li>• Whistleblower Protection</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default SustainabilityEthicsComplianceManagement;
