import { useEffect } from 'react';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Hero from './components/sections/Hero';
import Metrics from './components/sections/Metrics';
import Challenges from './components/sections/Challenges';
import Platform from './components/sections/Platform';
import Benefits from './components/sections/Benefits';
import Journey from './components/sections/Journey';
import CaseStudy from './components/sections/CaseStudy';
import Contact from './components/sections/Contact';
import { benefits, challenges, journey, metrics, platformFeatures } from './data/content';

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const isMobile = window.matchMedia('(max-width: 760px)').matches;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }),
      isMobile
        ? { threshold: 0.015, rootMargin: '0px 0px 12% 0px' }
        : { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    );
    elements.forEach((element) => observer.observe(element));

    const cleanups = [...document.querySelectorAll('[data-drag]')].map((track) => {
      let active = false;
      let startX = 0;
      let startScroll = 0;
      const down = (event) => { active = true; startX = event.clientX; startScroll = track.scrollLeft; track.setPointerCapture?.(event.pointerId); track.classList.add('is-dragging'); };
      const move = (event) => { if (active) track.scrollLeft = startScroll - (event.clientX - startX); };
      const up = () => { active = false; track.classList.remove('is-dragging'); };
      track.addEventListener('pointerdown', down);
      track.addEventListener('pointermove', move);
      track.addEventListener('pointerup', up);
      track.addEventListener('pointercancel', up);
      return () => { track.removeEventListener('pointerdown', down); track.removeEventListener('pointermove', move); track.removeEventListener('pointerup', up); track.removeEventListener('pointercancel', up); };
    });

    return () => { observer.disconnect(); cleanups.forEach((cleanup) => cleanup()); };
  }, []);

  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Metrics items={metrics} />
        <Challenges items={challenges} />
        <Platform items={platformFeatures} />
        <Benefits items={benefits} />
        <Journey items={journey} />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
