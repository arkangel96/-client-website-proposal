import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const BusinessesPowerGeneration = () => {
  const sidebarItems = [
    { title: 'Petrochemical', href: '/businesses-petrochemical' },
    { title: 'Refinery', href: '/businesses-refinery' },
    { title: 'Power Generation', href: '/businesses-power-generation' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Businesses', href: '/businesses' },
    { title: 'Power Generation' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Businesses"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Power Generation Solutions</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Best Engineers Inc delivers innovative power generation solutions across
              conventional and renewable energy technologies. Our comprehensive
              approach covers design, engineering, construction, and commissioning
              of power facilities that meet growing global energy demands.
            </p>

            <p className="mb-6">
              Our power generation expertise spans thermal power plants, combined
              cycle facilities, renewable energy systems, and distributed generation
              technologies. We focus on maximizing efficiency, reliability, and
              environmental performance while ensuring cost-effective operations.
            </p>

            <p className="mb-6">
              We specialize in advanced technologies including gas turbines, steam
              turbines, heat recovery steam generators (HRSG), and emission control
              systems. Our solutions incorporate smart grid integration, energy
              storage systems, and digital monitoring for optimal performance.
            </p>

            <p className="mb-6">
              Sustainability drives our power generation approach, with emphasis on
              reducing carbon footprint, improving fuel efficiency, and integrating
              renewable energy sources. We support the global transition to cleaner,
              more sustainable power generation technologies.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7"
              alt="Modern power generation facility with renewable energy integration"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Clean Energy Solutions</h4>
            <p className="text-lovable-text-light">
              Advanced power generation technologies that combine efficiency,
              reliability, and environmental responsibility.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Technology Focus</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Combined Cycle Plants</li>
              <li>• Renewable Integration</li>
              <li>• Energy Storage Systems</li>
              <li>• Grid Modernization</li>
              <li>• Emission Control</li>
              <li>• Smart Technologies</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default BusinessesPowerGeneration;
