import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ portraitSrc, ready }) {
  const heroRef = useRef(null);
  const frameRef = useRef(null);
  const ringRef = useRef(null);
  const chipsRef = useRef([]);
  const storyRef = useRef(null);

  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(hover:none), (pointer:coarse)').matches;

  useEffect(() => {
    if (!ready) return;
    const lines = heroRef.current.querySelectorAll('.reveal-line');
    if (reduceMotion) {
      lines.forEach((l) => { l.style.transform = 'none'; l.style.opacity = '1'; });
      if (frameRef.current) frameRef.current.style.opacity = '1';
      return;
    }
    gsap.to(lines, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.08 });
    gsap.fromTo(frameRef.current, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out', delay: 0.2 });
    gsap.fromTo(ringRef.current, { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.1 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  useEffect(() => {
    if (isTouch || reduceMotion) return undefined;
    const el = heroRef.current;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      if (frameRef.current) frameRef.current.style.transform = `translate(${px * 10}px, ${py * 10}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${px * 16}px, ${py * 16}px)`;
      chipsRef.current.forEach((c, i) => {
        if (!c) return;
        const depth = (i + 1) * 6;
        c.style.transform = `translate(${px * depth}px, ${py * depth}px)`;
      });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, [isTouch, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const lines = storyRef.current.querySelectorAll('.story-line');
    const triggers = [];
    lines.forEach((line) => {
      triggers.push(
        gsap.to(line, {
          opacity: 1,
          scrollTrigger: { trigger: line, start: 'top 75%', end: 'top 40%', scrub: true }
        })
      );
    });
    return () => triggers.forEach((t) => t.scrollTrigger && t.scrollTrigger.kill());
  }, [reduceMotion]);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow reveal-line">Full Stack Developer</p>
          <h1 className="hero-headline">
            <span className="line"><span className="reveal-line">Building</span></span>
            <span className="line"><span className="reveal-line">digital</span></span>
            <span className="line"><span className="reveal-line gradient-word">experiences.</span></span>
          </h1>
          <p className="hero-sub reveal-line">
            Full Stack Developer experienced in building scalable applications, ERP systems,
            payment integrations, automation workflows, and AI-powered solutions.
          </p>
          <div className="hero-actions reveal-line">
            <a href="#projects" className="btn btn-primary" data-cursor="View">Explore my work</a>
            <a href="#contact" className="btn btn-ghost" data-cursor="Open">Contact me</a>
          </div>
          <div className="hero-meta reveal-line">
            <span>Chennai, India</span>
            <span className="dot" />
            <a href="https://github.com/MustaqHussain123" target="_blank" rel="noopener noreferrer" data-cursor="Open">
              github.com/MustaqHussain123
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-ring" ref={ringRef} />
          <div className="portrait-blob" aria-hidden="true" />
          <div className="portrait-frame" ref={frameRef}>
            <img src={portraitSrc} alt="Portrait of Mustaq Hussain" />
          </div>
          <span className="glass-chip chip-1" ref={(el) => (chipsRef.current[0] = el)}>Angular</span>
          <span className="glass-chip chip-2" ref={(el) => (chipsRef.current[1] = el)}>Node.js</span>
          <span className="glass-chip chip-3" ref={(el) => (chipsRef.current[2] = el)}>PostgreSQL</span>
        </div>
      </div>

      <div className="hero-scroll-story" ref={storyRef}>
        <p className="story-line">From interfaces<br />to systems.</p>
        <p className="story-line">From components<br />to products.</p>
        <p className="story-line">From code<br />to real&#8209;world solutions.</p>
      </div>
    </section>
  );
}
