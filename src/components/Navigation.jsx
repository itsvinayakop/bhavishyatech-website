import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'VISION', href: '#vision' },
  { label: 'CAPABILITIES', href: '#capabilities' },
  { label: 'PROCESS', href: '#process' },
  { label: 'TECHNOLOGY', href: '#technology' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      data-testid="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'nav-float' : ''}`}
    >
      <div style={{
        maxWidth: 1320, margin: '0 auto',
        padding: scrolled ? '0 2.5rem' : '0 3rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: scrolled ? 64 : 80,
        transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        {/* Logo */}
        <a href="#" data-testid="logo"
           style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}
           onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div style={{
            width: 36, height: 36,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(145deg, var(--bt-bronze), var(--bt-bronze-bright))',
            boxShadow: '0 2px 12px rgba(139,111,47,0.15)',
          }}>
            <span className="ft-display" style={{ fontSize: 15, fontWeight: 600, color: '#FDF8EE', lineHeight: 1 }}>B</span>
          </div>
          <span className="ft-display" style={{ fontSize: 12.5, fontWeight: 500, letterSpacing: '0.2em', color: 'var(--bt-ink)' }}>
            BHAVISHYA <span style={{ color: 'var(--bt-bronze)', fontWeight: 400 }}>Tech</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex" style={{ alignItems: 'center', gap: 36 }}>
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} data-testid={`nav-${l.label.toLowerCase()}`}
               onClick={(e) => go(e, l.href)}
               className="ft-body"
               style={{
                 fontSize: 11, fontWeight: 500, letterSpacing: '0.24em',
                 color: 'var(--bt-muted)', textDecoration: 'none',
                 transition: 'color 0.4s ease, transform 0.4s ease',
                 position: 'relative', paddingBottom: 2,
               }}
               onMouseEnter={(e) => { e.target.style.color = 'var(--bt-ink)'; }}
               onMouseLeave={(e) => { e.target.style.color = 'var(--bt-muted)'; }}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="#contact" data-testid="nav-engage" onClick={(e) => go(e, '#contact')}
           className="btn btn-solid hidden lg:inline-flex"
           style={{ padding: '0.75rem 1.6rem', fontSize: '0.68rem' }}>
          ENGAGE <span style={{ marginLeft: 4, transition: 'transform 0.3s' }}>→</span>
        </a>
      </div>
    </nav>
  );
}
