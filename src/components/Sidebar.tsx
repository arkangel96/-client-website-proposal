
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarItem {
  title: string;
  href: string;
}

interface SidebarProps {
  items: SidebarItem[];
  title: string;
}

const Sidebar: React.FC<SidebarProps> = ({ items, title }) => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-[#0055A4] border-r border-blue-300 p-0 animate-slide-in-right">
      <div className="bg-[#003d7a] px-6 py-4 border-b border-blue-300">
        <h3 className="text-lg font-semibold text-white uppercase tracking-wide" style={{ fontFamily: 'Arial, sans-serif' }}>
          {title}
        </h3>
      </div>
      <nav className="py-2">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`block px-6 py-3 text-sm font-medium transition-all duration-200 border-b border-blue-300/30 ${
              location.pathname === item.href
                ? 'bg-[#003d7a] text-white border-l-4 border-white'
                : 'text-white hover:bg-blue-600 hover:border-l-4 hover:border-blue-200'
            }`}
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
