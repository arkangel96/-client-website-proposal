import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import AboutOverview from "./pages/AboutOverview";
import AboutValues from "./pages/AboutValues";
import AboutCeoMessage from "./pages/AboutCeoMessage";
import AboutHistory from "./pages/AboutHistory";
import AboutBusinessPermits from "./pages/AboutBusinessPermits";
import AboutLocation from "./pages/AboutLocation";
import KeyServices from "./pages/KeyServices";
import KeyServicesEngineering from "./pages/KeyServicesEngineering";
import KeyServicesProcurement from "./pages/KeyServicesProcurement";
import KeyServicesConstruction from "./pages/KeyServicesConstruction";
import KeyServicesCommissioning from "./pages/KeyServicesCommissioning";
import KeyServicesProjectManagement from "./pages/KeyServicesProjectManagement";
import KeyServicesTechnicalConsulting from "./pages/KeyServicesTechnicalConsulting";
import Businesses from "./pages/Businesses";
import BusinessesPetrochemical from "./pages/BusinessesPetrochemical";
import BusinessesRefinery from "./pages/BusinessesRefinery";
import BusinessesPowerGeneration from "./pages/BusinessesPowerGeneration";
import CoreTechnologies from "./pages/CoreTechnologies";
import CoreTechnologiesFlareStack from "./pages/CoreTechnologiesFlareStack";
import CoreTechnologiesH2Facilities from "./pages/CoreTechnologiesH2Facilities";
import CoreTechnologiesCO2Purification from "./pages/CoreTechnologiesCO2Purification";
import CoreTechnologiesPatents from "./pages/CoreTechnologiesPatents";
import Sustainability from "./pages/Sustainability";
import SustainabilityQualityManagement from "./pages/SustainabilityQualityManagement";
import SustainabilityEnvironmentalManagement from "./pages/SustainabilityEnvironmentalManagement";
import SustainabilitySafetyHealthManagement from "./pages/SustainabilitySafetyHealthManagement";
import SustainabilityEthicsComplianceManagement from "./pages/SustainabilityEthicsComplianceManagement";
import SustainabilityEthicsComplianceReportCenter from "./pages/SustainabilityEthicsComplianceReportCenter";
import SustainabilitySecurityPolicy from "./pages/SustainabilitySecurityPolicy";
import SustainabilityNewBusinessPartnerRegistration from "./pages/SustainabilityNewBusinessPartnerRegistration";
import Recruitment from "./pages/Recruitment";
import RecruitmentIdealTalent from "./pages/RecruitmentIdealTalent";
import RecruitmentWelfarePolicy from "./pages/RecruitmentWelfarePolicy";
import RecruitmentRecruitmentPoolRegistration from "./pages/RecruitmentRecruitmentPoolRegistration";
import News from "./pages/News";
import NewsAnnouncements from "./pages/NewsAnnouncements";
import NewsCompanyBrochure from "./pages/NewsCompanyBrochure";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import logo from '/lovable-uploads/logo.png';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/-client-website-proposal">
          <Routes>
            <Route path="/" element={<Index />} />

            {/* About Us Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/about-overview" element={<AboutOverview />} />
            <Route path="/about-values" element={<AboutValues />} />
            <Route path="/about-ceo-message" element={<AboutCeoMessage />} />
            <Route path="/about-history" element={<AboutHistory />} />
            <Route path="/about-business-permits" element={<AboutBusinessPermits />} />
            <Route path="/about-location" element={<AboutLocation />} />

            {/* Key Services Routes */}
            <Route path="/key-services" element={<KeyServices />} />
            <Route path="/key-services-engineering" element={<KeyServicesEngineering />} />
            <Route path="/key-services-procurement" element={<KeyServicesProcurement />} />
            <Route path="/key-services-construction" element={<KeyServicesConstruction />} />
            <Route path="/key-services-commissioning" element={<KeyServicesCommissioning />} />
            <Route path="/key-services-project-management" element={<KeyServicesProjectManagement />} />
            <Route path="/key-services-technical-consulting" element={<KeyServicesTechnicalConsulting />} />

            {/* Businesses Routes */}
            <Route path="/businesses" element={<Businesses />} />
            <Route path="/businesses-petrochemical" element={<BusinessesPetrochemical />} />
            <Route path="/businesses-refinery" element={<BusinessesRefinery />} />
            <Route path="/businesses-power-generation" element={<BusinessesPowerGeneration />} />

            {/* Core Technologies Routes */}
            <Route path="/core-technologies" element={<CoreTechnologies />} />
            <Route path="/core-technologies-flare-stack-fabrication" element={<CoreTechnologiesFlareStack />} />
            <Route path="/core-technologies-h2-facilities-production" element={<CoreTechnologiesH2Facilities />} />
            <Route path="/core-technologies-co2-purification" element={<CoreTechnologiesCO2Purification />} />
            <Route path="/core-technologies-patents" element={<CoreTechnologiesPatents />} />

            {/* Sustainability Routes */}
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/sustainability-quality-management" element={<SustainabilityQualityManagement />} />
            <Route path="/sustainability-environmental-management" element={<SustainabilityEnvironmentalManagement />} />
            <Route path="/sustainability-safety-health-management" element={<SustainabilitySafetyHealthManagement />} />
            <Route path="/sustainability-ethics-compliance-management" element={<SustainabilityEthicsComplianceManagement />} />
            <Route path="/sustainability-ethics-compliance-report-center" element={<SustainabilityEthicsComplianceReportCenter />} />
            <Route path="/sustainability-security-policy" element={<SustainabilitySecurityPolicy />} />
            <Route path="/sustainability-new-business-partner-registration" element={<SustainabilityNewBusinessPartnerRegistration />} />

            {/* Recruitment Routes */}
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/recruitment-ideal-talent" element={<RecruitmentIdealTalent />} />
            <Route path="/recruitment-welfare-policy" element={<RecruitmentWelfarePolicy />} />
            <Route path="/recruitment-recruitment-pool-registration" element={<RecruitmentRecruitmentPoolRegistration />} />

            {/* News Routes */}
            <Route path="/news" element={<News />} />
            <Route path="/news-announcements" element={<NewsAnnouncements />} />
            <Route path="/news-company-brochure" element={<NewsCompanyBrochure />} />

            {/* Contact Route */}
            <Route path="/contact" element={<Contact />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
