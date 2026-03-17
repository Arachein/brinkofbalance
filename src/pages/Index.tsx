import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Diplomas from "@/components/Diplomas";
import Activities from "@/components/Activities";
import Methodology from "@/components/Methodology";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Activities />
        <Methodology />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
