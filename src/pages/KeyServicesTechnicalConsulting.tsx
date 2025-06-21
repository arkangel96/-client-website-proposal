
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const KeyServicesTechnicalConsulting = () => {
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
    { title: 'Technical Consulting' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Key Services"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Technical Consulting Services</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Our technical consulting services provide specialized expertise and strategic 
              guidance for complex engineering challenges. With deep industry knowledge and 
              proven technical capabilities, we help clients optimize their operations, 
              resolve technical issues, and implement innovative solutions that drive 
              competitive advantage.
            </p>
            
            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Strategic Technical Advisory</h3>
            <p className="mb-6">
              We provide high-level technical advisory services that help clients make 
              informed decisions about technology selection, process optimization, and 
              strategic investments. Our consultants bring decades of industry experience 
              and stay current with emerging technologies and industry trends.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Process Optimization</h3>
            <p className="mb-6">
              Our process optimization services identify opportunities to improve efficiency, 
              reduce costs, and enhance performance in existing facilities. We utilize 
              advanced modeling and simulation tools to evaluate improvement scenarios 
              and provide detailed recommendations for implementation.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Technology Assessment</h3>
            <p className="mb-6">
              We conduct comprehensive technology assessments that evaluate existing 
              systems and identify opportunities for modernization and improvement. 
              Our assessments include technical feasibility studies, economic analysis, 
              and implementation roadmaps for technology upgrades.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Problem Solving and Troubleshooting</h3>
            <p className="mb-6">
              Our technical experts provide rapid response for complex operational issues 
              and technical problems. We utilize systematic problem-solving methodologies 
              and advanced diagnostic tools to quickly identify root causes and implement 
              effective solutions that restore optimal performance.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Technical consulting experts analyzing industrial systems"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Expert Knowledge</h4>
            <p className="text-lovable-text-light">
              Our consulting team combines deep technical expertise with practical 
              industry experience to deliver actionable solutions.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Consulting Areas</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Process Optimization Studies</li>
              <li>• Technology Assessment</li>
              <li>• Feasibility Studies</li>
              <li>• Troubleshooting Support</li>
              <li>• Regulatory Compliance</li>
              <li>• Training and Development</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default KeyServicesTechnicalConsulting;
