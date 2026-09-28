import Reveal from './Reveal.jsx';

const CHAIN = ['User', 'Interface', 'Components', 'Application', 'Services', 'Database', 'Payments', 'Automation'];

export default function Engineering() {
  return (
    <section className="engineering" id="engineering">
      <Reveal as="p" className="section-eyebrow">How I Think About Software</Reveal>
      <Reveal className="engineering-chain">
        {CHAIN.map((c) => <span key={c}>{c}</span>)}
      </Reveal>
    </section>
  );
}
