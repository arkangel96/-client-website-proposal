
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const CoreTechnologiesPatents = () => {
  const sidebarItems = [
    { title: 'Flare Stack Fabrication', href: '/core-technologies-flare-stack-fabrication' },
    { title: 'H2 Facilities Production', href: '/core-technologies-h2-facilities-production' },
    { title: 'CO2 Purification', href: '/core-technologies-co2-purification' },
    { title: 'Patents', href: '/core-technologies-patents' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Core Technologies', href: '/core-technologies' },
    { title: 'Patents' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Core Technologies"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Patents & Intellectual Property</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Best Engineers Inc. maintains a robust portfolio of patents and intellectual 
              property that reflects our commitment to innovation and technological 
              advancement. Our patent portfolio covers key technologies in process 
              engineering, environmental solutions, and industrial automation.
            </p>
            
            <p className="mb-6">
              Our patented technologies include innovative process designs, equipment 
              configurations, control systems, and environmental mitigation solutions. 
              These patents provide competitive advantages and enable us to offer 
              unique solutions that deliver superior performance for our clients.
            </p>

            <p className="mb-6">
              We actively pursue patent protection for breakthrough technologies 
              developed through our research and development programs. Our patent 
              strategy focuses on technologies that address critical industry challenges 
              and support the transition to more sustainable industrial processes.
            </p>

            <p className="mb-6">
              Collaboration with research institutions, universities, and technology 
              partners enhances our innovation capabilities. We leverage these 
              partnerships to develop next-generation technologies and expand 
              our intellectual property portfolio in emerging areas.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd"
              alt="Innovation and research facility with advanced technology development"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Innovation Portfolio</h4>
            <p className="text-lovable-text-light">
              Comprehensive patent portfolio protecting innovative technologies 
              and providing competitive advantages in engineering solutions.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Patent Areas</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Process Optimization</li>
              <li>• Equipment Design</li>
              <li>• Environmental Technology</li>
              <li>• Control Systems</li>
              <li>• Safety Innovations</li>
              <li>• Energy Efficiency</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default CoreTechnologiesPatents;
