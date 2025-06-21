import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';
import { useLanguage } from '../contexts/LanguageContext';

const News = () => {
  const { t } = useLanguage();

  const sidebarItems = [
    { title: 'Announcements', href: '/news-announcements' },
    { title: 'Company Brochure', href: '/news-company-brochure' }
  ];

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'News' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <Sidebar items={sidebarItems} title="News" />
            <div className="flex-1 pl-8">
              <div className="py-8">
                <Breadcrumb items={breadcrumbItems} />
                <div className="animate-fade-in">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h1 className="text-4xl font-bold text-lovable-text mb-6">News & Updates</h1>
                      <div className="prose prose-lg max-w-none text-lovable-text-light">
                        <p className="mb-6 text-xl font-semibold text-lovable-blue">
                          {t('news_description')}
                        </p>
                        <p className="mb-6">
                          Stay informed about the latest developments at Best Engineers Inc., including 
                          project announcements, industry insights, and company milestones. Our 
                          news section provides regular updates on our ongoing initiatives and 
                          achievements in the engineering industry.
                        </p>
                        
                        <p className="mb-6">
                          From groundbreaking project completions to innovative technology 
                          developments, we share the stories that matter to our clients, 
                          partners, and industry stakeholders.
                        </p>

                        <p className="mb-6">
                          Access our comprehensive company resources, including detailed 
                          brochures and technical documentation, to learn more about our 
                          capabilities and service offerings.
                        </p>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-lovable-gray p-6 rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                          alt="News and industry updates"
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <h4 className="text-xl font-semibold text-lovable-text mb-3">Industry Leadership</h4>
                        <p className="text-lovable-text-light">
                          Stay connected with the latest industry trends and Best Engineers Inc.'s 
                          contributions to advancing engineering excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
