import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import TrustBar from "@/components/TrustBar";

import About from "@/components/About";
import Services from "@/components/Services";
import Why from "@/components/Why";
import Hours from "@/components/Hours";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Why />
      <Hours />
      <CTA />
      <Footer />
      <ClientScripts />
    </>
  );
}