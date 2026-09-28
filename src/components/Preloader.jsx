import { useEffect, useState } from 'react';

const STEPS = [0, 18, 36, 54, 72, 100];

export default function Preloader({ onDone }) {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let i = 0;
    const tick = () => {
      setPct(STEPS[i]);
      i += 1;
      if (i < STEPS.length) {
        setTimeout(tick, reduceMotion ? 40 : 180);
      } else {
        setTimeout(() => {
          setDone(true);
          document.body.style.overflow = '';
          onDone && onDone();
        }, 250);
      }
    };
    tick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`preloader${done ? ' done' : ''}`} id="preloader">
      <div className="preloader-inner">
        <p className="preloader-name">MUSTAQ HUSSAIN</p>
        <p className="preloader-role">Full Stack Developer</p>
        <div className="preloader-bar">
          <div className="preloader-bar-fill" style={{ width: `${pct}%` }} />
        </div>
        <p className="preloader-pct">{String(pct).padStart(2, '0')}%</p>
      </div>
    </div>
  );
}
