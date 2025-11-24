
import React from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import IconFeatures from "./components/IconFeatures";
import BlogSection from "./components/BlogSection";
import Testimonials from "./components/Testimonials";
import StatsSection from "./components/StatsSection";
import PortfolioSection from "./components/PortfolioSection";
import TeamSection from "./components/TeamSection";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSlider />
        <IconFeatures />
        <BlogSection />
        <Testimonials />
        <StatsSection />
        <PortfolioSection />
        <TeamSection />
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
