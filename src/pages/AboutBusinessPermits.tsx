import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const AboutBusinessPermits = () => {
  const sidebarItems = [
    { title: 'Overview', href: '/about-overview' },
    { title: 'Values', href: '/about-values' },
    { title: 'CEO Message', href: '/about-ceo-message' },
    { title: 'History', href: '/about-history' },
    { title: 'Business Permits', href: '/about-business-permits' },
    { title: 'Location', href: '/about-location' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    { title: 'Business Permits' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="About Us"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Business Permits & Certifications</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Best Engineers Inc. maintains all necessary business permits, licenses, and
              certifications required to operate in our markets worldwide. Our
              commitment to regulatory compliance ensures that all our operations
              meet or exceed the highest industry standards.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Professional Licenses</h3>
            <p className="mb-6">
              We hold professional engineering licenses in all jurisdictions where
              we operate, ensuring that our engineering services meet local regulatory
              requirements. Our professional engineers are licensed by the appropriate
              governing bodies and maintain continuing education requirements.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Quality Certifications</h3>
            <p className="mb-6">
              Our quality management system is certified to ISO 9001:2015 standards,
              demonstrating our commitment to consistent quality delivery. We also
              maintain ISO 14001:2015 environmental management certification and
              ISO 45001:2018 occupational health and safety management certification.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Industry-Specific Permits</h3>
            <p className="mb-6">
              We maintain specialized permits and certifications required for work
              in the petrochemical, refinery, and power generation industries. These
              include pressure vessel design certifications, environmental permits,
              and safety management system approvals.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Compliance Management</h3>
            <p className="mb-6">
              Our compliance management system ensures that all permits and certifications
              are maintained current and that we meet all regulatory requirements.
              We conduct regular internal audits and maintain comprehensive documentation
              of our compliance activities.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
              alt="Business permits and certification documents"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Regulatory Compliance</h4>
            <p className="text-lovable-text-light">
              We maintain the highest standards of regulatory compliance across
              all our operations and service areas.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Key Certifications</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• ISO 9001:2015</li>
              <li>• ISO 14001:2015</li>
              <li>• ISO 45001:2018</li>
              <li>• Professional Engineering Licenses</li>
              <li>• ASME Code Certifications</li>
              <li>• Environmental Permits</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default AboutBusinessPermits;
