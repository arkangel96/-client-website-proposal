import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const AboutHistory = () => {
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
    { title: 'History' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="About Us"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Our History</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <h3 className="text-2xl font-semibold text-lovable-text mb-4">2010 - Foundation</h3>
            <p className="mb-6">
              Best Engineers Inc. was founded by a team of experienced engineers with a vision
              to provide innovative engineering solutions for the industrial sector.
              Starting with a small office and five employees, we began by focusing on
              process engineering consulting for petrochemical facilities.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">2012-2015 - Early Growth</h3>
            <p className="mb-6">
              During our early years, we expanded our service offerings to include
              detailed engineering and procurement services. We completed our first
              major EPC project, a $50 million petrochemical processing unit, establishing
              our reputation for quality and reliability in the industry.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">2016-2019 - International Expansion</h3>
            <p className="mb-6">
              We opened our first international office and began serving clients across
              multiple continents. This period saw significant growth in our project
              portfolio, with successful completion of several large-scale refinery
              and power generation projects totaling over $2 billion in value.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">2020-2023 - Innovation and Technology</h3>
            <p className="mb-6">
              We invested heavily in digital transformation and advanced technologies,
              implementing cutting-edge design tools and project management systems.
              Our focus on innovation led to the development of several proprietary
              technologies and the filing of multiple patents.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">2024-Present - Sustainable Future</h3>
            <p className="mb-6">
              Today, Best Engineers Inc. stands as a global leader in industrial engineering,
              with a renewed focus on sustainable technologies and clean energy solutions.
              We continue to grow while maintaining our commitment to excellence and
              environmental stewardship.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Timeline of company milestones and achievements"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Milestones</h4>
            <p className="text-lovable-text-light">
              Over 15 years of continuous growth, innovation, and achievement
              in the engineering industry.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Key Achievements</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• 2011: First Major Project</li>
              <li>• 2016: International Expansion</li>
              <li>• 2019: $1B Project Milestone</li>
              <li>• 2021: ISO Certifications</li>
              <li>• 2023: Technology Patents</li>
              <li>• 2025: Sustainability Leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default AboutHistory;
