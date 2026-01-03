// src/components/Navigation.jsx
import { useState } from "react";

export default function Navigation({ onPartnerClick, showProposal, onBack }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // src/components/Navigation.jsx
  // ... rest of your code remains the same ...

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false); // always close menu first

    if (targetId === "partner") {
      if (showProposal) {
        // already in proposal mode → just scroll up (no delay needed)
        onBack();
        setTimeout(doScroll, 100, "partner-section"); // small delay still helps
      } else {
        // switching TO proposal mode
        onPartnerClick(); // this sets showProposal(true)

        // Wait longer – React needs time to mount + layout the big proposal section
        setTimeout(() => {
          doScroll("partner-section");
        }, 250); // 200–300 ms is usually perfect for most devices
      }
      return;
    }

    // Normal sections (not partner)
    if (showProposal) {
      onBack(); // close proposal first
      setTimeout(() => doScroll(targetId), 250);
    } else {
      doScroll(targetId);
    }
  };

  const doScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = document.querySelector("nav")?.offsetHeight || 0;
      const top =
        element.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    } else {
      console.warn(`Element #${targetId} not found for scrolling`);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Why Choose Us", id: "why-choose" },
    { label: "Hiring Partners", id: "hiring-partners" },
    { label: "Services", id: "services" },
    { label: "Industries", id: "industries" },
    { label: "Recruitment Process", id: "process" },
    { label: "Mission", id: "mission" },
    { label: showProposal ? "Back to Home" : "Partner with Us", id: "partner" },
  ];

  return (
    <nav>
      {/* Desktop / wide screen – horizontal links */}
      <div className="desktop-nav">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => scrollToSection(e, item.id)}
            className="nav-link"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile – Hamburger + overlay menu */}
      <div className="mobile-nav">
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {isMenuOpen && (
          <div className="mobile-menu-overlay" onClick={toggleMenu}>
            <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="mobile-nav-link"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
