import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const CoreTechnologiesFlareStack = () => {
  const sidebarItems = [
    { title: 'Flare Stack Fabrication', href: '/core-technologies-flare-stack-fabrication' },
    { title: 'H2 Facilities Production', href: '/core-technologies-h2-facilities-production' },
    { title: 'CO2 Purification', href: '/core-technologies-co2-purification' },
    { title: 'Patents', href: '/core-technologies-patents' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Core Technologies', href: '/core-technologies' },
    { title: 'Flare Stack Fabrication' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Core Technologies"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Flare Stack Fabrication</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Best Engineers Inc specializes in the design and fabrication of advanced
              flare stack systems that ensure safe and efficient combustion of
              waste gases in industrial facilities. Our flare systems are engineered
              for optimal performance, environmental compliance, and operational safety.
            </p>

            <p className="mb-6">
              Our flare stack solutions incorporate cutting-edge combustion technology,
              advanced materials, and innovative design features. We provide complete
              flare systems including stack structures, burner assemblies, ignition
              systems, and monitoring equipment tailored to specific process requirements.
            </p>

            <p className="mb-6">
              We engineer flare stacks for various applications including emergency
              relief, routine maintenance operations, and continuous combustion needs.
              Our designs optimize combustion efficiency while minimizing emissions,
              noise, and visual impact on surrounding communities.
            </p>

            <p className="mb-6">
              Safety and environmental protection are paramount in our flare stack
              designs. We implement advanced flame detection systems, automated
              controls, and emission monitoring to ensure reliable operation and
              regulatory compliance across all operating conditions.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
              alt="Industrial flare stack system with advanced combustion technology"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Advanced Combustion</h4>
            <p className="text-lovable-text-light">
              State-of-the-art flare stack systems engineered for safe,
              efficient, and environmentally responsible waste gas combustion.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Design Features</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Multi-Point Ignition</li>
              <li>• Steam Injection Systems</li>
              <li>• Wind Guards</li>
              <li>• Flame Detection</li>
              <li>• Noise Suppression</li>
              <li>• Emission Monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default CoreTechnologiesFlareStack;
