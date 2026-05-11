import { Link } from 'react-router-dom';

function StudentFooter() {
  return (
    <footer className="student-footer">
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '6rem', marginBottom: '8rem' }}>
          
          <div style={{ gridColumn: 'span 2' }}>
            <div className="ft-outfit" style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--sw-white)', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
              Bhavishya <span style={{ color: 'var(--sw-yellow)' }}>Tech</span>
            </div>
            <p style={{ color: '#AAA', maxWidth: '400px', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 500 }}>
              The Engineering Accelerator. Stop learning in the sandbox. Start shipping production code with 1:1 senior mentorship.
            </p>
          </div>
          
          <div>
            <h4 className="ft-outfit" style={{ color: 'var(--sw-white)', fontWeight: 800, marginBottom: '2rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Explore</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#why-join" className="nav-link" style={{ margin: 0, color: '#888' }}>The ROI</a></li>
              <li><a href="#curriculum" className="nav-link" style={{ margin: 0, color: '#888' }}>The Studio</a></li>
              <li><a href="#internships" className="nav-link" style={{ margin: 0, color: '#888' }}>Openings</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="ft-outfit" style={{ color: 'var(--sw-white)', fontWeight: 800, marginBottom: '2rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link to="/" className="nav-link" style={{ margin: 0, color: '#888' }}>Main Site</Link></li>
              <li><a href="#" className="nav-link" style={{ margin: 0, color: '#888' }}>Privacy</a></li>
              <li><a href="#" className="nav-link" style={{ margin: 0, color: '#888' }}>Terms</a></li>
            </ul>
          </div>

        </div>
        
        <div style={{ borderTop: '2px solid rgba(255,255,255,0.1)', paddingTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <p className="ft-outfit" style={{ color: '#666', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            © {new Date().getFullYear()} Bhavishya Tech Accelerator. Engineered for the decade ahead.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
             {/* Social links could go here */}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default StudentFooter;
