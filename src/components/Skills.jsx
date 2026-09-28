import Reveal from './Reveal.jsx';

const ROWS = [
  { items: ['Angular', 'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind'], duration: 38 },
  { items: ['Node.js', 'Express.js', 'Python', 'Django', 'Microservices Architecture'], duration: 46, reverse: true },
  { items: ['AWS', 'DevOps Practices', 'CI/CD Pipelines', 'MySQL', 'PostgreSQL', 'MongoDB'], duration: 30 },
  { items: ['Razorpay', 'NTT Data Payment Gateway', 'Git', 'GitHub', 'Postman', 'VS Code', 'n8n'], duration: 42, reverse: true }
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <Reveal as="p" className="section-eyebrow">Tools I Work With</Reveal>
      <Reveal as="h2" className="section-statement">A stack built for real products, not demos.</Reveal>

      <div className="marquee-group">
        {ROWS.map((row, i) => (
          <div className={`marquee${row.reverse ? ' reverse' : ''}`} key={i}>
            <div className="marquee-track" style={{ animationDuration: `${row.duration}s` }}>
              {[...row.items, ...row.items].map((item, j) => (
                <span key={j}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
