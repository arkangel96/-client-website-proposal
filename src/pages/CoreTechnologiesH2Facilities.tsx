
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const CoreTechnologiesH2Facilities = () => {
  const sidebarItems = [
    { title: 'Flare Stack Fabrication', href: '/core-technologies-flare-stack-fabrication' },
    { title: 'H2 Facilities Production', href: '/core-technologies-h2-facilities-production' },
    { title: 'CO2 Purification', href: '/core-technologies-co2-purification' },
    { title: 'Patents', href: '/core-technologies-patents' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Core Technologies', href: '/core-technologies' },
    { title: 'H2 Facilities Production' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Core Technologies"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">H2 Facilities Production</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Best Engineers Inc is at the forefront of hydrogen production technology, 
              designing and constructing state-of-the-art hydrogen facilities that 
              support the growing clean energy economy. Our comprehensive solutions 
              cover the entire hydrogen value chain from production to storage and distribution.
            </p>
            
            <p className="mb-6">
              Our hydrogen facilities incorporate advanced production technologies 
              including steam methane reforming, electrolysis, and emerging technologies 
              like pyrolysis. We design systems for both blue and green hydrogen 
              production, ensuring optimal efficiency and minimal environmental impact.
            </p>

            <p className="mb-6">
              We specialize in large-scale hydrogen production facilities that serve 
              industrial customers, fuel cell applications, and energy storage needs. 
              Our designs include integrated purification systems, compression equipment, 
              and safe storage solutions for reliable hydrogen supply.
            </p>

            <p className="mb-6">
              Safety is paramount in hydrogen facility design, given the unique 
              properties of hydrogen gas. We implement comprehensive safety systems, 
              leak detection, emergency response procedures, and specialized materials 
              to ensure safe and reliable hydrogen production operations.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19"
              alt="Modern hydrogen production facility with clean energy infrastructure"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Clean Hydrogen</h4>
            <p className="text-lovable-text-light">
              Advanced hydrogen production facilities supporting the transition 
              to clean energy and sustainable industrial processes.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Technology Solutions</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Steam Reforming</li>
              <li>• Electrolysis Systems</li>
              <li>• Purification Units</li>
              <li>• Compression Systems</li>
              <li>• Storage Solutions</li>
              <li>• Safety Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default CoreTechnologiesH2Facilities;
