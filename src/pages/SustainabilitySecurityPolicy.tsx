
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const SustainabilitySecurityPolicy = () => {
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
    { title: 'Security Policy' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Sustainability"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Security Policy</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Best Engineers Inc. maintains comprehensive security policies and procedures 
              to protect our people, assets, information, and operations from 
              security threats. Our integrated security management approach covers 
              physical security, information security, and operational security 
              across all business activities.
            </p>
            
            <p className="mb-6">
              Our security framework is based on internationally recognized standards 
              and best practices, including ISO 27001 for information security 
              management. We conduct regular security assessments, vulnerability 
              testing, and continuous monitoring to identify and mitigate potential risks.
            </p>

            <p className="mb-6">
              Physical security measures protect our facilities, equipment, and 
              personnel through access control systems, surveillance, emergency 
              response procedures, and coordination with local security authorities. 
              We implement layered security approaches appropriate to each location's risk profile.
            </p>

            <p className="mb-6">
              Information security policies protect confidential data, intellectual 
              property, and client information through encryption, access controls, 
              backup procedures, and incident response protocols. Employee training 
              ensures awareness of security responsibilities and threat recognition.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-lovable-text mb-4">Security Incident Reporting</h3>
              <p className="text-lovable-text-light mb-4">
                Report security incidents immediately to our Security Operations Center:
              </p>
              <ul className="text-lovable-text-light space-y-2">
                <li>• Emergency: +1 (555) 911-SECURITY</li>
                <li>• Email: security@Best Engineers Inc.</li>
                <li>• Internal hotline: Extension 911</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1563206767-5b18f218e8de"
              alt="Security systems and access control technology"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Integrated Security</h4>
            <p className="text-lovable-text-light">
              Comprehensive security management protecting people, 
              assets, and information across all operations.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Security Elements</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Physical Security</li>
              <li>• Information Security</li>
              <li>• Access Control</li>
              <li>• Incident Response</li>
              <li>• Risk Assessment</li>
              <li>• Security Training</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default SustainabilitySecurityPolicy;
