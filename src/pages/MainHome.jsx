import '../index.css';
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import Capabilities from '../components/Capabilities';
import Process from '../components/Process';
import Technology from '../components/Technology';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function MainHome() {
  useEffect(() => {
    // Reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -20px 0px' }
    );
    document.querySelectorAll('.reveal, .vision-reveal').forEach((el) => observer.observe(el));

    // Cursor-reactive ambient light
    const onMove = (e) => {
      document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px');
      document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px');
    };
    window.addEventListener('mousemove', onMove);

    return () => {
      document.querySelectorAll('.reveal, .vision-reveal').forEach((el) => observer.unobserve(el));
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Navigation />
      <main>
        <Hero />
        <div className="section-divider" />
        <Vision />
        <div className="section-divider" />
        <Capabilities />
        <div className="section-divider" />
        <Process />
        <div className="section-divider" />
        <Technology />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default MainHome;
