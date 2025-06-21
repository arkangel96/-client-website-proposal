
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const RecruitmentRecruitmentPoolRegistration = () => {
  const sidebarItems = [
    { title: 'Ideal Talent', href: '/recruitment-ideal-talent' },
    { title: 'Welfare Policy', href: '/recruitment-welfare-policy' },
    { title: 'Recruitment Pool Registration', href: '/recruitment-recruitment-pool-registration' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Recruitment', href: '/recruitment' },
    { title: 'Recruitment Pool Registration' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Recruitment"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Recruitment Pool Registration</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Join the Best Engineers Inc. talent pool to be considered for future 
              opportunities that match your skills and career aspirations. 
              Our recruitment pool registration allows us to maintain connections 
              with qualified professionals and reach out when suitable positions 
              become available.
            </p>
            
            <p className="mb-6">
              Registration in our talent pool provides early access to job 
              opportunities, invitations to networking events, and insights 
              into our company culture and values. We regularly review profiles 
              in our database when new positions open across our global operations.
            </p>

            <p className="mb-6">
              The registration process is simple and allows you to showcase 
              your experience, skills, and career interests. You can update 
              your profile at any time to reflect new qualifications, experience, 
              or changes in your career objectives.
            </p>

            <p className="mb-6">
              We respect your privacy and career choices. Information provided 
              during registration is kept confidential and used only for 
              recruitment purposes. You control your participation and can 
              opt out at any time.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-lovable-text mb-4">How to Register</h3>
              <p className="text-lovable-text-light mb-4">
                To join our recruitment pool, please provide the following information:
              </p>
              <ul className="text-lovable-text-light space-y-2 mb-6">
                <li>• Complete resume/CV with education and experience</li>
                <li>• Professional certifications and licenses</li>
                <li>• Career objectives and preferred locations</li>
                <li>• Salary expectations and availability</li>
                <li>• Portfolio or project examples (if applicable)</li>
                <li>• Professional references</li>
              </ul>
              <div className="space-y-4">
                <a 
                  href="mailto:careers@Best Engineers Inc." 
                  className="inline-block bg-lovable-blue text-white px-6 py-3 rounded-lg hover:bg-lovable-blue-hover transition-colors mr-4"
                >
                  Submit Application
                </a>
                <a 
                  href="mailto:careers@Best Engineers Inc.?subject=Current Openings Inquiry" 
                  className="inline-block border border-lovable-blue text-lovable-blue px-6 py-3 rounded-lg hover:bg-lovable-blue hover:text-white transition-colors"
                >
                  View Current Openings
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Professional recruitment and talent acquisition"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Join Our Network</h4>
            <p className="text-lovable-text-light">
              Connect with our recruitment team and be the first to know 
              about exciting career opportunities at Best Engineers Inc..
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Registration Benefits</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Early Job Access</li>
              <li>• Networking Events</li>
              <li>• Company Updates</li>
              <li>• Career Guidance</li>
              <li>• Skills Development</li>
              <li>• Global Opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default RecruitmentRecruitmentPoolRegistration;
