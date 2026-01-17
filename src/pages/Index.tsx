import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WaitlistForm />
      <Footer />
    </div>
  );
};

export default Index;
