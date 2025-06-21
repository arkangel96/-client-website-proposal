import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const RecruitmentIdealTalent = () => {
  const sidebarItems = [
    { title: 'Ideal Talent', href: '/recruitment-ideal-talent' },
    { title: 'Welfare Policy', href: '/recruitment-welfare-policy' },
    { title: 'Recruitment Pool Registration', href: '/recruitment-recruitment-pool-registration' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Recruitment', href: '/recruitment' },
    { title: 'Ideal Talent' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Recruitment"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Ideal Talent Profile</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Best Engineers Inc. seeks exceptional individuals who share our passion
              for engineering excellence, innovation, and sustainable development.
              Our ideal candidates combine technical expertise with strong values,
              leadership potential, and a commitment to making a positive impact
              in the engineering industry.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Technical Excellence</h3>
            <p className="mb-6">
              We value candidates with strong technical foundations in engineering
              disciplines, whether in chemical, mechanical, electrical, or civil
              engineering. Advanced degrees, professional certifications, and
              hands-on experience with complex industrial projects are highly valued.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Innovation Mindset</h3>
            <p className="mb-6">
              Our ideal talent demonstrates creative problem-solving abilities,
              embraces new technologies, and contributes to continuous improvement
              initiatives. We seek individuals who can think outside conventional
              boundaries and develop innovative solutions to complex challenges.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Leadership Potential</h3>
            <p className="mb-6">
              We look for individuals who can lead teams, mentor colleagues, and
              drive positive change within our organization. Strong communication
              skills, collaborative spirit, and the ability to inspire others
              are essential qualities we seek in our team members.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Global Perspective</h3>
            <p className="mb-6">
              As a global organization, we value candidates with international
              experience, cultural awareness, and language skills. The ability
              to work effectively across different cultures and time zones is
              increasingly important in our interconnected world.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Diverse engineering team collaborating on projects"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Join Our Team</h4>
            <p className="text-lovable-text-light">
              Become part of a dynamic team that values innovation,
              excellence, and sustainable engineering solutions.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Key Qualities</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Technical Expertise</li>
              <li>• Innovation Mindset</li>
              <li>• Leadership Skills</li>
              <li>• Global Perspective</li>
              <li>• Sustainability Focus</li>
              <li>• Collaborative Spirit</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default RecruitmentIdealTalent;
