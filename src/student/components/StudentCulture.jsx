function StudentCulture() {
  return (
    <section className="student-section" id="culture" style={{ padding: '0 5vw 10rem' }}>
      <div className="sw-card student-reveal" style={{ padding: '8rem 5vw', textAlign: 'center', border: '8px solid var(--sw-black)', background: 'var(--sw-yellow)' }}>
        
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="ft-outfit" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, marginBottom: '3rem', lineHeight: 1, color: 'var(--sw-black)', textTransform: 'uppercase' }}>
            We treat you like a <span style={{ background: '#FFF', padding: '0 0.5rem' }}>Junior Engineer</span>, not an intern.
          </h2>
          
          <p style={{ fontSize: '1.4rem', color: 'var(--sw-black)', lineHeight: 1.4, marginBottom: '5rem', fontWeight: 600, maxWidth: '800px', margin: '0 auto' }}>
            There is no fetching coffee. There are no fake assignments. From day one, you are given access to our tech stack, our codebase, and our engineering standards. The expectations are extremely high.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', borderTop: '4px solid var(--sw-black)', paddingTop: '5rem', maxWidth: '800px', margin: '0 auto' }}>
            <div>
              <div style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 1, fontFamily: 'Outfit', color: '#FFF', WebkitTextStroke: '2px var(--sw-black)', textStroke: '2px var(--sw-black)' }}>100%</div>
              <div style={{ color: 'var(--sw-black)', fontSize: '1.1rem', marginTop: '1rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Accountability</div>
            </div>
            <div>
              <div style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 1, fontFamily: 'Outfit', color: '#FFF', WebkitTextStroke: '2px var(--sw-black)', textStroke: '2px var(--sw-black)' }}>100%</div>
              <div style={{ color: 'var(--sw-black)', fontSize: '1.1rem', marginTop: '1rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Transparency</div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default StudentCulture;
