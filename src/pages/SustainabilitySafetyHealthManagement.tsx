
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const SustainabilitySafetyHealthManagement = () => {
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
    { title: 'Safety/Health Management' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Sustainability"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Safety & Health Management</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Safety and health management is fundamental to Best Engineers Inc.'s operations, 
              reflecting our unwavering commitment to protecting our employees, 
              contractors, and communities. Our comprehensive safety culture prioritizes 
              prevention, continuous improvement, and zero tolerance for unsafe practices.
            </p>
            
            <p className="mb-6">
              Our safety management system is certified to OHSAS 18001/ISO 45001 
              standards, providing a robust framework for hazard identification, 
              risk assessment, and incident prevention. We maintain industry-leading 
              safety performance through rigorous training, monitoring, and accountability.
            </p>

            <p className="mb-6">
              We implement comprehensive health and safety protocols covering all 
              aspects of project execution, from design and construction to commissioning 
              and maintenance. Our approach includes regular safety audits, behavioral 
              safety programs, and continuous improvement initiatives.
            </p>

            <p className="mb-6">
              Employee health and wellbeing programs ensure our workforce remains 
              healthy, engaged, and productive. We provide comprehensive health 
              monitoring, ergonomic assessments, mental health support, and workplace 
              wellness initiatives that promote a healthy work-life balance.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96"
              alt="Safety and health management with protective equipment and training"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Zero Incident Goal</h4>
            <p className="text-lovable-text-light">
              Comprehensive safety and health management system ensuring 
              the wellbeing of all employees and stakeholders.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Safety Programs</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Risk Assessment</li>
              <li>• Safety Training</li>
              <li>• Incident Prevention</li>
              <li>• Health Monitoring</li>
              <li>• Emergency Response</li>
              <li>• Behavioral Safety</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default SustainabilitySafetyHealthManagement;
