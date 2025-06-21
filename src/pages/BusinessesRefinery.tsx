
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const BusinessesRefinery = () => {
  const sidebarItems = [
    { title: 'Petrochemical', href: '/businesses-petrochemical' },
    { title: 'Refinery', href: '/businesses-refinery' },
    { title: 'Power Generation', href: '/businesses-power-generation' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Businesses', href: '/businesses' },
    { title: 'Refinery' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Businesses"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Refinery Solutions</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Best Engineers Inc provides comprehensive refinery engineering solutions, 
              delivering cutting-edge technology and expertise for modern petroleum 
              refining operations. Our integrated approach ensures optimal performance, 
              safety, and environmental compliance across all refinery processes.
            </p>
            
            <p className="mb-6">
              With extensive experience in refinery design, construction, and optimization, 
              we handle projects ranging from grassroots facilities to complex revamps 
              and expansions. Our solutions encompass crude oil processing, conversion 
              units, product upgrading, and supporting utilities.
            </p>

            <p className="mb-6">
              Our refinery expertise includes fluid catalytic cracking (FCC), 
              hydroprocessing units, alkylation, reforming, and isomerization processes. 
              We implement advanced process control systems and optimize unit operations 
              for maximum efficiency and profitability.
            </p>

            <p className="mb-6">
              Safety and environmental stewardship remain paramount in all our refinery 
              projects. We incorporate the latest safety technologies, emission control 
              systems, and waste minimization strategies to ensure sustainable operations 
              that meet or exceed regulatory requirements.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1601745330051-0233fb5b8d10"
              alt="Modern refinery facility with advanced processing units"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Refinery Excellence</h4>
            <p className="text-lovable-text-light">
              Advanced refinery solutions that maximize efficiency, safety, 
              and environmental performance for sustainable operations.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Key Capabilities</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Process Unit Design</li>
              <li>• Catalyst Management</li>
              <li>• Energy Optimization</li>
              <li>• Environmental Compliance</li>
              <li>• Safety Systems</li>
              <li>• Turnaround Planning</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default BusinessesRefinery;
