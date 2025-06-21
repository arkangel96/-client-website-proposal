import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const SustainabilityQualityManagement = () => {
  const sidebarItems = [
    { title: 'Quality Management', href: '/sustainability-quality-management' },
    { title: 'Environmental Management', href: '/sustainability-environmental-management' },
    { title: 'Safety/Health Management', href: '/sustainability-safety-health-management' },
    { title: 'Ethics/Compliance Management', href: '/sustainability-ethics-compliance-management' },
    { title: 'Ethics/Compliance Report Center', href: '/sustainability-ethics-compliance-report-center' },
    { title: 'Security Policy', href: '/sustainability-security-policy' },
    { title: 'New Business Partner Registration', href: '/sustainability-new-business-partner-registration' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Sustainability', href: '/sustainability' },
    { title: 'Quality Management' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Sustainability"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Quality Management</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Our quality management system is the cornerstone of our operational excellence,
              ensuring that every project meets or exceeds client expectations while maintaining
              the highest standards of safety, reliability, and performance.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">ISO 9001:2015 Certification</h3>
            <p className="mb-6">
              Best Engineers Inc. is certified to ISO 9001:2015 Quality Management Systems standard,
              demonstrating our commitment to consistent quality delivery and continuous improvement.
              Our QMS covers all aspects of project execution from initial design through final
              commissioning and handover.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Quality Assurance Processes</h3>
            <ul className="mb-6 space-y-2">
              <li>• <strong>Design Review and Verification:</strong> Multi-stage design reviews ensure technical accuracy</li>
              <li>• <strong>Document Control:</strong> Systematic management of all project documentation</li>
              <li>• <strong>Supplier Quality Management:</strong> Rigorous supplier qualification and monitoring</li>
              <li>• <strong>Inspection and Testing:</strong> Comprehensive QA/QC programs for all deliverables</li>
              <li>• <strong>Non-Conformance Management:</strong> Systematic identification and resolution of quality issues</li>
              <li>• <strong>Continuous Improvement:</strong> Regular management reviews and process optimization</li>
            </ul>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Quality Control Procedures</h3>
            <p className="mb-6">
              Our quality control procedures include detailed inspection and testing protocols
              for all project phases. We maintain qualified quality control personnel and
              utilize advanced testing equipment to verify compliance with specifications
              and industry standards.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Performance Metrics</h3>
            <p className="mb-6">
              We track key performance indicators including on-time delivery, budget compliance,
              rework rates, and client satisfaction scores. These metrics drive our continuous
              improvement initiatives and ensure consistent quality performance across all projects.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
              alt="Quality management certification and standards documentation"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Certified Excellence</h4>
            <p className="text-lovable-text-light">
              Our ISO 9001:2015 certification demonstrates our commitment to maintaining
              internationally recognized quality management standards.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Quality Statistics</h4>
            <div className="space-y-3 text-lovable-text-light">
              <div className="flex justify-between">
                <span>On-Time Delivery:</span>
                <span className="font-semibold text-green-600">98.5%</span>
              </div>
              <div className="flex justify-between">
                <span>Client Satisfaction:</span>
                <span className="font-semibold text-green-600">4.8/5.0</span>
              </div>
              <div className="flex justify-between">
                <span>Rework Rate:</span>
                <span className="font-semibold text-green-600">{'<'} 1%</span>
              </div>
              <div className="flex justify-between">
                <span>ISO Compliance:</span>
                <span className="font-semibold text-green-600">100%</span>
              </div>
            </div>
          </div>

          <div className="bg-lovable-blue text-white p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-3">Download Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm hover:underline">
                Quality Management Manual
              </a>
              <a href="#" className="block text-sm hover:underline">
                ISO 9001:2015 Certificate
              </a>
              <a href="#" className="block text-sm hover:underline">
                Quality Policy Statement
              </a>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default SustainabilityQualityManagement;
