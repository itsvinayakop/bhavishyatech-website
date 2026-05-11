export default function Footer() {
  return (
    <footer data-testid="footer"
      style={{
        padding: '2.75rem 0',
        background: 'var(--bt-bg-2)',
        borderTop: '1px solid var(--bt-border)',
      }}>
      <div style={{
        maxWidth: 1400, margin: '0 auto', padding: '0 2rem',
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 28, height: 28,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(145deg, var(--bt-bronze), var(--bt-bronze-bright))',
            boxShadow: '0 1px 8px rgba(139,111,47,0.12)',
          }}>
            <span className="ft-display" style={{ fontSize: 11, fontWeight: 600, color: '#FDF8EE', lineHeight: 1 }}>B</span>
          </div>
           <span className="ft-display" style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.18em', color: 'var(--bt-ink)' }}>
            BHAVISHYA <span style={{ color: 'var(--bt-bronze)', fontWeight: 400 }}>Tech</span>
          </span>
        </div>

        {/* Center */}
        <div style={{ textAlign: 'center' }}>
          <span className="ft-body" style={{ fontSize: 11, fontWeight: 400, color: 'var(--bt-muted-2)', letterSpacing: '0.28em', textTransform: 'uppercase' }}>
            ENGINEERED IN INDIA · FOR THE WORLD
          </span>
        </div>

        {/* Right */}
        <div style={{ textAlign: 'right' }}>
          <span className="ft-body" style={{ fontSize: 11, fontWeight: 400, color: 'var(--bt-muted-2)' }}>
            © {new Date().getFullYear()} Bhavishya Tech. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
