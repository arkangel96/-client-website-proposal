
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const AboutValues = () => {
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
    { title: 'Values' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="About Us"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Our Values</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              At Best Engineers Inc, our core values define who we are and guide every decision 
              we make. These principles form the foundation of our corporate culture and 
              drive our commitment to excellence in everything we do.
            </p>
            
            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Innovation</h3>
            <p className="mb-6">
              We embrace innovation as a driving force for continuous improvement and 
              competitive advantage. Our commitment to research and development, combined 
              with our willingness to adopt new technologies and methodologies, enables 
              us to deliver cutting-edge solutions that exceed client expectations.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Integrity</h3>
            <p className="mb-6">
              Integrity is fundamental to all our relationships and business practices. 
              We conduct business with honesty, transparency, and ethical behavior, 
              building trust with our clients, partners, and stakeholders through 
              consistent and reliable performance.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Excellence</h3>
            <p className="mb-6">
              We pursue excellence in every aspect of our operations, from project 
              execution to client service. Our commitment to quality, attention to detail, 
              and continuous improvement ensures that we consistently deliver superior 
              results that create lasting value for our clients.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Sustainability</h3>
            <p className="mb-6">
              Environmental stewardship and sustainable practices are integral to our 
              business strategy. We design and implement solutions that minimize 
              environmental impact while maximizing operational efficiency and 
              economic value for our clients and communities.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"
              alt="Team collaboration representing our core values"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Living Our Values</h4>
            <p className="text-lovable-text-light">
              Our values are not just words on a page - they guide our daily actions 
              and decisions, shaping the culture and character of our organization.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Our Commitment</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Client Satisfaction</li>
              <li>• Employee Development</li>
              <li>• Environmental Protection</li>
              <li>• Community Engagement</li>
              <li>• Continuous Improvement</li>
              <li>• Ethical Business Practices</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default AboutValues;
