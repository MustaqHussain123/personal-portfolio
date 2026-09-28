import Reveal from './Reveal.jsx';

const TAGS = ['Frontend', 'Systems', 'ERP', 'Payments', 'Automation', 'AI / ML'];

export default function About() {
  return (
    <section className="about" id="about">
      <Reveal as="p" className="section-eyebrow">Who I Am</Reveal>
      <Reveal as="h2" className="section-statement">I build software around real problems.</Reveal>
      <div className="about-body">
        <Reveal as="p" className="about-lead">
          I'm a full stack developer based in Chennai, currently building Gradit — a college ERP platform — at
          Savyasasy Software Solutions. My work spans Angular and React on the frontend, Node.js on the backend,
          and the database, payments, and automation layers that make an application actually usable in production.
        </Reveal>
        <Reveal className="about-tags">
          {TAGS.map((t) => <span key={t}>{t}</span>)}
        </Reveal>
      </div>
    </section>
  );
}
