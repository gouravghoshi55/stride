// src/components/ProposalSection.jsx
export default function ProposalSection() {
  return (
    <section id="partner-section">
      <div className="proposal-header">
        <h2>STRIDE RECRUITERS</h2>
        <p>"Connecting Talent with Growth"</p>
        <p>Email: connect.striderecruiters@gmail.com | Location: Bhopal (Remote Operations)</p>
        <p>Contact: 9201296885 | Founder: Siddhika Saran</p>
      </div>

      <div className="proposal-title">
        <strong>BUSINESS PROPOSAL: Strategic Recruitment Partnership</strong>
      </div>

      <h3>1. Executive Summary</h3>
      <p>
        At Stride Recruiters, we believe that a company’s greatest asset is its people. Based in
        Bhopal and operating through a fully remote, agile model, we bridge the gap between
        top-tier talent and forward-thinking organizations. We specialize in identifying, vetting,
        and delivering candidates who don't just fill a role but contribute to your long-term
        "stride" toward success.
      </p>

      <h3>2. Why Stride Recruiters? (The Remote Advantage)</h3>
      <ul>
        <li>
          <span className="bold">Pan-India Talent Access:</span> We are not limited by geography. We
          source the best candidates from across the country.
        </li>
        <li>
          <span className="bold">24/7 Agility:</span> Our remote structure allows us to work
          flexibly and respond to your hiring needs faster.
        </li>
        <li>
          <span className="bold">Lower Overhead, Better Value:</span> We reinvest physical office
          costs into premium sourcing tools and deep-dive vetting, providing you with
          higher-quality service.
        </li>
      </ul>

      <h3>3. Benefits to Your Company</h3>
      <ul>
        <li>
          <span className="bold">Reduced Time-to-Hire:</span> Our streamlined digital screening
          ensures you only interview the top 5% of applicants.
        </li>
        <li>
          <span className="bold">Enhanced Retention:</span> We match for cultural fit, reducing
          employee turnover rates.
        </li>
        <li>
          <span className="bold">Expert Vetting:</span> Every candidate undergoes a rigorous
          multi-stage screening (Technical, Soft Skills, and References).
        </li>
        <li>
          <span className="bold">Scalability:</span> Our flexible model scales with you, whether you
          need one executive or an entire team.
        </li>
      </ul>

      <h3>4. Our Recruitment Process</h3>
      <ol>
        <li>
          <span className="bold">Discovery:</span> Understanding your culture, technical
          requirements, and growth goals.
        </li>
        <li>
          <span className="bold">Sourcing:</span> Utilizing AI-driven tools, professional networks,
          and our internal database.
        </li>
        <li>
          <span className="bold">Evaluation:</span> Conducting remote interviews and assessments to
          filter the best talent.
        </li>
        <li>
          <span className="bold">Presentation:</span> Delivering a "Shortlist Dossier" of the most
          qualified candidates.
        </li>
        <li>
          <span className="bold">Onboarding Support:</span> Assisting in negotiations and the final
          transition.
        </li>
      </ol>

      <h3>5. Fee Structure</h3>
      <p>
        We offer a competitive, success-based pricing model. You only pay if we successfully place a
        candidate.
      </p>

      <table>
        <thead>
          <tr>
            <th>Service Level</th>
            <th>Recruitment Fee</th>
            <th>Payment Timeline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard Roles (Entry to Mid-level)</td>
            <td>8.33% of Annual CTC</td>
            <td>Within 15 days of joining</td>
          </tr>
          <tr>
            <td>Senior/Executive (Leadership)</td>
            <td>10% - 12% of Annual CTC</td>
            <td>Within 15 days of joining</td>
          </tr>
          <tr>
            <td>Bulk Hiring (5+ roles)</td>
            <td>Custom Discounted Rate</td>
            <td>Milestone-based</td>
          </tr>
        </tbody>
      </table>

      <h3>6. Terms of Service (The “Stride” Guarantee)</h3>
      <ul>
        <li>
          <span className="bold">90-Day Replacement Guarantee:</span> If a candidate resigns or is
          terminated for performance within the first 90 days, we provide a replacement at no
          additional cost.
        </li>
        <li>
          <span className="bold">Direct Hire Protection:</span> If you hire a candidate introduced
          by us within 12 months, the standard fee applies.
        </li>
        <li>
          <span className="bold">Confidentiality:</span> We maintain strict secrecy regarding your
          salary structures and expansion plans.
        </li>
        <li>
          <span className="bold">Invoicing:</span> Invoices are generated on the date the candidate
          officially joins.
        </li>
      </ul>

      <h3>7. Commitment to Excellence</h3>
      <p>
        Stride Recruiters is built on <span className="bold">Integrity, Speed, and Quality</span>.
        We view ourselves as an extension of your HR department, committed to helping your company
        grow one great hire at a time.
      </p>

      <p className="cta">Let’s Take the Next Stride Together – Partner with Stride Recruiters.</p>

      <div className="closing-text">
        <p>I would love to schedule a brief 10-minute discovery call to discuss your current hiring challenges.</p>
        <p>Best Regards,</p>
        <p className="signature">
          Siddhika Saran
          <br />
          Founder, Stride Recruiters
        </p>
      </div>

      <div className="logo-end">
        <img
          src="https://i.ibb.co/S4G645fL/stride-recruiters-logo.png"
          alt="Stride Recruiters Logo"
        />
        <p className="tagline">Connecting Talent with Growth</p>
      </div>
    </section>
  );
}