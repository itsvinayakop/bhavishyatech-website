import { ArrowRight } from 'lucide-react';

function StudentInternships() {
  // NO BACKEND NEEDED: Add or remove openings here.
  const openings = [
    {
      role: "Fullstack Developer",
      type: "Cohort 04",
      status: "Accepting Applications",
      seats: "04 Slots Remaining"
    },
    {
      role: "AI Workflow Engineer",
      type: "Cohort 04",
      status: "Waitlist",
      seats: "FULL"
    },
    {
      role: "UI/UX Architecture",
      type: "Cohort 05",
      status: "Next Cohort",
      seats: "Pre-booking"
    }
  ];

  return (
    <section className="student-section" id="internships">
      <div className="student-reveal">
        <div style={{ marginBottom: '6rem' }}>
          <h2 className="student-section-title">Current <span className="highlight-box">Openings</span></h2>
          <p className="student-subtitle" style={{ marginTop: '1.5rem' }}>
            We keep our cohorts small. 100% placement focus through actual production experience.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {openings.map((job, i) => (
            <div key={i} className="sw-card student-reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', alignItems: 'center' }}>
                  <span className="ft-outfit" style={{ fontWeight: 900, fontSize: '0.8rem', color: 'var(--sw-yellow)', background: 'var(--sw-black)', padding: '0.2rem 0.8rem' }}>
                    {job.type}
                  </span>
                  <span style={{ fontWeight: 800, fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {job.seats}
                  </span>
                </div>
                <h3 className="ft-outfit" style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase' }}>
                  {job.role}
                </h3>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem', color: job.status === 'Waitlist' ? '#FF4444' : '#00C851', textTransform: 'uppercase' }}>
                    {job.status}
                  </div>
                </div>
                <a href="#apply" className="student-btn" style={{ padding: '1rem 1.5rem' }}>
                  <ArrowRight strokeWidth={4} size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentInternships;
