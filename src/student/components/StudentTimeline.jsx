function StudentTimeline() {
  const steps = [
    { 
      month: "Phase 01", 
      title: "Real-World Deployment", 
      desc: "Day 01: You get a desk and a repo. You learn Git, PR reviews, and Scrum by actually shipping code to production for real clients.",
    },
    { 
      month: "Phase 02", 
      title: "Career Architecture", 
      desc: "Optimizing your professional presence. LinkedIn, Resume engineering, and networking with our alumni at top tech firms.",
    }
  ];

  return (
    <section className="student-section" style={{ background: 'var(--sw-black)', color: 'var(--sw-white)' }}>
      <div className="student-reveal">
        <h2 className="student-section-title" style={{ color: 'var(--sw-white)', marginBottom: '6rem' }}>
          Your <span style={{ color: 'var(--sw-yellow)' }}>2-Month</span> Roadmap
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '0' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ 
              padding: '5rem', 
              borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.1)',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--sw-yellow)', textTransform: 'uppercase', marginBottom: '2rem', letterSpacing: '0.2em' }}>
                {step.month}
              </div>
              <h3 className="ft-outfit" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem', textTransform: 'uppercase' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '1.2rem', color: '#AAAAAA', lineHeight: 1.6, fontWeight: 500 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentTimeline;
