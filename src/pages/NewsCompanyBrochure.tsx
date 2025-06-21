import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const NewsCompanyBrochure = () => {
  const sidebarItems = [
    { title: 'Announcements', href: '/news-announcements' },
    { title: 'Company Brochure', href: '/news-company-brochure' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'News', href: '/news' },
    { title: 'Company Brochure' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="News"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Company Brochure & Resources</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Access our comprehensive company brochure and technical resources to learn more
              about Best Engineers Inc.'s capabilities, services, and industry-leading solutions.
              Our detailed documentation provides insights into our expertise and approach
              to engineering excellence.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Available Downloads</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-lovable-text mb-3">Company Overview Brochure</h4>
                <p className="text-lovable-text-light mb-4">
                  Comprehensive overview of our services, capabilities, and project portfolio.
                  Perfect for stakeholders and potential clients.
                </p>
                <div className="text-sm text-lovable-text-light mb-4">
                  • 24 pages | PDF | 5.2 MB<br />
                  • Updated: May 2025
                </div>
                <a
                  href="#"
                  className="inline-block bg-lovable-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-lovable-blue-hover transition-colors"
                >
                  Download PDF
                </a>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-lovable-text mb-3">Technical Capabilities Guide</h4>
                <p className="text-lovable-text-light mb-4">
                  Detailed technical specifications and engineering capabilities across
                  all our service areas and industry sectors.
                </p>
                <div className="text-sm text-lovable-text-light mb-4">
                  • 36 pages | PDF | 8.1 MB<br />
                  • Updated: May 2025
                </div>
                <a
                  href="#"
                  className="inline-block bg-lovable-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-lovable-blue-hover transition-colors"
                >
                  Download PDF
                </a>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-lovable-text mb-3">Project Portfolio Showcase</h4>
                <p className="text-lovable-text-light mb-4">
                  Featured case studies and project highlights demonstrating our
                  expertise across petrochemical, refinery, and power generation sectors.
                </p>
                <div className="text-sm text-lovable-text-light mb-4">
                  • 48 pages | PDF | 12.3 MB<br />
                  • Updated: April 2025
                </div>
                <a
                  href="#"
                  className="inline-block bg-lovable-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-lovable-blue-hover transition-colors"
                >
                  Download PDF
                </a>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-lovable-text mb-3">Safety & Quality Standards</h4>
                <p className="text-lovable-text-light mb-4">
                  Comprehensive documentation of our safety protocols, quality management
                  systems, and industry certifications.
                </p>
                <div className="text-sm text-lovable-text-light mb-4">
                  • 28 pages | PDF | 4.7 MB<br />
                  • Updated: March 2025
                </div>
                <a
                  href="#"
                  className="inline-block bg-lovable-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-lovable-blue-hover transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Request Custom Materials</h3>
            <p className="mb-6">
              Need specific technical documentation or custom presentations for your project?
              Our marketing team can provide tailored materials to support your requirements.
            </p>

            <a
              href="#"
              className="inline-block bg-lovable-gray text-lovable-text px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
            >
              Request Custom Materials
            </a>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-lovable-gray p-6 rounded-lg mb-6">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Company brochure and technical documentation"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Stay Updated</h4>
            <p className="text-lovable-text-light mb-4">
              Subscribe to our newsletter to receive updates when new brochures
              and technical resources become available.
            </p>
            <a
              href="#"
              className="inline-block bg-lovable-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-lovable-blue-hover transition-colors"
            >
              Subscribe Now
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Quick Facts</h4>
            <div className="space-y-3 text-lovable-text-light">
              <div>
                <strong>Founded:</strong> 2010
              </div>
              <div>
                <strong>Employees:</strong> 200+
              </div>
              <div>
                <strong>Projects Completed:</strong> 500+
              </div>
              <div>
                <strong>Countries Served:</strong> 25+
              </div>
              <div>
                <strong>Total Investment Value:</strong> $25B+
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default NewsCompanyBrochure;
