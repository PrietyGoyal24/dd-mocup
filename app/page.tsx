import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import WhyUs from "@/components/sections/WhyUs/WhyUs";
import Services from "@/components/sections/Services/Services";
import Solutions from "@/components/sections/Solutions/Solutions";
import TechStack from "@/components/sections/TechStack/TechStack";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Clientele from "@/components/sections/Clientele/Clientele";
import Blog from "@/components/sections/Blog/Blog";
import Footer from "@/components/layout/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero />

        {/* Section 00: Why Us */}
        <WhyUs />

        {/* Section 01: Engineering Services Grid */}
        <Services />

        {/* Section 02: Smarter Solutions Left-Sticky & Right-Scroll */}
        <Solutions />

        {/* Section 03: Cutting-Edge Tech Tab selector */}
        <TechStack />

        {/* Section 04: What's Good Slider Carousel */}
        <Portfolio />

        {/* Section 05: Client Testimonials */}
        <Testimonials />

        {/* Section 06: Clientele scrolling logo marquee */}
        <Clientele />

        {/* Section 07: Blog Article slider */}
        <Blog />
      </main>

      {/* Footer & Estimate Request form */}
      <Footer />
    </>
  );
}
