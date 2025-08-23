import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import StatsSection from "@/components/sections/stats-section";
import ServicesSection from "@/components/sections/services-section";
import BlogSection from "@/components/sections/blog-section";
import TestimonialsSection from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <ServicesSection />
      <BlogSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
