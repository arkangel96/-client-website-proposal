import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const AboutOverview = () => {
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
    { title: 'Overview' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="About Us"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Company Overview</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Best Engineers Inc is a leading engineering and construction company specializing in
              the design, engineering, procurement, and construction of complex industrial
              facilities. Founded in 2010, we have established ourselves as a trusted partner
              for clients in the petrochemical, refinery, and power generation industries.
            </p>

            <p className="mb-6">
              Our comprehensive approach combines technical excellence with innovative solutions
              to deliver projects that meet the most demanding requirements. With a team of
              experienced professionals and a commitment to continuous improvement, we have
              successfully completed over 500 projects worldwide, representing more than
              $25 billion in total investment value.
            </p>

            <p className="mb-6">
              We pride ourselves on our ability to handle projects of all sizes and complexity,
              from small modifications to large-scale grassroots facilities. Our integrated
              service offering ensures seamless project execution from initial concept through
              final commissioning and startup.
            </p>

            <p className="mb-6">
              With offices and operations spanning multiple continents, we maintain a global
              presence while providing local expertise and support. Our commitment to safety,
              quality, and environmental stewardship guides every aspect of our operations,
              ensuring that we deliver exceptional value to our clients while maintaining
              the highest standards of professional excellence.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              alt="Modern industrial facility showcasing engineering excellence"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Global Presence</h4>
            <p className="text-lovable-text-light">
              With operations in over 25 countries, we bring local expertise
              and global standards to every project we undertake.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Key Statistics</h4>
            <div className="space-y-3 text-lovable-text-light">
              <div className="flex justify-between">
                <span>Founded:</span>
                <span className="font-semibold">2010</span>
              </div>
              <div className="flex justify-between">
                <span>Employees:</span>
                <span className="font-semibold">200+</span>
              </div>
              <div className="flex justify-between">
                <span>Projects Completed:</span>
                <span className="font-semibold">500+</span>
              </div>
              <div className="flex justify-between">
                <span>Countries Served:</span>
                <span className="font-semibold">25+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default AboutOverview;
