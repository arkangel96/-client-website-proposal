
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const KeyServicesCommissioning = () => {
  const sidebarItems = [
    { title: 'Engineering', href: '/key-services-engineering' },
    { title: 'Procurement', href: '/key-services-procurement' },
    { title: 'Construction', href: '/key-services-construction' },
    { title: 'Commissioning', href: '/key-services-commissioning' },
    { title: 'Project Management', href: '/key-services-project-management' },
    { title: 'Technical Consulting', href: '/key-services-technical-consulting' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Key Services', href: '/key-services' },
    { title: 'Commissioning' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Key Services"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Commissioning Services</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Our commissioning services ensure the seamless transition from construction 
              completion to full operational capability. We provide comprehensive startup 
              and commissioning support that validates system performance, optimizes 
              operations, and facilitates smooth handover to the operations team.
            </p>
            
            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Pre-Commissioning Activities</h3>
            <p className="mb-6">
              Our pre-commissioning phase includes systematic verification of all installed 
              systems and equipment. We conduct comprehensive inspections, testing of 
              individual components, and verification of system integration to ensure 
              readiness for startup operations.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Startup and Testing</h3>
            <p className="mb-6">
              We manage the complete startup sequence from initial equipment energization 
              through full production capability. Our systematic approach includes 
              functional testing, performance verification, and optimization of operating 
              parameters to achieve design specifications.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Performance Testing</h3>
            <p className="mb-6">
              Our performance testing protocols validate that all systems meet design 
              criteria and contractual guarantees. We conduct comprehensive testing 
              including capacity verification, efficiency measurements, and environmental 
              compliance confirmation.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Training and Documentation</h3>
            <p className="mb-6">
              We provide comprehensive training programs for operations and maintenance 
              personnel, ensuring they have the knowledge and skills necessary for safe 
              and efficient facility operation. Complete documentation packages include 
              operating procedures, maintenance manuals, and as-built drawings.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1581094271901-8022df4466f9"
              alt="Industrial facility commissioning and testing procedures"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Systematic Approach</h4>
            <p className="text-lovable-text-light">
              Our proven commissioning methodology ensures reliable startup and 
              optimal performance from day one of operations.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Commissioning Services</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• System Integration Testing</li>
              <li>• Performance Verification</li>
              <li>• Operator Training Programs</li>
              <li>• Documentation Package</li>
              <li>• Startup Support Services</li>
              <li>• Warranty Period Support</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default KeyServicesCommissioning;
