// src/components/Navigation.jsx
export default function Navigation({ onPartnerClick, showProposal, onBack }) {
  const scrollToSection = (e, targetId) => {
    e.preventDefault();

    if (targetId === 'partner') {
      if (showProposal) {
        // already showing → go back to top
        onBack();
      } else {
        onPartnerClick();
      }
      return;
    }

    if (showProposal) {
      // If proposal is open, any normal link should close it first
      onBack();
      // Then scroll after a tiny delay so DOM updates
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const navHeight = document.querySelector('nav')?.offsetHeight || 0;
          const top = element.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    // Normal scroll (proposal closed)
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
      const top = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="nav-link">
        About
      </a>
      <a href="#why-choose" onClick={(e) => scrollToSection(e, 'why-choose')} className="nav-link">
        Why Choose Us
      </a>
      <a href="#hiring-partners" onClick={(e) => scrollToSection(e, 'hiring-partners')} className="nav-link">
        Hiring Partners
      </a>
      <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="nav-link">
        Services
      </a>
      <a href="#industries" onClick={(e) => scrollToSection(e, 'industries')} className="nav-link">
        Industries
      </a>
      <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="nav-link">
        Recruitment Process
      </a>
      <a href="#mission" onClick={(e) => scrollToSection(e, 'mission')} className="nav-link">
        Mission
      </a>

      {/* Partner link – uses special 'partner' id */}
      <a
        href="#"
        onClick={(e) => scrollToSection(e, 'partner')}
        className="nav-link"
      >
        {showProposal ? 'Back to Home' : 'Partner with Us'}
      </a>
    </nav>
  );
}