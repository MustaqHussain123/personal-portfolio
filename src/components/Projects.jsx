import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Reveal from './Reveal.jsx';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    num: '01',
    title: 'School Management ERP',
    stack: 'Python · Django',
    body: 'A full-featured school management ERP handling admissions, attendance, examinations, and fee management, with relational database models and admin workflows.',
    visual: (
      <>
        <span className="mock-module">Admissions</span>
        <span className="mock-module">Attendance</span>
        <span className="mock-module">Fees</span>
      </>
    )
  },
  {
    num: '02',
    title: 'LiverMate',
    stack: 'React · Machine Learning',
    body: 'A React application that predicts likelihood of liver disease using a trained ML model, where users enter health parameters and view prediction results.',
    dash: [40, 70, 55, 85]
  },
  {
    num: '03',
    title: 'Image Segmentation with AI/ML',
    stack: 'Python · Jupyter Notebook · Kaggle Datasets',
    body: 'An exploration of image segmentation models — input image through model to segmented result.',
    flow: ['Input', 'Model', 'Result']
  },
  {
    num: '04',
    title: 'Clothing E-Commerce Website',
    stack: 'React',
    body: 'Product listings, cart, checkout, and a fully responsive UI.',
    visual: (
      <>
        <span className="mock-module">Listings</span>
        <span className="mock-module">Cart</span>
        <span className="mock-module">Checkout</span>
      </>
    )
  },
  {
    num: '05',
    title: 'Fitness Tracker App',
    stack: 'Web application',
    body: 'Workout logging, progress tracking, fitness goals, activity history, and progress visualization.',
    dash: [30, 60, 45, 75, 90]
  }
];

function ProjectPanel({ p }) {
  return (
    <article className="project-panel">
      <span className="project-num">{p.num}</span>
      <div className="project-info">
        <h3>{p.title}</h3>
        <p className="project-stack">{p.stack}</p>
        <p>{p.body}</p>
      </div>
      <div className={`project-visual glass-panel${p.dash ? ' dash-mock' : ''}${p.flow ? ' flow-row small' : ''}`}>
        {p.visual}
        {p.dash && p.dash.map((h, i) => <span className="bar" style={{ height: `${h}%` }} key={i} />)}
        {p.flow && p.flow.map((f, i) => (
          <span key={f}>
            {f}
            {i < p.flow.length - 1 && <span className="arrow">→</span>}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const railRef = useRef(null);
  const sectionRef = useRef(null);
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduceMotion) return undefined;
    const mq = window.matchMedia('(min-width: 861px)');
    let trigger;

    const setup = () => {
      if (trigger) { trigger.kill(); trigger = null; railRef.current.style.transform = ''; }
      if (mq.matches && railRef.current) {
        const scrollWidth = railRef.current.scrollWidth - railRef.current.clientWidth;
        trigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: () => '+=' + scrollWidth,
          pin: true,
          scrub: 0.7,
          onUpdate: (self) => { railRef.current.scrollLeft = self.progress * scrollWidth; }
        });
      }
    };

    setup();
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      if (trigger) trigger.kill();
    };
  }, [reduceMotion]);

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <Reveal as="p" className="section-eyebrow">Things I've Built</Reveal>
      <div className="project-rail" id="projectRail" ref={railRef}>
        {PROJECTS.map((p) => <ProjectPanel p={p} key={p.num} />)}
      </div>
    </section>
  );
}
