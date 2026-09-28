import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StoryBand() {
  const bandRef = useRef(null);
  const trackRef = useRef(null);
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduceMotion) return undefined;
    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      ease: 'none',
      scrollTrigger: { trigger: bandRef.current, start: 'top bottom', end: 'bottom top', scrub: 0.6 }
    });
    return () => tween.scrollTrigger && tween.scrollTrigger.kill();
  }, [reduceMotion]);

  return (
    <section className="story-band" id="storyBand" ref={bandRef}>
      <div className="story-track" ref={trackRef}>
        <span>I like building software that has a purpose.&nbsp;</span>
        <span>I like building software that has a purpose.&nbsp;</span>
      </div>
    </section>
  );
}
