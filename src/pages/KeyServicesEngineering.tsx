
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const KeyServicesEngineering = () => {
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
    { title: 'Engineering' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Key Services"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Engineering Services</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Our engineering services form the foundation of every successful project. With expertise 
              spanning process, mechanical, electrical, and civil engineering disciplines, we deliver 
              innovative solutions that optimize performance, enhance safety, and maximize operational efficiency.
            </p>
            
            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Process Engineering</h3>
            <p className="mb-6">
              Our process engineering team specializes in developing optimized process designs for 
              petrochemical, refinery, and power generation facilities. Using advanced simulation 
              tools and industry-leading software, we create detailed process flow diagrams, 
              heat and material balances, and equipment specifications that ensure optimal performance.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Mechanical Engineering</h3>
            <p className="mb-6">
              From rotating equipment design to piping systems and pressure vessels, our mechanical 
              engineering services cover all aspects of industrial equipment design and analysis. 
              We utilize finite element analysis (FEA) and computational fluid dynamics (CFD) to 
              validate designs and ensure reliability.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Electrical & Instrumentation</h3>
            <p className="mb-6">
              Our electrical and instrumentation engineers design comprehensive control systems, 
              power distribution networks, and safety instrumented systems (SIS) that meet 
              the demanding requirements of industrial facilities. We specialize in distributed 
              control systems (DCS) and programmable logic controllers (PLC).
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Civil & Structural Engineering</h3>
            <p className="mb-6">
              Our civil and structural engineering capabilities include foundation design, 
              structural analysis, and site development. We ensure all structures meet 
              seismic requirements and environmental conditions while optimizing material 
              usage and construction efficiency.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              alt="Engineering design and simulation software"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Advanced Design Tools</h4>
            <p className="text-lovable-text-light">
              We utilize industry-leading software including ASPEN Plus, AutoCAD Plant 3D, 
              and ANSYS for comprehensive design and analysis.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Engineering Capabilities</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• 3D Modeling & Visualization</li>
              <li>• Process Simulation & Optimization</li>
              <li>• Equipment Sizing & Selection</li>
              <li>• Safety Analysis & HAZOP Studies</li>
              <li>• Environmental Impact Assessment</li>
              <li>• Regulatory Compliance Review</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default KeyServicesEngineering;
