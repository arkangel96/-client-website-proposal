
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const KeyServicesProcurement = () => {
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
    { title: 'Procurement' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Key Services"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Procurement Services</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Our procurement services ensure the timely delivery of high-quality materials and 
              equipment while optimizing costs and maintaining strict quality standards. With 
              established relationships with leading suppliers worldwide, we provide comprehensive 
              supply chain management for complex industrial projects.
            </p>
            
            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Strategic Sourcing</h3>
            <p className="mb-6">
              We develop comprehensive sourcing strategies that balance cost, quality, delivery, 
              and risk factors. Our team conducts thorough supplier evaluations, negotiates 
              favorable terms, and establishes long-term partnerships that benefit our clients 
              through competitive pricing and reliable delivery schedules.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Vendor Management</h3>
            <p className="mb-6">
              Our vendor management program includes pre-qualification processes, performance 
              monitoring, and continuous improvement initiatives. We maintain a global network 
              of qualified suppliers and regularly assess their capabilities to ensure they 
              meet our stringent quality and delivery requirements.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Material Management</h3>
            <p className="mb-6">
              From initial material take-offs to final delivery and receipt, we manage every 
              aspect of the material supply chain. Our material management services include 
              inventory optimization, logistics coordination, and quality assurance testing 
              to ensure all materials meet project specifications.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Equipment Procurement</h3>
            <p className="mb-6">
              We specialize in procuring complex industrial equipment including pressure vessels, 
              heat exchangers, pumps, compressors, and specialized process equipment. Our technical 
              evaluation process ensures equipment selection optimizes performance while meeting 
              budget and schedule requirements.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Global supply chain and logistics operations"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Global Supply Network</h4>
            <p className="text-lovable-text-light">
              Our extensive supplier network spans multiple continents, ensuring competitive 
              pricing and reliable delivery for projects worldwide.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Procurement Expertise</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Contract Negotiation</li>
              <li>• Quality Assurance Programs</li>
              <li>• Logistics Coordination</li>
              <li>• Risk Management</li>
              <li>• Cost Optimization</li>
              <li>• Delivery Schedule Management</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default KeyServicesProcurement;
