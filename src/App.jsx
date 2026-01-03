// src/App.jsx
import { useState, useEffect } from "react";
import "./index.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import SectionAbout from "./components/SectionAbout";
import SectionWhyChoose from "./components/SectionWhyChoose";
import SectionHiringPartners from "./components/SectionHiringPartners";
import SectionServices from "./components/SectionServices";
import SectionIndustries from "./components/SectionIndustries";
import SectionProcess from "./components/SectionProcess";
import SectionMission from "./components/SectionMission";
import ProposalSection from "./components/ProposalSection";

function App() {
  const [showProposal, setShowProposal] = useState(false);
  console.log("Current showProposal value:", showProposal);

  // Fade-in animation on scroll (same as your IntersectionObserver)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [showProposal]);

  // const handlePartnerClick = () => {
  //   console.log("Partner clicked → showProposal should become true");
  //   setShowProposal(true);
  //   // ... rest
  // };

  const handlePartnerClick = () => {
    setShowProposal(true);
    // Give React time to render the proposal section
    setTimeout(() => {
      const nav = document.querySelector("nav");
      const proposal = document.getElementById("partner-section");
      if (proposal && nav) {
        const navHeight = nav.offsetHeight;
        const top = proposal.offsetTop - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 150); // 100–200 ms is usually enough
  };

  const handleBackFromProposal = () => {
    setShowProposal(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />

      <Navigation
        onPartnerClick={handlePartnerClick}
        showProposal={showProposal}
        onBack={handleBackFromProposal}
      />

      <div className="container">
        {!showProposal ? (
          <>
            <SectionAbout />
            <SectionWhyChoose />
            <SectionHiringPartners />
            <SectionServices />
            <SectionIndustries />
            <SectionProcess />
            <SectionMission />
          </>
        ) : (
          <ProposalSection />
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;
