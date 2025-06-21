import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';

interface SubpageLayoutProps {
  children: React.ReactNode;
  sidebarItems: Array<{ title: string; href: string }>;
  sidebarTitle: string;
  breadcrumbItems: Array<{ title: string; href?: string }>;
}

const SubpageLayout: React.FC<SubpageLayoutProps> = ({
  children,
  sidebarItems,
  sidebarTitle,
  breadcrumbItems
}) => {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header darkOnLight={true} />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="flex">
            <Sidebar items={sidebarItems} title={sidebarTitle} />
            <div className="flex-1">
              <div className="px-8 py-6">
                <Breadcrumb items={breadcrumbItems} />
                <div className="animate-fade-in">
                  {children}
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

export default SubpageLayout;
