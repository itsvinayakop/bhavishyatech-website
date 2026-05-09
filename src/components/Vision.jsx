export default function Vision() {
  return (
    <section id="vision" data-testid="vision-section"
      style={{
        paddingTop: '6rem', paddingBottom: '6rem',
        position: 'relative', overflow: 'hidden',
        background: `
          radial-gradient(ellipse 80% 60% at 50% 40%, rgba(139,111,47,0.04) 0%, transparent 60%),
          var(--bt-bg)
        `,
      }}>

      {/* Atmospheric rings */}
      <div className="sanskrit-ring" style={{ width: 420, height: 420 }} />
      <div className="sanskrit-ring" style={{ width: 580, height: 580, animationDelay: '2s' }} />

      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 3rem', position: 'relative' }}>

        {/* Overline */}
        <div className="vision-reveal" style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <span style={{ display: 'block', width: 48, height: 1, background: 'linear-gradient(90deg, transparent, var(--bt-bronze))' }} />
            <span className="overline">02 — OUR VISION</span>
            <span style={{ display: 'block', width: 48, height: 1, background: 'linear-gradient(90deg, var(--bt-bronze), transparent)' }} />
          </div>
        </div>

        {/* Sanskrit word + translation — compact layout */}
        <div className="vision-reveal" style={{ textAlign: 'center', marginBottom: 12 }}>
          <div className="sanskrit-word" style={{
            fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
            fontWeight: 300,
            display: 'inline-block',
          }}>
            भविष्य
          </div>
        </div>

        {/* Translation — tight under the word */}
        <div className="vision-reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="ft-serif" style={{
            fontStyle: 'italic', fontWeight: 300,
            fontSize: 15, color: 'var(--bt-muted-2)',
            letterSpacing: '0.04em',
          }}>
            / bha·vi·shya /
          </span>
          <span style={{
            display: 'inline-block', width: 24, height: 1,
            background: 'var(--bt-border-strong)', verticalAlign: 'middle',
            margin: '0 14px',
          }} />
          <span className="ft-body" style={{
            fontSize: 11, fontWeight: 500, color: 'var(--bt-muted-2)',
            letterSpacing: '0.22em', textTransform: 'uppercase',
          }}>
            Future
          </span>
          <span className="ft-body" style={{
            fontSize: 11, fontWeight: 300, color: 'var(--bt-muted-2)',
            marginLeft: 6,
          }}>
            — Sanskrit
          </span>
        </div>

        {/* Vision statement — two column editorial layout, not wasting space */}
        <div className="vision-reveal" style={{
          display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 0,
          marginBottom: 64,
        }}>
          {/* Left — headline */}
          <div style={{ paddingRight: '3rem' }}>
            <h2 className="ft-display" style={{
              fontWeight: 500, lineHeight: 1.08, letterSpacing: '-0.03em',
              fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', color: 'var(--bt-ink)',
            }}>
              A studio for<br />
              <span className="serif-accent" style={{ fontSize: '1.1em' }}>future-ready</span><br />
              software.
            </h2>
          </div>

          {/* Right — body text with border */}
          <div style={{ borderLeft: '1px solid var(--bt-border)', paddingLeft: '3rem' }}>
            <p className="ft-body" style={{
              fontSize: 15.5, fontWeight: 300, lineHeight: 1.85,
              color: 'var(--bt-ink-2)', marginBottom: 20,
            }}>
              Bhavishya Tech exists to engineer future-ready digital systems
              that remain intelligent, scalable, and trusted for years ahead.
            </p>
            <p className="ft-body" style={{
              fontSize: 15, fontWeight: 300, lineHeight: 1.85,
              color: 'var(--bt-muted)',
            }}>
              Through rigorous engineering, thoughtful design, and systems-driven
              thinking, we build software experiences designed for longevity,
              precision, and meaningful impact.
            </p>
          </div>
        </div>

        {/* Three pillars */}
        <div className="reveal" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          border: '1px solid var(--bt-border)',
        }}>
          {[
            { title: 'Engineering Quality', desc: 'Test-driven, observable, deeply documented codebases.' },
            { title: 'Systems Thinking', desc: 'Composable architectures that scale with the business.' },
            { title: 'Considered Design', desc: 'Minimal interfaces. Premium feel. Zero friction.' },
          ].map((p, i) => (
            <div key={p.title} className="hover-card" style={{
              padding: '2.25rem 2.25rem',
              borderLeft: i > 0 ? '1px solid var(--bt-border)' : 'none',
              transition: 'background 0.5s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(250,246,237,0.5)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              <h3 className="ft-display" style={{ fontSize: 16, fontWeight: 500, letterSpacing: '-0.01em', color: 'var(--bt-ink)', marginBottom: 8 }}>
                {p.title}
              </h3>
              <p className="ft-body" style={{ fontSize: 13, fontWeight: 300, color: 'var(--bt-muted)', lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
