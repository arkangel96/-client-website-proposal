
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const Recruitment = () => {
  const sidebarItems = [
    { title: 'Ideal Talent', href: '/recruitment-ideal-talent' },
    { title: 'Welfare Policy', href: '/recruitment-welfare-policy' },
    { title: 'Recruitment Pool Registration', href: '/recruitment-recruitment-pool-registration' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Recruitment' }
  ];

  return (
    <SubpageLayout 
      sidebarItems={sidebarItems} 
      sidebarTitle="Recruitment" 
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
            Join Our Team
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700" style={{ fontFamily: 'Arial, sans-serif' }}>
            <p className="mb-6 text-lg font-semibold text-[#0055A4]">
              Join our team of skilled engineers and innovators.
            </p>
            <p className="mb-6 leading-relaxed">
              At Best Engineers Inc., our people are our greatest asset. We seek talented 
              professionals who share our passion for engineering excellence, innovation, 
              and commitment to delivering exceptional results for our clients.
            </p>
            
            <p className="mb-6 leading-relaxed">
              We offer a dynamic work environment where creativity and technical expertise 
              are valued and rewarded. Our comprehensive benefits package, professional 
              development opportunities, and collaborative culture make Best Engineers Inc. an 
              ideal place to build a rewarding career in industrial engineering.
            </p>

            <p className="mb-6 leading-relaxed">
              Whether you're an experienced professional or a recent graduate, we provide 
              opportunities to work on challenging projects, develop new skills, and 
              contribute to innovative solutions that shape the future of industrial engineering.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-gray-50 border border-gray-200 p-6 rounded">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Professional team collaboration and development"
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>
              Career Growth
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
              We invest in our employees' professional development through training programs, 
              mentorship opportunities, and challenging project assignments.
            </p>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default Recruitment;
