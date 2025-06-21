
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const KeyServicesProjectManagement = () => {
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
    { title: 'Project Management' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Key Services"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Project Management Services</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Our project management services provide comprehensive oversight and coordination 
              throughout the entire project lifecycle. With proven methodologies and experienced 
              project managers, we ensure successful delivery of complex industrial projects 
              on time, within budget, and to the highest quality standards.
            </p>
            
            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Integrated Project Delivery</h3>
            <p className="mb-6">
              We utilize integrated project delivery approaches that optimize collaboration 
              between all stakeholders. Our project management methodology encompasses 
              planning, execution, monitoring, and control phases with clearly defined 
              deliverables and milestones throughout the project lifecycle.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Risk Management</h3>
            <p className="mb-6">
              Our comprehensive risk management program identifies, assesses, and mitigates 
              potential project risks before they impact schedule or budget. We maintain 
              detailed risk registers and implement proactive mitigation strategies that 
              minimize project uncertainties and ensure successful outcomes.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Schedule and Cost Control</h3>
            <p className="mb-6">
              We implement robust schedule and cost control systems that provide real-time 
              visibility into project progress and financial performance. Our earned value 
              management approach enables accurate forecasting and early identification of 
              potential deviations from planned targets.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Stakeholder Management</h3>
            <p className="mb-6">
              Effective stakeholder communication and engagement is central to our project 
              management approach. We maintain regular communication with all project 
              stakeholders through structured reporting, progress meetings, and collaborative 
              decision-making processes that ensure alignment throughout the project.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Project management team coordinating industrial project"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Proven Excellence</h4>
            <p className="text-lovable-text-light">
              Our project management expertise ensures successful delivery of 
              complex projects through disciplined execution and proactive leadership.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">PM Capabilities</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Integrated Project Planning</li>
              <li>• Risk and Opportunity Management</li>
              <li>• Schedule and Cost Control</li>
              <li>• Quality Management Systems</li>
              <li>• Stakeholder Communication</li>
              <li>• Change Management</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default KeyServicesProjectManagement;
