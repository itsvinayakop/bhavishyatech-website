/* Precision Systems Diagram — visible, intentional, premium */
function OrbitalViz() {
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* Background radial glow — gold tinted */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 380, height: 380, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(176,138,61,0.08) 0%, rgba(176,138,61,0.03) 40%, transparent 70%)',
      }} />

      <svg viewBox="0 0 440 440" fill="none" style={{ width: '100%', maxWidth: 440, height: 'auto' }}>
        {/* Outer ring — strong, primary */}
        <circle cx="220" cy="220" r="195" stroke="rgba(139,111,47,0.18)" strokeWidth="0.8" />

        {/* Secondary ring — slightly lighter */}
        <circle cx="220" cy="220" r="160" stroke="rgba(40,30,20,0.12)" strokeWidth="0.7"
          style={{ animation: 'rotate-reverse 120s linear infinite', transformOrigin: '220px 220px' }} />

        {/* Dashed data-flow orbit — gold tinted */}
        <circle cx="220" cy="220" r="125" stroke="rgba(139,111,47,0.14)" strokeWidth="0.6"
          strokeDasharray="6 8"
          style={{ animation: 'rotate-slow 90s linear infinite', transformOrigin: '220px 220px' }} />

        {/* Inner precision ring */}
        <circle cx="220" cy="220" r="85" stroke="rgba(40,30,20,0.15)" strokeWidth="0.7" />

        {/* Innermost ring — gold accent */}
        <circle cx="220" cy="220" r="45" stroke="rgba(139,111,47,0.2)" strokeWidth="0.5" />

        {/* Cross-hair axes */}
        <line x1="220" y1="18" x2="220" y2="422" stroke="rgba(40,30,20,0.06)" strokeWidth="0.5" />
        <line x1="18" y1="220" x2="422" y2="220" stroke="rgba(40,30,20,0.06)" strokeWidth="0.5" />

        {/* Diagonal axes */}
        <line x1="80" y1="80" x2="360" y2="360" stroke="rgba(40,30,20,0.035)" strokeWidth="0.4" />
        <line x1="360" y1="80" x2="80" y2="360" stroke="rgba(40,30,20,0.035)" strokeWidth="0.4" />

        {/* Tick marks on outer ring */}
        {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const isMajor = deg % 90 === 0;
          const len = isMajor ? 10 : deg % 30 === 0 ? 6 : 3;
          const x1 = 220 + (195 - len) * Math.cos(rad);
          const y1 = 220 + (195 - len) * Math.sin(rad);
          const x2 = 220 + 195 * Math.cos(rad);
          const y2 = 220 + 195 * Math.sin(rad);
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={isMajor ? 'rgba(139,111,47,0.3)' : 'rgba(40,30,20,0.12)'}
            strokeWidth={isMajor ? '0.8' : '0.5'} />;
        })}

        {/* Constellation nodes on orbits */}
        {[
          { cx: 220 + 160 * Math.cos(0.5), cy: 220 + 160 * Math.sin(0.5), r: 3 },
          { cx: 220 + 160 * Math.cos(2.2), cy: 220 + 160 * Math.sin(2.2), r: 2.5 },
          { cx: 220 + 160 * Math.cos(4.0), cy: 220 + 160 * Math.sin(4.0), r: 2 },
          { cx: 220 + 125 * Math.cos(1.2), cy: 220 + 125 * Math.sin(1.2), r: 2.5 },
          { cx: 220 + 125 * Math.cos(3.5), cy: 220 + 125 * Math.sin(3.5), r: 2 },
          { cx: 220 + 125 * Math.cos(5.3), cy: 220 + 125 * Math.sin(5.3), r: 3 },
          { cx: 220 + 85 * Math.cos(0.8), cy: 220 + 85 * Math.sin(0.8), r: 2 },
          { cx: 220 + 85 * Math.cos(3.9), cy: 220 + 85 * Math.sin(3.9), r: 2.5 },
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r={n.r} fill="rgba(139,111,47,0.35)">
              <animate attributeName="opacity" values="0.25;0.5;0.25" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={n.cx} cy={n.cy} r={n.r + 4} fill="none" stroke="rgba(139,111,47,0.1)" strokeWidth="0.4" />
          </g>
        ))}

        {/* Measurement labels */}
        <text x="220" y="18" textAnchor="middle" fill="rgba(139,111,47,0.25)" fontSize="7"
          fontFamily="Satoshi, sans-serif" letterSpacing="0.15em">000°</text>
        <text x="428" y="223" textAnchor="start" fill="rgba(139,111,47,0.2)" fontSize="7"
          fontFamily="Satoshi, sans-serif" letterSpacing="0.15em">090°</text>
        <text x="220" y="435" textAnchor="middle" fill="rgba(139,111,47,0.2)" fontSize="7"
          fontFamily="Satoshi, sans-serif" letterSpacing="0.15em">180°</text>
        <text x="8" y="223" textAnchor="start" fill="rgba(139,111,47,0.2)" fontSize="7"
          fontFamily="Satoshi, sans-serif" letterSpacing="0.15em">270°</text>

        {/* === CENTER EMPHASIS === */}
        {/* Outer glow ring */}
        <circle cx="220" cy="220" r="16" fill="none" stroke="rgba(139,111,47,0.12)" strokeWidth="0.5">
          <animate attributeName="r" values="16;18;16" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.12;0.2;0.12" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Inner ring */}
        <circle cx="220" cy="220" r="9" fill="none" stroke="rgba(139,111,47,0.2)" strokeWidth="0.6" />

        {/* Core dot — bronze, prominent */}
        <circle cx="220" cy="220" r="4.5" fill="var(--bt-bronze)">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Core inner highlight */}
        <circle cx="219" cy="219" r="1.5" fill="var(--bt-bronze-bright)" opacity="0.6" />
      </svg>

      {/* Large ambient glow behind everything */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 200, height: 200, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(176,138,61,0.1) 0%, rgba(176,138,61,0.03) 40%, transparent 70%)',
        animation: 'pulse-glow 5s ease-in-out infinite',
      }} />
    </div>
  );
}

export default function Hero() {
  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" data-testid="hero-section"
      style={{
        paddingTop: '10rem', paddingBottom: '6rem',
        position: 'relative', overflow: 'hidden',
        background: `
          radial-gradient(ellipse 60% 50% at 85% 15%, rgba(139,111,47,0.12) 0%, transparent 70%),
          radial-gradient(ellipse 50% 40% at 15% 85%, rgba(139,111,47,0.06) 0%, transparent 60%),
          var(--bt-bg)
        `,
      }}>

      {/* Faint grid */}
      <div className="arch-grid" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '25%',
        background: 'linear-gradient(to top, var(--bt-bg) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 3rem', position: 'relative' }}>

        {/* Top label strip */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 56 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ display: 'block', width: 48, height: 1, background: 'var(--bt-bronze)' }} />
            <span className="overline">ENGINEERING THE FUTURE · EST. 2025</span>
          </div>
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 14 }}>
            <span className="overline" style={{ color: 'var(--bt-muted-2)' }}>BAREILLY · INDIA</span>
            <span style={{ display: 'block', width: 48, height: 1, background: 'var(--bt-muted-2)' }} />
          </div>
        </div>

        {/* === MAIN HERO GRID: Left content + Right visual === */}
        <div style={{
          display: 'grid', gridTemplateColumns: '7fr 5fr',
          gap: 48, alignItems: 'center', minHeight: 420,
        }}>

          {/* LEFT — headline → text → CTA, all anchored together */}
          <div>
            {/* Headline */}
            <div className="reveal">
              <h1 className="ft-display" style={{
                fontWeight: 500, lineHeight: 1.0, letterSpacing: '-0.035em',
                fontSize: 'clamp(2.25rem, 5.8vw, 5.25rem)',
                color: 'var(--bt-ink)', marginBottom: 32,
              }}>
                Engineering<br />
                tomorrow's <span className="ft-serif" style={{
                  fontStyle: 'italic', fontWeight: 300,
                  background: 'linear-gradient(135deg, var(--bt-bronze) 20%, var(--bt-bronze-bright) 80%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>software</span><br />
                systems<span style={{ color: 'var(--bt-bronze)' }}>.</span>
              </h1>
            </div>

            {/* Supporting paragraph — directly under headline */}
            <div className="reveal reveal-d1">
              <p className="ft-body" style={{
                fontSize: 15.5, fontWeight: 300, color: 'var(--bt-muted)',
                lineHeight: 1.8, maxWidth: 480, marginBottom: 36,
              }}>
                Bhavishya Tech is an Indian technology atelier building intelligent digital
                systems — engineered with precision, designed for scale, architected for
                the decade ahead.
              </p>
            </div>

            {/* CTA — directly under paragraph, anchored */}
            <div className="reveal reveal-d2" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#contact" data-testid="hero-start" onClick={(e) => go(e, '#contact')} className="btn btn-solid">
                START YOUR PROJECT <span>→</span>
              </a>
              <a href="#capabilities" data-testid="hero-explore" onClick={(e) => go(e, '#capabilities')} className="btn btn-outline">
                EXPLORE SERVICES <span>↘</span>
              </a>
            </div>
          </div>

          {/* RIGHT — orbital graphic, atmospheric only */}
          <div className="reveal reveal-d2 hidden lg:block" style={{ position: 'relative' }}>
            <OrbitalViz />
          </div>
        </div>

        {/* Stats bar */}
        <div className="reveal reveal-d3" style={{
          marginTop: 80, border: '1px solid var(--bt-border)',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        }}>
          {[
            { value: '98%', label: 'On-time delivery' },
            { value: '12+', label: 'Industries served' },
            { value: '40+', label: 'Engineers · designers' },
            { value: '24/7', label: 'Production reliability' },
          ].map((s, i) => (
            <div key={s.label} className="hover-card" style={{
              padding: '24px 28px',
              borderLeft: i > 0 ? '1px solid var(--bt-border)' : 'none',
            }}>
              <div className="ft-display" style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--bt-ink)',
              }}>{s.value}</div>
              <div className="ft-body" style={{ fontSize: 13, fontWeight: 300, color: 'var(--bt-muted)', marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
