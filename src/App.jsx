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
        ? { threshold: 0.12, rootMargin: '0px 0px -16% 0px' }
        : { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    );
    elements.forEach((element) => observer.observe(element));

    const cleanups = [...document.querySelectorAll('[data-drag]')].map((track) => {
      let active = false;
      let startX = 0;
      let startScroll = 0;
      let lastX = 0;
      let lastTime = 0;
      let velocity = 0;

      const getStops = () => [...track.children].map((card) => card.offsetLeft - track.offsetLeft);

      const down = (event) => {
        active = true;
        startX = event.clientX;
        lastX = event.clientX;
        lastTime = performance.now();
        velocity = 0;
        startScroll = track.scrollLeft;
        track.setPointerCapture?.(event.pointerId);
        track.classList.add('is-dragging');
      };

      const move = (event) => {
        if (!active) return;
        const now = performance.now();
        const elapsed = Math.max(now - lastTime, 1);
        velocity = (lastX - event.clientX) / elapsed;
        lastX = event.clientX;
        lastTime = now;
        track.scrollLeft = startScroll - (event.clientX - startX);
      };

      const finish = (event, cancelled = false) => {
        if (!active) return;
        active = false;

        const stops = getStops();
        const startIndex = stops.reduce(
          (closest, stop, index) => Math.abs(stop - startScroll) < Math.abs(stops[closest] - startScroll) ? index : closest,
          0,
        );
        const dragged = startX - (event?.clientX ?? lastX);
        const cardWidth = track.children[startIndex]?.getBoundingClientRect().width || track.clientWidth;
        const passedThreshold = Math.abs(dragged) > Math.min(54, cardWidth * 0.16);
        const flicked = Math.abs(velocity) > 0.32;
        const direction = dragged > 0 || velocity > 0 ? 1 : -1;
        const targetIndex = cancelled || (!passedThreshold && !flicked)
          ? startIndex
          : Math.max(0, Math.min(stops.length - 1, startIndex + direction));

        track.classList.remove('is-dragging');
        requestAnimationFrame(() => track.scrollTo({ left: stops[targetIndex], behavior: 'smooth' }));
      };

      const up = (event) => finish(event);
      const cancel = (event) => finish(event, true);
      track.addEventListener('pointerdown', down);
      track.addEventListener('pointermove', move);
      track.addEventListener('pointerup', up);
      track.addEventListener('pointercancel', cancel);
      return () => { track.removeEventListener('pointerdown', down); track.removeEventListener('pointermove', move); track.removeEventListener('pointerup', up); track.removeEventListener('pointercancel', cancel); };
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
