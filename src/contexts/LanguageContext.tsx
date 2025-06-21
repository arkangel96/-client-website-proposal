
import React, { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
}

const translations = {
  // Menu items
  home: "Home",
  about_us: "About Us",
  key_services: "Key Services",
  businesses: "Businesses",
  core_technologies: "Core Technologies",
  sustainability: "Sustainability",
  recruitment: "Recruitment",
  news: "News",
  
  // Page descriptions
  home_description: "Welcome to Best Engineers Inc, providing innovative engineering solutions for tomorrow's industrial challenges.",
  about_description: "We are a team dedicated to delivering cutting-edge engineering services with a focus on sustainability.",
  key_services_description: "Our services include industrial solutions, technical support, and project management.",
  businesses_description: "We partner with leading businesses to drive industrial innovation.",
  core_technologies_description: "Explore our advanced technologies in automation and smart systems.",
  sustainability_description: "Committed to sustainable practices for a greener future.",
  recruitment_description: "Join our team of skilled engineers and innovators.",
  news_description: "Stay updated with the latest news and achievements from Best Engineers Inc."
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const t = (key: string): string => {
    return translations[key as keyof typeof translations] || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
