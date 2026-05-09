import { Gauge, ShieldCheck, Smartphone, Blocks, Layers, Sparkles } from 'lucide-react';

const techStack = [
  { label: 'Frontend', tools: ['React', 'Next.js', 'Tailwind'] },
  { label: 'Backend', tools: ['Node.js', 'Python', 'APIs'] },
  { label: 'Mobile', tools: ['React Native', 'iOS'] },
  { label: 'Database', tools: ['MongoDB', 'PostgreSQL'] },
  { label: 'Cloud', tools: ['AWS', 'Vercel', 'Cloudflare'] },
  { label: 'AI', tools: ['OpenAI', 'Automation'] },
];

export default function Technology() {
  return (
    <section id="technology" data-testid="technology-section"
      style={{
        paddingTop: '8rem', paddingBottom: '8rem',
        background: 'var(--bt-bg-2)',
        position: 'relative', overflow: 'hidden',
      }}>

      {/* Atmospheric layers */}
      <div style={{
        position: 'absolute', top: -100, right: -100, width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,111,47,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -80, left: -80, width: 400, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,111,47,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 3rem', position: 'relative' }}>

        {/* Header */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, marginBottom: 64 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
              <span style={{ display: 'block', width: 48, height: 1, background: 'var(--bt-bronze)' }} />
              <span className="overline">05 — TECHNOLOGY</span>
            </div>
            <h2 className="ft-display" style={{
              fontWeight: 500, lineHeight: 1.06, letterSpacing: '-0.035em',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'var(--bt-ink)',
            }}>
              Modern technology.<br />
              Built for <span className="serif-accent" style={{ fontSize: '1.05em' }}>real</span> businesses.
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <p className="ft-body" style={{ fontSize: 15.5, fontWeight: 300, color: 'var(--bt-muted)', lineHeight: 1.75 }}>
              We use trusted modern technologies to build fast, secure, and scalable solutions.{' '}
              <span className="ft-serif" style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--bt-ink-2)', fontSize: '1.05em' }}>
                Every product is designed for smooth performance and long-term reliability.
              </span>
            </p>
          </div>
        </div>

        {/* === ROW 1: Hero card (8col) + Tall card (4col) === */}
        <div className="reveal" style={{
          display: 'grid', gridTemplateColumns: '8fr 4fr', gap: 14, marginBottom: 14,
        }}>
          {/* HERO: Fast & Responsive */}
          <div className="cap-card" data-testid="tech-hero"
            style={{
              padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr',
              minHeight: 300, overflow: 'hidden',
            }}>
            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <span className="ft-body" style={{ fontSize: 11, color: 'var(--bt-muted-2)', letterSpacing: '0.18em' }}>01</span>
                <div style={{ width: 1, height: 12, background: 'var(--bt-border-strong)' }} />
                <div style={{
                  width: 36, height: 36, border: '1px solid var(--bt-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Gauge size={16} strokeWidth={1.5} style={{ color: 'var(--bt-bronze)' }} />
                </div>
              </div>
              <h3 className="ft-display" style={{
                fontSize: 'clamp(1.5rem, 2.2vw, 1.85rem)', fontWeight: 500,
                letterSpacing: '-0.02em', color: 'var(--bt-ink)',
                marginBottom: 14, lineHeight: 1.2,
              }}>
                Fast &<br />Responsive
              </h3>
              <p className="ft-body" style={{
                fontSize: 14.5, fontWeight: 300, color: 'var(--bt-muted)',
                lineHeight: 1.7, marginBottom: 24,
              }}>
                Websites and applications optimized for speed, smooth interactions, and flawless performance across every device.
              </p>
              <div style={{ marginTop: 'auto' }}>
                <span className="ft-display" style={{
                  fontSize: 42, fontWeight: 500, color: 'var(--bt-ink)',
                  letterSpacing: '-0.04em', lineHeight: 1,
                }}>
                  {'<'}0.3s
                </span>
                <span className="ft-body" style={{
                  fontSize: 11, fontWeight: 300, color: 'var(--bt-muted-2)',
                  display: 'block', marginTop: 4, letterSpacing: '0.08em',
                }}>
                  average load time
                </span>
              </div>
            </div>

            {/* Right panel — decorative speed visualization */}
            <div style={{
              borderLeft: '1px solid var(--bt-border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'linear-gradient(160deg, rgba(250,246,237,0.6) 0%, rgba(239,231,216,0.3) 100%)',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Performance bars */}
              <div style={{ width: '70%', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { label: 'Performance', width: '96%' },
                  { label: 'Accessibility', width: '92%' },
                  { label: 'Best Practices', width: '98%' },
                  { label: 'SEO', width: '94%' },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                      <span className="ft-body" style={{ fontSize: 10, fontWeight: 400, color: 'var(--bt-muted-2)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        {bar.label}
                      </span>
                      <span className="ft-body" style={{ fontSize: 10, fontWeight: 500, color: 'var(--bt-bronze)' }}>
                        {bar.width}
                      </span>
                    </div>
                    <div style={{ height: 3, background: 'var(--bt-border)', overflow: 'hidden' }}>
                      <div style={{
                        width: bar.width, height: '100%',
                        background: 'linear-gradient(90deg, var(--bt-bronze), var(--bt-bronze-bright))',
                        transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TALL: Secure Systems */}
          <div className="cap-card" data-testid="tech-secure"
            style={{
              padding: '2.5rem', display: 'flex', flexDirection: 'column',
              position: 'relative', overflow: 'hidden',
            }}>
            {/* Subtle shield glow */}
            <div style={{
              position: 'absolute', bottom: -40, right: -40,
              width: 160, height: 160, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139,111,47,0.06) 0%, transparent 60%)',
              pointerEvents: 'none',
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <span className="ft-body" style={{ fontSize: 11, color: 'var(--bt-muted-2)', letterSpacing: '0.18em' }}>02</span>
              <div style={{ width: 1, height: 12, background: 'var(--bt-border-strong)' }} />
              <div style={{
                width: 36, height: 36, border: '1px solid var(--bt-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ShieldCheck size={16} strokeWidth={1.5} style={{ color: 'var(--bt-bronze)' }} />
              </div>
            </div>
            <h3 className="ft-display" style={{
              fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em',
              color: 'var(--bt-ink)', marginBottom: 14, lineHeight: 1.2,
            }}>
              Secure<br />Systems
            </h3>
            <p className="ft-body" style={{
              fontSize: 14, fontWeight: 300, color: 'var(--bt-muted)',
              lineHeight: 1.7,
            }}>
              Modern security practices to keep your business data protected and your users' trust intact.
            </p>
            <div style={{ marginTop: 'auto', paddingTop: 32, borderTop: '1px solid var(--bt-border)' }}>
              <div style={{ display: 'flex', gap: 16 }}>
                {['SSL', 'Auth', 'Encrypted'].map((tag) => (
                  <span key={tag} className="ft-body" style={{
                    fontSize: 10, fontWeight: 400, letterSpacing: '0.15em',
                    textTransform: 'uppercase', color: 'var(--bt-muted-2)',
                    padding: '4px 10px', border: '1px solid var(--bt-border)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === ROW 2: Three medium cards === */}
        <div className="reveal reveal-d1" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 14,
        }}>
          {/* Mobile Friendly */}
          <div className="cap-card" data-testid="tech-mobile" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span className="ft-body" style={{ fontSize: 11, color: 'var(--bt-muted-2)', letterSpacing: '0.18em' }}>03</span>
              <div style={{ width: 1, height: 12, background: 'var(--bt-border-strong)' }} />
              <div style={{
                width: 36, height: 36, border: '1px solid var(--bt-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Smartphone size={16} strokeWidth={1.5} style={{ color: 'var(--bt-muted-2)' }} />
              </div>
            </div>
            <h3 className="ft-display" style={{ fontSize: 19, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--bt-ink)', marginBottom: 10, lineHeight: 1.25 }}>
              Mobile Friendly
            </h3>
            <p className="ft-body" style={{ fontSize: 13.5, fontWeight: 300, color: 'var(--bt-muted)', lineHeight: 1.65 }}>
              Solutions that work seamlessly across phones, tablets, and desktops.
            </p>
          </div>

          {/* Scalable Architecture */}
          <div className="cap-card" data-testid="tech-scalable" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span className="ft-body" style={{ fontSize: 11, color: 'var(--bt-muted-2)', letterSpacing: '0.18em' }}>04</span>
              <div style={{ width: 1, height: 12, background: 'var(--bt-border-strong)' }} />
              <div style={{
                width: 36, height: 36, border: '1px solid var(--bt-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Blocks size={16} strokeWidth={1.5} style={{ color: 'var(--bt-muted-2)' }} />
              </div>
            </div>
            <h3 className="ft-display" style={{ fontSize: 19, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--bt-ink)', marginBottom: 10, lineHeight: 1.25 }}>
              Scalable Architecture
            </h3>
            <p className="ft-body" style={{ fontSize: 13.5, fontWeight: 300, color: 'var(--bt-muted)', lineHeight: 1.65 }}>
              Software designed to grow as your business grows — from 10 users to 10,000.
            </p>
          </div>

          {/* Easy Management */}
          <div className="cap-card" data-testid="tech-easy" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span className="ft-body" style={{ fontSize: 11, color: 'var(--bt-muted-2)', letterSpacing: '0.18em' }}>05</span>
              <div style={{ width: 1, height: 12, background: 'var(--bt-border-strong)' }} />
              <div style={{
                width: 36, height: 36, border: '1px solid var(--bt-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Layers size={16} strokeWidth={1.5} style={{ color: 'var(--bt-muted-2)' }} />
              </div>
            </div>
            <h3 className="ft-display" style={{ fontSize: 19, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--bt-ink)', marginBottom: 10, lineHeight: 1.25 }}>
              Easy Management
            </h3>
            <p className="ft-body" style={{ fontSize: 13.5, fontWeight: 300, color: 'var(--bt-muted)', lineHeight: 1.65 }}>
              Admin panels and dashboards built for simple daily operations — no tech skills needed.
            </p>
          </div>
        </div>

        {/* === ROW 3: AI wide bar === */}
        <div className="cap-card reveal reveal-d2" data-testid="tech-ai"
          style={{
            padding: '2rem 2.5rem',
            display: 'grid', gridTemplateColumns: 'auto 1fr',
            alignItems: 'center', gap: 32,
            marginBottom: 48,
            position: 'relative', overflow: 'hidden',
          }}>
          <div style={{
            position: 'absolute', top: -40, right: -40,
            width: 200, height: 200, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,111,47,0.05) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span className="ft-body" style={{ fontSize: 11, color: 'var(--bt-muted-2)', letterSpacing: '0.18em' }}>06</span>
            <div style={{ width: 1, height: 12, background: 'var(--bt-border-strong)' }} />
            <div style={{
              width: 36, height: 36, border: '1px solid var(--bt-border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Sparkles size={16} strokeWidth={1.5} style={{ color: 'var(--bt-bronze)' }} />
            </div>
            <h3 className="ft-display" style={{ fontSize: 19, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--bt-ink)' }}>
              Modern AI Integration
            </h3>
          </div>
          <p className="ft-body" style={{ fontSize: 13.5, fontWeight: 300, color: 'var(--bt-muted)', lineHeight: 1.65 }}>
            Smart chatbots, WhatsApp automation, workflow automation, and AI-powered business tools — making your operations faster and smarter.
          </p>
        </div>

        {/* === TECH STACK — floating pills === */}
        <div className="reveal reveal-d3">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
            <span style={{ display: 'block', width: 32, height: 1, background: 'var(--bt-bronze)' }} />
            <span className="overline" style={{ fontSize: 10 }}>POWERED BY</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {techStack.map((cat) =>
              cat.tools.map((tool) => (
                <span key={tool} className="ft-body"
                  style={{
                    fontSize: 12, fontWeight: 400, color: 'var(--bt-ink-2)',
                    letterSpacing: '0.04em',
                    padding: '8px 18px',
                    border: '1px solid var(--bt-border)',
                    background: 'var(--bt-surface)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'rgba(139,111,47,0.25)';
                    e.target.style.boxShadow = '0 4px 16px rgba(139,111,47,0.06)';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'var(--bt-border)';
                    e.target.style.boxShadow = 'none';
                    e.target.style.transform = 'translateY(0)';
                  }}>
                  {tool}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
