import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const AboutCeoMessage = () => {
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
    { title: 'CEO Message' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="About Us"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Message from the CEO</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6 italic text-xl">
              "At Best Engineers Inc, we believe that engineering excellence is not just about
              technical competence—it's about creating solutions that make a meaningful
              difference in the world."
            </p>

            <p className="mb-6">
              Welcome to Best Engineers Inc. As CEO, I am proud to lead a company that has
              consistently pushed the boundaries of engineering innovation while maintaining
              an unwavering commitment to safety, quality, and environmental stewardship.
            </p>

            <p className="mb-6">
              Since our founding in 2010, we have grown from a small engineering consultancy
              to a global leader in industrial project delivery. This growth has been driven
              by our talented team of professionals who share a passion for solving complex
              challenges and delivering exceptional results for our clients.
            </p>

            <p className="mb-6">
              Our success is built on three fundamental pillars: technical excellence,
              client partnership, and sustainable practices. We invest heavily in our
              people, technology, and processes to ensure that we remain at the forefront
              of industry innovation while delivering projects that exceed expectations.
            </p>

            <p className="mb-6">
              Looking ahead, we are excited about the opportunities to contribute to the
              energy transition, develop cleaner technologies, and continue building
              lasting partnerships with our clients around the world. Thank you for
              your trust in Best Engineers Inc.
            </p>

            <p className="mb-6 font-semibold">
              Sincerely,<br />
              [CEO Name]<br />
              Chief Executive Officer
            </p>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="CEO of Best Engineers Inc."
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Leadership Vision</h4>
            <p className="text-lovable-text-light">
              Our leadership team is committed to driving innovation and excellence
              while building a sustainable future for all stakeholders.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Leadership Principles</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Client-Focused Approach</li>
              <li>• Innovation and Technology</li>
              <li>• Employee Development</li>
              <li>• Environmental Responsibility</li>
              <li>• Operational Excellence</li>
              <li>• Global Perspective</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default AboutCeoMessage;
