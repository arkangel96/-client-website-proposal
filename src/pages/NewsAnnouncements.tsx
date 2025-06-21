import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const NewsAnnouncements = () => {
  const sidebarItems = [
    { title: 'Announcements', href: '/news-announcements' },
    { title: 'Company Brochure', href: '/news-company-brochure' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'News', href: '/news' },
    { title: 'Announcements' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="News"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-lovable-text mb-6">Company Announcements</h1>

        <div className="space-y-6">
          <article className="border border-gray-200 rounded-lg p-6 hover-lift">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-lovable-text mb-2">
                  Best Engineers Inc. Completes Major Petrochemical Facility in Gulf Coast
                </h2>
                <p className="text-lovable-blue font-medium">May 15, 2025</p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Project Completion
              </span>
            </div>
            <p className="text-lovable-text-light mb-4">
              We are proud to announce the successful completion of a $850 million ethylene complex
              project in Texas. The facility features advanced energy integration systems and
              represents a new benchmark for efficiency in petrochemical processing.
            </p>
            <a href="#" className="text-lovable-blue hover:text-lovable-blue-hover font-medium">
              Read Full Article →
            </a>
          </article>

          <article className="border border-gray-200 rounded-lg p-6 hover-lift">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-lovable-text mb-2">
                  New Patent Approved for Advanced Flare Stack Technology
                </h2>
                <p className="text-lovable-blue font-medium">May 8, 2025</p>
              </div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Innovation
              </span>
            </div>
            <p className="text-lovable-text-light mb-4">
              Our latest patent for smokeless flare technology has been approved, offering
              improved environmental performance and operational efficiency for industrial facilities.
            </p>
            <a href="#" className="text-lovable-blue hover:text-lovable-blue-hover font-medium">
              Read Full Article →
            </a>
          </article>

          <article className="border border-gray-200 rounded-lg p-6 hover-lift">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-lovable-text mb-2">
                  Strategic Partnership Announced for Hydrogen Production Technologies
                </h2>
                <p className="text-lovable-blue font-medium">April 28, 2025</p>
              </div>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                Partnership
              </span>
            </div>
            <p className="text-lovable-text-light mb-4">
              Best Engineers Inc. has entered into a strategic partnership to develop next-generation
              hydrogen production facilities, supporting the global transition to clean energy.
            </p>
            <a href="#" className="text-lovable-blue hover:text-lovable-blue-hover font-medium">
              Read Full Article →
            </a>
          </article>

          <article className="border border-gray-200 rounded-lg p-6 hover-lift">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-lovable-text mb-2">
                  ISO 14001:2015 Environmental Management Certification Renewed
                </h2>
                <p className="text-lovable-blue font-medium">April 20, 2025</p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Certification
              </span>
            </div>
            <p className="text-lovable-text-light mb-4">
              Our commitment to environmental stewardship has been recognized with the renewal
              of our ISO 14001:2015 Environmental Management System certification.
            </p>
            <a href="#" className="text-lovable-blue hover:text-lovable-blue-hover font-medium">
              Read Full Article →
            </a>
          </article>

          <article className="border border-gray-200 rounded-lg p-6 hover-lift">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-lovable-text mb-2">
                  New Regional Office Opens in Singapore
                </h2>
                <p className="text-lovable-blue font-medium">March 30, 2025</p>
              </div>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                Expansion
              </span>
            </div>
            <p className="text-lovable-text-light mb-4">
              To better serve our Asia-Pacific clients, we have opened a new regional office
              in Singapore, strengthening our global presence and local capabilities.
            </p>
            <a href="#" className="text-lovable-blue hover:text-lovable-blue-hover font-medium">
              Read Full Article →
            </a>
          </article>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default NewsAnnouncements;
