import { ArrowRight } from 'lucide-react';

function StudentHero() {
  return (
    <section className="student-section" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '140px', position: 'relative', overflow: 'hidden' }}>
      
      {/* BACKGROUND DECORATION: Technical Prints */}
      <div style={{ position: 'absolute', top: '10%', right: '-5%', opacity: 0.03, fontSize: '20rem', fontWeight: 900, pointerEvents: 'none', lineHeight: 1, color: '#000', userSelect: 'none' }}>
        0101
      </div>
      <div style={{ position: 'absolute', bottom: '5%', left: '2%', opacity: 0.05, fontSize: '0.7rem', fontWeight: 800, pointerEvents: 'none', letterSpacing: '0.5em', textTransform: 'uppercase', color: '#000' }}>
        SPEC_BT_ACCEL_V4.0 // 28.5275° N, 77.2100° E
      </div>

      <div className="student-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
        
        {/* LEFT CONTENT */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            <div style={{ width: '60px', height: '4px', background: 'var(--sw-yellow)' }}></div>
            <span className="ft-outfit" style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.9rem' }}>
              Engineering Accelerator
            </span>
          </div>
          
          <h1 className="student-title-lg">
            Stop <span className="highlight-box">Learning</span>.<br />
            Start <span style={{ color: 'var(--sw-yellow)', WebkitTextStroke: '2px var(--sw-black)', textStroke: '2px var(--sw-black)' }}>Shipping</span>.
          </h1>
          
          <p className="student-subtitle" style={{ marginTop: '3rem', marginBottom: '4rem', color: 'var(--sw-black)', fontWeight: 600, maxWidth: '520px' }}>
            Bhavishya Tech is not a school. It's a production house. We don't teach you how to code; we give you a desk, a senior mentor, and a real project.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#apply" className="student-btn">
              Apply for Cohort <ArrowRight size={20} strokeWidth={3} />
            </a>
            <a href="#internships" className="student-btn secondary">
              Openings
            </a>
          </div>

          <div style={{ display: 'flex', gap: '4rem', marginTop: '5rem' }}>
            <div>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, fontFamily: 'Outfit', lineHeight: 1 }}>02</div>
              <div style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', marginTop: '0.5rem' }}>Month Intensive</div>
            </div>
            <div>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, fontFamily: 'Outfit', lineHeight: 1 }}>1:1</div>
              <div style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', marginTop: '0.5rem' }}>Senior Mentorship</div>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL: Ridge Side Content */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            width: '100%', 
            aspectRatio: '1/1', 
            background: 'var(--sw-black)', 
            position: 'relative',
            border: '15px solid var(--sw-yellow)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop" 
              alt="Engineering"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.2)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(255,215,0,0.2) 0%, transparent 100%)' }}></div>
            
            {/* Floating Technical Label */}
            <div style={{ position: 'absolute', bottom: '20px', right: '-20px', background: 'var(--sw-black)', color: 'var(--sw-white)', padding: '1rem 2rem', transform: 'rotate(-90deg)', transformOrigin: 'bottom right' }}>
              <span className="ft-outfit" style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.3em' }}>PROD_READY // 2025</span>
            </div>
          </div>

          {/* Decorative Corner Element */}
          <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '100px', height: '100px', borderTop: '10px solid var(--sw-black)', borderRight: '10px solid var(--sw-black)' }}></div>
        </div>

      </div>
      
    </section>
  );
}

export default StudentHero;
