import { useState } from "react";
import Header from "./components/Header.jsx";
import FloatingHeader from "./components/FloatingHeader.jsx";
import Hero from "./components/Hero.jsx";
import AgencyBehind from "./components/AgencyBehind.jsx";
import CtaButtons from "./components/CtaButtons.jsx";
import Services from "./components/Services.jsx";
import FeaturedWork from "./components/FeaturedWork.jsx";
import ChasingConsumers from "./components/ChasingConsumers.jsx";
import LegacyMaking from "./components/LegacyMaking.jsx";
import WhatsNext from "./components/WhatsNext.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <FloatingHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <AgencyBehind />
        <CtaButtons />
        <FeaturedWork />
        <Services />
        <ChasingConsumers />
        <LegacyMaking />
        <WhatsNext />
      </main>
      <Footer />
    </>
  );
}
