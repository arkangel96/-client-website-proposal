
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const CoreTechnologiesCO2Purification = () => {
  const sidebarItems = [
    { title: 'Flare Stack Fabrication', href: '/core-technologies-flare-stack-fabrication' },
    { title: 'H2 Facilities Production', href: '/core-technologies-h2-facilities-production' },
    { title: 'CO2 Purification', href: '/core-technologies-co2-purification' },
    { title: 'Patents', href: '/core-technologies-patents' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Core Technologies', href: '/core-technologies' },
    { title: 'CO2 Purification' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Core Technologies"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">CO2 Purification Technology</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Best Engineers Inc. develops advanced CO2 purification technologies that 
              support carbon capture, utilization, and storage (CCUS) initiatives. 
              Our innovative solutions enable the efficient capture and purification 
              of CO2 from industrial processes, contributing to global decarbonization efforts.
            </p>
            
            <p className="mb-6">
              Our CO2 purification systems utilize cutting-edge separation technologies 
              including absorption, adsorption, membrane separation, and cryogenic 
              distillation. We design custom solutions that achieve high purity CO2 
              suitable for various applications including enhanced oil recovery and storage.
            </p>

            <p className="mb-6">
              We engineer complete CO2 processing facilities that integrate capture, 
              purification, compression, and conditioning systems. Our solutions 
              handle CO2 streams from various sources including power plants, 
              cement facilities, steel production, and chemical processes.
            </p>

            <p className="mb-6">
              Environmental stewardship drives our CO2 purification technology 
              development. Our systems are designed to minimize energy consumption, 
              reduce operational costs, and ensure safe handling of CO2 throughout 
              the purification and transport process.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9"
              alt="CO2 purification facility with advanced separation technology"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Carbon Solutions</h4>
            <p className="text-lovable-text-light">
              Innovative CO2 purification technologies supporting carbon capture 
              and climate change mitigation strategies.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Process Technologies</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Absorption Systems</li>
              <li>• Membrane Separation</li>
              <li>• Cryogenic Distillation</li>
              <li>• Compression Units</li>
              <li>• Dehydration Systems</li>
              <li>• Quality Control</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default CoreTechnologiesCO2Purification;
