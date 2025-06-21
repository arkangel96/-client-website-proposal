
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const AboutLocation = () => {
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
    { title: 'Location' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="About Us"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Our Locations</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Best Engineers Inc operates from strategically located offices around the world, 
              enabling us to serve our clients with local expertise while maintaining 
              global standards of excellence. Our presence spans multiple continents, 
              ensuring we can provide responsive support wherever our clients need us.
            </p>
            
            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Global Headquarters</h3>
            <p className="mb-6">
              Our global headquarters houses our executive leadership, corporate functions, 
              and central engineering teams. The facility features state-of-the-art design 
              centers, advanced computing resources, and collaborative spaces that foster 
              innovation and technical excellence.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Regional Offices</h3>
            <p className="mb-6">
              We maintain regional offices in key industrial centers worldwide, each 
              staffed with experienced professionals who understand local markets, 
              regulations, and business practices. These offices provide project 
              management, engineering support, and client services tailored to 
              regional requirements.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Project Offices</h3>
            <p className="mb-6">
              For major projects, we establish dedicated project offices at or near 
              client sites to ensure seamless communication and rapid response to 
              project needs. These temporary facilities provide full engineering and 
              project management capabilities throughout the project lifecycle.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Future Expansion</h3>
            <p className="mb-6">
              We continue to evaluate opportunities for strategic expansion into new 
              markets and regions. Our growth strategy focuses on establishing presence 
              in emerging markets while strengthening our capabilities in existing locations.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              alt="Global office locations and facilities"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Global Presence</h4>
            <p className="text-lovable-text-light">
              Strategic office locations worldwide enable us to provide local 
              support with global capabilities and standards.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Office Network</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• North America: 5 Offices</li>
              <li>• Europe: 4 Offices</li>
              <li>• Asia Pacific: 6 Offices</li>
              <li>• Middle East: 3 Offices</li>
              <li>• South America: 2 Offices</li>
              <li>• Project Offices: 15+ Active</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default AboutLocation;
