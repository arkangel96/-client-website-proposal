import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesCarousel from "../components/ServicesCarousel";
import ContactForm from "../components/ContactForm";
import { Button } from "@/components/ui/button";
import { useLanguage } from '../contexts/LanguageContext';
import HeroSection from "../components/HeroSection";
import heroVideo from "/lovable-uploads/20250617_1947_Cinematic Petrochemical Dusk_simple_compose_01jxyr00rdf8crrx79e0g4pw8p.mp4";

const Index = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projectHighlights = [
    {
      title: 'Advanced Petrochemical Facility',
      description: 'Completed a $50M petrochemical processing facility with zero safety incidents and 15% under budget.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&crop=center',
      year: '2024'
    },
    {
      title: 'Renewable Power Generation',
      description: 'Designed and implemented a 100MW renewable energy system with advanced grid integration.',
      image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop&crop=center',
      year: '2023'
    },
    {
      title: 'Smart Refinery Upgrade',
      description: 'Modernized legacy refinery systems with IoT integration and AI-powered optimization.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop&crop=center',
      year: '2023'
    }
  ];

  const newsItems = [
    {
      title: 'Best Engineers Inc Wins Excellence in Engineering Award',
      date: '2024-03-15',
      summary: 'Our innovative approach to sustainable engineering solutions has been recognized by the International Engineering Association.'
    },
    {
      title: 'New Partnership with Leading Tech Companies',
      date: '2024-03-10',
      summary: 'Strategic partnerships formed to advance digital transformation in industrial engineering and automation.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'transparent', position: 'relative' }}>
      {/* Video background only behind navbar and hero section */}
      <div style={{ position: 'relative', width: '100%', zIndex: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
        {/* Dark overlay for contrast */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background: 'rgba(20,30,50,0.45)',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%', minHeight: '100vh' }}>
          <Header />
          <div style={{ flex: 1, display: 'flex' }}>
            <HeroSection />
          </div>
        </div>
      </div>

      {/* About Us Summary */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-on-scroll">
              <h2 className="text-4xl font-bold text-lovable-text mb-6">
                Engineering Excellence Since 2010
              </h2>
              <p className="text-xl text-lovable-text-light mb-8 leading-relaxed">
                Best Engineers Inc stands at the forefront of industrial engineering innovation, delivering comprehensive solutions
                for petrochemical, refinery, and power generation industries. Our commitment to excellence, sustainability,
                and cutting-edge technology has made us a trusted partner for complex engineering challenges worldwide.
              </p>
              <Link to="/about">
                <Button className="bg-lovable-blue hover:bg-lovable-blue-hover text-white px-8 py-3 text-lg font-medium">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="fade-in-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center"
                alt="Advanced engineering workspace"
                className="rounded-xl shadow-2xl w-full hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <ServicesCarousel />

      {/* Project Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl font-bold text-lovable-text mb-6">
              Project Highlights
            </h2>
            <p className="text-xl text-lovable-text-light max-w-3xl mx-auto">
              Showcasing our commitment to excellence through successful project deliveries across diverse industrial sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectHighlights.map((project, index) => (
              <div
                key={index}
                className="fade-in-on-scroll hover-lift rounded-xl shadow-lg overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-lovable-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-lovable-text mb-3">
                    {project.title}
                  </h3>
                  <p className="text-lovable-text-light">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Teaser */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl font-bold text-lovable-text mb-6">
              Latest News & Updates
            </h2>
            <p className="text-xl text-lovable-text-light">
              Stay updated with our latest achievements, partnerships, and industry insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.map((news, index) => (
              <div
                key={index}
                className="fade-in-on-scroll bg-white rounded-xl shadow-lg p-8 hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-lovable-blue text-sm font-medium mb-2">
                  {new Date(news.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h3 className="text-xl font-bold text-lovable-text mb-4">
                  {news.title}
                </h3>
                <p className="text-lovable-text-light mb-4">
                  {news.summary}
                </p>
                <Link
                  to="/news"
                  className="text-lovable-blue hover:text-lovable-blue-hover font-medium transition-colors duration-200"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-in-on-scroll">
            <Link to="/news">
              <Button className="bg-lovable-blue hover:bg-lovable-blue-hover text-white px-8 py-3 text-lg font-medium">
                View All News
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="fade-in-on-scroll">
              <h2 className="text-4xl font-bold text-lovable-text mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-lovable-text-light mb-8 leading-relaxed">
                Let's discuss how our engineering expertise can bring your vision to life.
                Contact us today for a consultation and discover the Best Engineers Inc difference.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-lovable-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📧</span>
                  </div>
                  <div>
                    <div className="font-semibold text-lovable-text">Email Us</div>
                    <div className="text-lovable-text-light">info@bestengineers.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-lovable-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold text-lovable-text">Call Us</div>
                    <div className="text-lovable-text-light">+1 (555) 123-4567</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in-on-scroll">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
