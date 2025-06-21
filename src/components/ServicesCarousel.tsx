
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCard {
  title: string;
  description: string;
  href: string;
  icon: string;
}

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const services: ServiceCard[] = [
    {
      title: 'Engineering',
      description: 'Advanced design and simulation for complex industrial projects with cutting-edge technology.',
      href: '/key-services-engineering',
      icon: '⚙️'
    },
    {
      title: 'Procurement',
      description: 'Efficient supply chain management ensuring timely delivery of high-quality materials.',
      href: '/key-services-procurement',
      icon: '📦'
    },
    {
      title: 'Construction',
      description: 'High-quality construction services with strict adherence to safety standards.',
      href: '/key-services-construction',
      icon: '🏗️'
    },
    {
      title: 'Commissioning',
      description: 'Seamless project startup and comprehensive testing to ensure optimal performance.',
      href: '/key-services-commissioning',
      icon: '🔧'
    },
    {
      title: 'Project Management',
      description: 'End-to-end project oversight ensuring successful delivery within budget.',
      href: '/key-services-project-management',
      icon: '📊'
    },
    {
      title: 'Technical Consulting',
      description: 'Expert advisory services for complex engineering challenges and solutions.',
      href: '/key-services-consulting',
      icon: '💡'
    }
  ];

  const slidesToShow = 3;
  const maxIndex = Math.max(0, services.length - slidesToShow);

  const moveSlide = (direction: 'prev' | 'next') => {
    if (isAnimating) return;

    setIsAnimating(true);
    
    if (direction === 'next') {
      setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    } else {
      setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
    }

    setTimeout(() => setIsAnimating(false), 300);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        moveSlide('next');
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section className="py-16 bg-lovable-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lovable-text mb-4">
            Our Key Services
          </h2>
          <p className="text-lg text-lovable-text-light max-w-2xl mx-auto">
            Comprehensive engineering solutions designed to meet the evolving needs of modern industrial applications
          </p>
        </div>

        <div className="relative">
          {/* Desktop Carousel - Shows 3 items */}
          <div className="hidden lg:block overflow-hidden">
            <div className="relative">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * 33.333}%)` 
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="w-1/3 flex-shrink-0 px-3"
                  >
                    <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 h-80 p-6 flex flex-col">
                      <div className="text-center flex-1 flex flex-col">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold text-lovable-text mb-3">
                          {service.title}
                        </h3>
                        <p className="text-lovable-text-light mb-6 leading-relaxed flex-grow text-sm">
                          {service.description}
                        </p>
                        <Link
                          to={service.href}
                          className="inline-flex items-center justify-center text-lovable-blue hover:text-lovable-blue-hover font-medium transition-colors duration-200 mt-auto bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-md text-sm"
                        >
                          Learn More
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons - Desktop */}
          <button
            onClick={() => moveSlide('prev')}
            disabled={isAnimating}
            className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white hover:bg-gray-50 text-lovable-blue p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 z-10 border border-gray-200"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => moveSlide('next')}
            disabled={isAnimating}
            className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white hover:bg-gray-50 text-lovable-blue p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 z-10 border border-gray-200"
            aria-label="Next services"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicators - Desktop */}
          <div className="hidden lg:flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-lovable-blue w-6'
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile & Tablet View */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-bold text-lovable-text mb-2">
                    {service.title}
                  </h3>
                  <p className="text-lovable-text-light mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center justify-center text-lovable-blue hover:text-lovable-blue-hover font-medium transition-colors duration-200 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-md text-sm"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
