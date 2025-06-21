
import React from 'react';
import SubpageLayout from '../components/SubpageLayout';

const RecruitmentWelfarePolicy = () => {
  const sidebarItems = [
    { title: 'Ideal Talent', href: '/recruitment-ideal-talent' },
    { title: 'Welfare Policy', href: '/recruitment-welfare-policy' },
    { title: 'Recruitment Pool Registration', href: '/recruitment-recruitment-pool-registration' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Recruitment', href: '/recruitment' },
    { title: 'Welfare Policy' }
  ];

  return (
    <SubpageLayout
      sidebarItems={sidebarItems}
      sidebarTitle="Recruitment"
      breadcrumbItems={breadcrumbItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-lovable-text mb-6">Employee Welfare Policy</h1>
          <div className="prose prose-lg max-w-none text-lovable-text-light">
            <p className="mb-6">
              Best Engineers Inc. is committed to providing comprehensive welfare benefits 
              that support the health, wellbeing, and professional development of 
              our employees. Our welfare policy reflects our belief that taking 
              care of our people is essential for achieving exceptional results 
              and maintaining a positive work environment.
            </p>
            
            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Health & Medical Benefits</h3>
            <p className="mb-6">
              We provide comprehensive health insurance coverage including medical, 
              dental, and vision care for employees and their families. Regular 
              health screenings, wellness programs, and mental health support 
              services are available to promote overall wellbeing.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Work-Life Balance</h3>
            <p className="mb-6">
              Our flexible work arrangements, generous vacation policies, and 
              family-friendly benefits help employees maintain a healthy work-life 
              balance. We offer remote work options, flexible schedules, and 
              parental leave programs that support diverse life circumstances.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Professional Development</h3>
            <p className="mb-6">
              We invest in our employees' growth through training programs, 
              educational assistance, professional certifications, and career 
              development opportunities. Mentorship programs and leadership 
              development initiatives support long-term career advancement.
            </p>

            <h3 className="text-2xl font-semibold text-lovable-text mb-4">Financial Security</h3>
            <p className="mb-6">
              Our compensation philosophy includes competitive salaries, performance 
              bonuses, retirement savings plans with company matching, and stock 
              participation programs. Financial planning assistance and emergency 
              support funds provide additional security for our employees.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-lovable-gray p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095"
              alt="Employee wellness and benefits programs"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Comprehensive Benefits</h4>
            <p className="text-lovable-text-light">
              Comprehensive welfare policy designed to support employee 
              wellbeing, professional growth, and financial security.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-lovable-text mb-3">Benefit Categories</h4>
            <ul className="text-lovable-text-light space-y-2">
              <li>• Health Insurance</li>
              <li>• Retirement Plans</li>
              <li>• Flexible Work</li>
              <li>• Training Programs</li>
              <li>• Wellness Support</li>
              <li>• Family Benefits</li>
            </ul>
          </div>
        </div>
      </div>
    </SubpageLayout>
  );
};

export default RecruitmentWelfarePolicy;
