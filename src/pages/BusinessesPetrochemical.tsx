import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const BusinessesPetrochemical = () => {
  const sidebarItems = [
    { title: 'Petrochemical', href: '/businesses-petrochemical' },
    { title: 'Refinery', href: '/businesses-refinery' },
    { title: 'Power Generation', href: '/businesses-power-generation' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Businesses', href: '/businesses' },
    { title: 'Petrochemical' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Businesses"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Petrochemical Solutions</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Our petrochemical division delivers comprehensive engineering solutions for complex
              chemical processing facilities. From ethylene crackers to polymer production plants,
              we provide innovative designs that optimize efficiency, safety, and environmental performance.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Recent Major Projects</h3>

            <div className="border border-gray-200 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-lovable-text mb-2">Gulf Coast Ethylene Complex</h4>
              <p className="text-lovable-blue font-medium mb-2">Completed: March 2024 | Value: $850M</p>
              <p className="mb-4">
                Designed and constructed a world-scale ethylene cracker with integrated utilities.
                The facility processes 1.5 million tons per year of ethane feedstock, featuring
                advanced energy integration and emissions control systems.
              </p>
              <ul className="text-sm space-y-1">
                <li>• 15% energy efficiency improvement over industry standards</li>
                <li>• Zero liquid discharge water treatment system</li>
                <li>• Advanced process control optimization</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-lovable-text mb-2">Asia-Pacific Polyethylene Plant</h4>
              <p className="text-lovable-blue font-medium mb-2">Completed: September 2023 | Value: $420M</p>
              <p className="mb-4">
                Engineered a high-density polyethylene (HDPE) production facility featuring
                modular construction and advanced automation systems. The plant produces
                400,000 tons per year of various HDPE grades.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Modular design reduced construction time by 30%</li>
                <li>• Fully automated quality control systems</li>
                <li>• Integrated product handling and storage</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Specialized Capabilities</h3>
            <ul className="mb-6 space-y-2">
              <li>• <strong>Olefins Production:</strong> Ethylene, propylene, and butadiene facilities</li>
              <li>• <strong>Aromatics Complexes:</strong> Benzene, toluene, and xylene processing</li>
              <li>• <strong>Polymer Manufacturing:</strong> Polyethylene, polypropylene, and specialty polymers</li>
              <li>• <strong>Specialty Chemicals:</strong> Custom chemical production facilities</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="Petrochemical facility with processing units"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Innovation Focus</h4>
            <p className="text-lovable-text-light">
              We continuously develop new technologies and processes to improve efficiency,
              reduce environmental impact, and enhance product quality in petrochemical manufacturing.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Project Statistics</h4>
            <div className="space-y-3 text-lovable-text-light">
              <div className="flex justify-between">
                <span>Projects Completed:</span>
                <span className="font-semibold">75+</span>
              </div>
              <div className="flex justify-between">
                <span>Total Investment Value:</span>
                <span className="font-semibold">$12B+</span>
              </div>
              <div className="flex justify-between">
                <span>Production Capacity:</span>
                <span className="font-semibold">8M+ tons/year</span>
              </div>
              <div className="flex justify-between">
                <span>Countries Served:</span>
                <span className="font-semibold">15+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default BusinessesPetrochemical;
