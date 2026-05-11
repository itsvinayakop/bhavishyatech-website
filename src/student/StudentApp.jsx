import './student.css';
import { useEffect } from 'react';
import StudentNav from './components/StudentNav';
import StudentHero from './components/StudentHero';
import StudentWhyJoin from './components/StudentWhyJoin';
import StudentProjects from './components/StudentProjects';
import StudentLearning from './components/StudentLearning';
import StudentInternships from './components/StudentInternships';
import StudentTimeline from './components/StudentTimeline';
import StudentCulture from './components/StudentCulture';
import StudentCTA from './components/StudentCTA';
import StudentFooter from './components/StudentFooter';

function StudentApp() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    // Function to observe all current elements
    const observeElements = () => {
      document.querySelectorAll('.student-reveal:not(.is-visible)').forEach((el) => {
        observer.observe(el);
      });
    };

    // Initial observation
    setTimeout(observeElements, 100);

    // Watch for DOM changes (Vite HMR)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });
    
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    const onMove = (e) => {
      document.documentElement.style.setProperty('--student-cursor-x', e.clientX + 'px');
      document.documentElement.style.setProperty('--student-cursor-y', e.clientY + 'px');
    };
    window.addEventListener('mousemove', onMove);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div className="student-experience-root">
      <StudentNav />
      <main>
        <StudentHero />
        <StudentWhyJoin />
        <StudentProjects />
        <StudentLearning />
        <StudentInternships />
        <StudentTimeline />
        <StudentCulture />
        <StudentCTA />
      </main>
      <StudentFooter />
    </div>
  );
}

export default StudentApp;
