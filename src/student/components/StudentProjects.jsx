import { Database, Layout, Sparkles } from 'lucide-react';

function StudentProjects() {
  const sections = [
    {
      icon: <Sparkles size={36} color="#FF3333" />,
      title: "AI Workflows.",
      desc: "Integrate LLMs, vector databases, and agentic frameworks into enterprise systems.",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop"
    },
    {
      icon: <Layout size={36} color="#FF3333" />,
      title: "Production Frontend.",
      desc: "Build pixel-perfect UI with React, Tailwind, and complex state management.",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop"
    },
    {
      icon: <Database size={36} color="#FF3333" />,
      title: "Scalable Backend.",
      desc: "Design APIs, manage databases, and handle authentication with Node.js.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="curriculum" style={{ position: 'relative', width: '100%', marginTop: '2rem' }}>
      <div style={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 2rem' }}>
         <h2 className="student-reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-0.03em', color: '#1C1614', textAlign: 'center', lineHeight: 1 }}>
           The Curriculum.
         </h2>
      </div>

      <div style={{ position: 'relative' }}>
        {sections.map((sec, i) => (
          <div key={i} style={{
            height: '100vh',
            width: '100%',
            position: 'sticky',
            top: 0,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            padding: '5vw 10vw',
            background: '#FAF7F2',
            borderTop: '1px solid rgba(255, 51, 51, 0.1)'
          }}>
            <div style={{
              position: 'absolute', inset: 0, 
              backgroundImage: `url(${sec.img})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              filter: 'grayscale(100%) contrast(1.2) brightness(1.4)',
              opacity: 0.15,
              zIndex: 0
            }} />
            
            <div className="glass-panel" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '4rem', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(30px)', border: '1px solid rgba(255,51,51,0.1)' }}>
               <div style={{ marginBottom: '2rem', display: 'inline-flex', padding: '1rem', background: 'rgba(255,51,51,0.05)', borderRadius: '12px', border: '1px solid rgba(255,51,51,0.1)' }}>{sec.icon}</div>
               <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-0.03em', color: '#1C1614', lineHeight: 1, marginBottom: '1.5rem' }}>
                 {sec.title}
               </h3>
               <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 500, color: '#8B7366', lineHeight: 1.6 }}>
                 {sec.desc}
               </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StudentProjects;
