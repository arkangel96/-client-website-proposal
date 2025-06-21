import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0055A4] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="bg-white rounded px-3 py-1 inline-block">
              <span className="text-[#0055A4] font-bold text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>
                Best Engineers Inc
              </span>
            </div>
            <div className="text-sm leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
              <p className="mb-2">
                #456, Madison Square Building, 789 Broadway<br />
                New York, NY 10003, USA
              </p>
              <p className="mb-1">Tel: 212-555-0123</p>
              <p>Fax: 212-555-0124</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide" style={{ fontFamily: 'Arial, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>
              <li><Link to="/about" className="hover:text-blue-200 transition-colors">About Us</Link></li>
              <li><Link to="/key-services" className="hover:text-blue-200 transition-colors">Services</Link></li>
              <li><Link to="/businesses" className="hover:text-blue-200 transition-colors">Project Experience</Link></li>
              <li><Link to="/core-technologies" className="hover:text-blue-200 transition-colors">Core Technologies</Link></li>
              <li><Link to="/contact" className="hover:text-blue-200 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide" style={{ fontFamily: 'Arial, sans-serif' }}>
              Services
            </h3>
            <ul className="space-y-2 text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>
              <li><Link to="/key-services-engineering" className="hover:text-blue-200 transition-colors">Engineering</Link></li>
              <li><Link to="/key-services-procurement" className="hover:text-blue-200 transition-colors">Procurement</Link></li>
              <li><Link to="/key-services-construction" className="hover:text-blue-200 transition-colors">Construction</Link></li>
              <li><Link to="/key-services-commissioning" className="hover:text-blue-200 transition-colors">Commissioning</Link></li>
              <li><Link to="/key-services-project-management" className="hover:text-blue-200 transition-colors">Project Management</Link></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide" style={{ fontFamily: 'Arial, sans-serif' }}>
              Company
            </h3>
            <div className="space-y-2 text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>
              <p>📧 info@bestengineers.com</p>
              <p>🌐 www.bestengineers.com</p>
              <p className="mt-4">
                Innovative engineering solutions for petrochemical, refinery, and power generation industries.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-300 mt-8 pt-6 text-center">
          <p className="text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>
            © {new Date().getFullYear()} Best Engineers Inc. All rights reserved. |
            <Link to="/privacy" className="hover:text-blue-200 ml-2">Privacy Policy</Link> |
            <Link to="/terms" className="hover:text-blue-200 ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
