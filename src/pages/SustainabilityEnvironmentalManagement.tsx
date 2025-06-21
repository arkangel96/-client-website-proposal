
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const SustainabilityEnvironmentalManagement = () => {
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
    { title: 'Environmental Management' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Sustainability"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Environmental Management</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Best Engineers Inc. is committed to environmental stewardship through 
              comprehensive environmental management systems that minimize our 
              ecological footprint and promote sustainable practices across all 
              operations. Our approach integrates environmental considerations 
              into every aspect of project planning and execution.
            </p>
            
            <p className="mb-6">
              Our environmental management system is certified to ISO 14001 standards, 
              providing a framework for continuous improvement in environmental 
              performance. We regularly monitor, measure, and report on our environmental 
              impacts, setting ambitious targets for reduction and improvement.
            </p>

            <p className="mb-6">
              We implement comprehensive environmental impact assessments for all 
              projects, identifying potential risks and developing mitigation strategies. 
              Our solutions prioritize resource efficiency, waste minimization, 
              emissions reduction, and protection of biodiversity and ecosystems.
            </p>

            <p className="mb-6">
              Climate change mitigation is a key focus of our environmental management 
              strategy. We support carbon reduction initiatives, renewable energy 
              integration, and sustainable technology development to help our clients 
              achieve their environmental goals and regulatory compliance.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
              alt="Environmental sustainability and green technology initiatives"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">ISO 14001 Certified</h4>
            <p className="text-lovable-text-light">
              Comprehensive environmental management system ensuring 
              sustainable practices and continuous improvement.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Key Initiatives</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Carbon Footprint Reduction</li>
              <li>• Waste Minimization</li>
              <li>• Resource Efficiency</li>
              <li>• Biodiversity Protection</li>
              <li>• Emission Control</li>
              <li>• Sustainable Design</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default SustainabilityEnvironmentalManagement;
