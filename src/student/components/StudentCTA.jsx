import { Send, Info } from 'lucide-react';

function StudentCTA() {
  return (
    <section className="student-section" id="apply" style={{ background: 'var(--sw-yellow)', padding: '10rem 5vw' }}>
      <div className="student-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
        
        <div>
          <h2 className="student-title-lg" style={{ color: 'var(--sw-black)', fontSize: '5rem' }}>
            Ready to <br /><span style={{ color: '#FFF', WebkitTextStroke: '2px var(--sw-black)', textStroke: '2px var(--sw-black)' }}>Join?</span>
          </h2>
          <p style={{ fontSize: '1.4rem', color: 'var(--sw-black)', fontWeight: 600, marginTop: '2rem', lineHeight: 1.4 }}>
            Apply for the next cohort. No backend required. Just fill the form and we'll receive it instantly.
          </p>
        </div>

        {/* INTEGRATION: Use Formspree for backend-less form handling */}
        <form 
          action="https://formspree.io/f/xrejrkrz"
          method="POST"
          style={{ 
            background: 'var(--sw-black)', 
            padding: '4rem', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.5rem',
            border: '8px solid #000'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: '#AAA', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Full Name</label>
            <input 
              name="name"
              type="text" 
              required
              style={{ background: '#222', border: 'none', padding: '1.25rem', color: '#FFF', fontWeight: 600, fontSize: '1.1rem', outline: 'none' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: '#AAA', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Email Address</label>
            <input 
              name="email"
              type="email" 
              required
              style={{ background: '#222', border: 'none', padding: '1.25rem', color: '#FFF', fontWeight: 600, fontSize: '1.1rem', outline: 'none' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: '#AAA', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Portfolio/GitHub Link</label>
            <input 
              name="portfolio"
              type="url" 
              required
              style={{ background: '#222', border: 'none', padding: '1.25rem', color: '#FFF', fontWeight: 600, fontSize: '1.1rem', outline: 'none' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: '#AAA', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Resume Link (G-Drive/Dropbox)</label>
            <input 
              name="resume_link"
              type="url" 
              placeholder="https://drive.google.com/..."
              required
              style={{ background: '#222', border: 'none', padding: '1.25rem', color: '#FFF', fontWeight: 600, fontSize: '1.1rem', outline: 'none' }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
              <Info size={14} color="var(--sw-yellow)" strokeWidth={3} />
              <span style={{ color: 'var(--sw-yellow)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>
                Make sure the link is set to "Anyone with link"
              </span>
            </div>
          </div>

          <button 
            type="submit" 
            className="student-btn" 
            style={{ background: 'var(--sw-yellow)', color: 'var(--sw-black)', marginTop: '1rem', justifyContent: 'center' }}
          >
            Submit Application <Send size={20} strokeWidth={3} />
          </button>
        </form>

      </div>
    </section>
  );
}

export default StudentCTA;
