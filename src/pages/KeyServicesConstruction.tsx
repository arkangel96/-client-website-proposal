
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const KeyServicesConstruction = () => {
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
    { title: 'Construction' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Key Services"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Construction Services</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Our construction services encompass the complete execution of industrial projects 
              from groundbreaking to final handover. With a proven track record of delivering 
              complex facilities on time and within budget, we manage every aspect of the 
              construction process while maintaining the highest standards of safety and quality.
            </p>
            
            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Project Management Excellence</h3>
            <p className="mb-6">
              Our construction management approach integrates advanced planning methodologies, 
              real-time progress monitoring, and proactive risk management. We utilize 
              industry-leading project management software and maintain detailed construction 
              schedules that optimize resource allocation and minimize project duration.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Safety Leadership</h3>
            <p className="mb-6">
              Safety is our top priority on every construction site. Our comprehensive safety 
              management system includes rigorous training programs, regular safety audits, 
              and implementation of best practices that consistently exceed industry standards. 
              We maintain an exemplary safety record across all our projects.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Quality Assurance</h3>
            <p className="mb-6">
              Our quality assurance program ensures that all construction activities meet 
              or exceed specified requirements. We implement systematic inspection procedures, 
              material testing protocols, and comprehensive documentation systems that 
              provide complete traceability throughout the construction process.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Specialized Construction Capabilities</h3>
            <p className="mb-6">
              We specialize in complex industrial construction including process units, 
              utility systems, storage facilities, and support infrastructure. Our experienced 
              teams are skilled in working with specialized materials and equipment required 
              for petrochemical, refinery, and power generation facilities.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
              alt="Industrial construction site with safety protocols"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Safety First Approach</h4>
            <p className="text-lovable-text-light">
              Our unwavering commitment to safety ensures zero incidents while 
              maintaining project schedules and quality standards.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Construction Expertise</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Heavy Industrial Construction</li>
              <li>• Process Unit Installation</li>
              <li>• Piping and Instrumentation</li>
              <li>• Electrical and Control Systems</li>
              <li>• Structural Steel Erection</li>
              <li>• Equipment Installation</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default KeyServicesConstruction;
