import { Link } from 'react-router-dom';

function StudentNav() {
  return (
    <nav className="student-nav">
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div className="ft-outfit" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--sw-black)', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          Bhavishya <span style={{ color: 'var(--sw-yellow)' }}>Tech</span>
        </div>
        <div style={{ height: '20px', width: '2px', background: 'var(--sw-black)' }}></div>
        <div className="ft-outfit" style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--sw-black)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          OFFLINE STUDIO
        </div>
      </Link>
      
      <div className="hidden md:flex" style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" className="nav-link">Main Website</Link>
        <a href="#why-join" className="nav-link">Value</a>
        <a href="#curriculum" className="nav-link">Curriculum</a>
        <a href="#internships" className="nav-link">Openings</a>
        <a href="#apply" className="student-btn" style={{ marginLeft: '3rem', padding: '0.8rem 1.5rem', fontSize: '0.8rem' }}>
          Apply Now
        </a>
      </div>
    </nav>
  );
}

export default StudentNav;
