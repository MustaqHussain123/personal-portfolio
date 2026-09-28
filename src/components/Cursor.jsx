import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const ref = useRef(null);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(window.matchMedia('(hover:none), (pointer:coarse)').matches);
  }, []);

  useEffect(() => {
    if (isTouch) return undefined;
    const el = ref.current;
    let tx = 0, ty = 0, cx = 0, cy = 0, raf;

    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener('mousemove', onMove);

    const loop = () => {
      cx += (tx - cx) * 0.2;
      cy += (ty - cy) * 0.2;
      if (el) el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onEnter = () => el && el.classList.add('expand');
    const onLeave = () => el && el.classList.remove('expand');
    const targets = document.querySelectorAll('a, button, [data-cursor]');
    targets.forEach((t) => {
      t.addEventListener('mouseenter', onEnter);
      t.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      targets.forEach((t) => {
        t.removeEventListener('mouseenter', onEnter);
        t.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [isTouch]);

  if (isTouch) return null;
  return <div className="cursor" id="cursor" ref={ref} aria-hidden="true" />;
}
