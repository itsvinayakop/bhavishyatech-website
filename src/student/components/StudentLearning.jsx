import { Monitor, Code2, Users } from 'lucide-react';

function StudentLearning() {
  return (
    <section className="student-section" style={{ padding: '10rem 5vw' }}>
      <div className="student-reveal">
        <div style={{ marginBottom: '6rem' }}>
          <h2 className="student-section-title">
            The <span className="highlight-box">Studio</span> Experience
          </h2>
          <p className="student-subtitle" style={{ marginTop: '1.5rem' }}>
            A high-performance engineering environment designed for focus, speed, and real-world results.
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="sw-card student-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <Monitor size={48} color="var(--sw-yellow)" style={{ marginBottom: '2rem' }} strokeWidth={3} />
              <h4 className="ft-outfit" style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1.5rem' }}>Production Infrastructure</h4>
              <p style={{ color: 'var(--sw-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 500 }}>
                High-speed networking, dual-monitor setups, and a private studio space. We provide the hardware and environment; you provide the focus.
              </p>
            </div>
            <div style={{ background: 'var(--sw-black)', padding: '2rem', textAlign: 'center' }}>
               <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--sw-yellow)', letterSpacing: '0.1em' }}>UPTIME GUARANTEE</div>
               <div style={{ fontSize: '3rem', fontWeight: 900, color: '#FFF', fontFamily: 'Outfit' }}>99.9%</div>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            <div className="sw-card student-reveal">
              <Code2 size={40} color="var(--sw-yellow)" style={{ marginBottom: '2rem' }} strokeWidth={3} />
              <h4 className="ft-outfit" style={{ fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1rem' }}>Brutal Code Reviews</h4>
              <p style={{ color: 'var(--sw-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 500 }}>
                Every line of your code is reviewed by senior architects. No shortcuts. No bad habits. Just pure, production-grade engineering.
              </p>
            </div>
            
            <div className="sw-card student-reveal">
              <Users size={40} color="var(--sw-yellow)" style={{ marginBottom: '2rem' }} strokeWidth={3} />
              <h4 className="ft-outfit" style={{ fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1rem' }}>Engineering Network</h4>
              <p style={{ color: 'var(--sw-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 500 }}>
                Join a community of high-growth developers. Gain direct access to alumni at unicorn startups and fortune 500 firms.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default StudentLearning;
