import { CheckCircle2 } from 'lucide-react';

function StudentWhyJoin() {
  return (
    <section className="student-section" id="why-join" style={{ background: 'var(--sw-gray)' }}>
      <div className="student-reveal">
        <h2 className="student-section-title" style={{ marginBottom: '6rem' }}>
          The <span className="highlight-box">ROI</span> of Production.
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {[
            { t: "Physical Studio", d: "A dedicated engineering space in Bareilly. No WFH distractions." },
            { t: "Live Projects", d: "Build code that actually gets deployed to client production environments." },
            { t: "Senior Reviews", d: "Your code is reviewed line-by-line by developers with 10+ years of experience." },
            { t: "Fast-Track Tech", d: "Master Next.js, AI Workflows, and Cloud Architecture in weeks, not years." }
          ].map((item, i) => (
            <div key={i} className="sw-card">
              <CheckCircle2 size={32} color="var(--sw-yellow)" style={{ marginBottom: '1.5rem' }} strokeWidth={3} />
              <h3 className="ft-outfit" style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1rem', textTransform: 'uppercase' }}>{item.t}</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--sw-text-muted)', lineHeight: 1.5, fontWeight: 500 }}>{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentWhyJoin;
