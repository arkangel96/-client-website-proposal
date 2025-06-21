
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';
import ServicesCarousel from '../components/ServicesCarousel';

const KeyServices = () => {
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
    { title: 'Services' }
  ];

  return (
    <SubpageLayout 
      sidebarItems={sidebarItems} 
      sidebarTitle="Services" 
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
            Our Services
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700" style={{ fontFamily: 'Arial, sans-serif' }}>
            <p className="mb-6 text-lg font-semibold text-[#0055A4]">
              Our services include industrial solutions, technical support, and project management.
            </p>
            
            <p className="mb-6 leading-relaxed">
              Best Engineers Inc. offers comprehensive engineering solutions that span the entire 
              project lifecycle. Our integrated approach combines technical expertise, 
              innovative methodologies, and proven project management practices to deliver 
              exceptional results for our clients.
            </p>
            
            <p className="mb-6 leading-relaxed">
              From initial concept development through final commissioning, our multidisciplinary 
              teams work collaboratively to ensure every project meets the highest standards 
              of quality, safety, and efficiency. Our services are designed to address the 
              unique challenges of the petrochemical, refinery, and power generation industries.
            </p>

            <p className="mb-6 leading-relaxed">
              With decades of combined experience and a commitment to continuous innovation, 
              we provide our clients with competitive advantages through optimized designs, 
              streamlined processes, and cutting-edge technology solutions.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-gray-50 border border-gray-200 p-6 rounded">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Engineering services and project management"
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>
              Integrated Solutions
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
              Our comprehensive service portfolio ensures seamless project execution 
              from conception to completion, delivering maximum value to our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Services Carousel Section */}
      <div className="bg-gray-50 border border-gray-200 py-12 -mx-8 px-8 rounded mt-12">
        <ServicesCarousel />
      </div>
    </SubpageLayout>
  );
};

export default KeyServices;
