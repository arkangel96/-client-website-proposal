
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const SustainabilityEthicsComplianceReportCenter = () => {
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
    { title: 'Ethics/Compliance Report Center' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Sustainability"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Ethics & Compliance Report Center</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              The Best Engineers Inc. Ethics & Compliance Report Center provides a secure 
              and confidential platform for reporting ethical concerns, compliance 
              violations, or other misconduct. We are committed to maintaining 
              the highest standards of business integrity and encourage open communication.
            </p>
            
            <p className="mb-6">
              Our reporting system allows for both identified and anonymous submissions, 
              ensuring that individuals feel comfortable raising concerns without 
              fear of retaliation. All reports are thoroughly investigated by 
              qualified personnel following established procedures.
            </p>

            <p className="mb-6">
              We encourage reporting of various concerns including conflicts of 
              interest, fraud, corruption, harassment, safety violations, environmental 
              incidents, and any other activities that may violate our Code of 
              Ethics or applicable laws and regulations.
            </p>

            <p className="mb-6">
              Protection against retaliation is fundamental to our reporting culture. 
              We strictly prohibit any form of retaliation against individuals 
              who make good faith reports or participate in investigations. 
              Confidentiality is maintained throughout the investigation process.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-lovable-text mb-4">Report a Concern</h3>
              <p className="text-lovable-text-light mb-4">
                If you have witnessed or are aware of any conduct that may violate 
                our Code of Ethics or applicable laws, please submit a report using 
                one of the following methods:
              </p>
              <ul className="text-lovable-text-light space-y-2">
                <li>• Online reporting portal: ethics@Best Engineers Inc.</li>
                <li>• Ethics hotline: +1 (555) 123-ETHICS</li>
                <li>• Direct contact with Legal Department</li>
                <li>• Anonymous postal submission</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
              alt="Secure reporting and communication systems"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Confidential Reporting</h4>
            <p className="text-lovable-text-light">
              Secure and confidential reporting system protecting 
              whistleblowers and ensuring thorough investigation.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Report Types</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Ethics Violations</li>
              <li>• Fraud & Corruption</li>
              <li>• Safety Concerns</li>
              <li>• Harassment</li>
              <li>• Environmental Issues</li>
              <li>• Regulatory Violations</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default SustainabilityEthicsComplianceReportCenter;
