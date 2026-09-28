import Reveal from './Reveal.jsx';

const CHAPTERS_ONE = [
  {
    num: '01',
    title: 'Building a college ERP at scale.',
    body: "I'm developing Gradit, a scalable college ERP platform — Angular 20 on the frontend, Node.js 20 on the backend, structured as microservices so core modules can deploy and scale independently.",
    visual: (
      <div className="glass-panel erp-mock">
        <span className="mock-module">Admissions</span>
        <span className="mock-module">Examinations</span>
        <span className="mock-module">Fees</span>
      </div>
    )
  },
  {
    num: '02',
    title: 'Breaking complex systems into manageable modules.',
    body: 'I designed and implemented modular services for Admissions, Examinations, and Fee Management — separating concerns so each module ships and scales more reliably on its own.',
    reverse: true,
    visual: (
      <div className="module-stack">
        <div className="module-float">Admissions</div>
        <div className="module-float">Examinations</div>
        <div className="module-float">Fee Management</div>
      </div>
    )
  },
  {
    num: '03',
    title: 'Business logic becomes product logic.',
    body: 'The Fee Collection module dynamically enables fee categories — Term, Hostel, Transport, Other — based on a student\'s profile and enrollment status.',
    visual: (
      <div className="glass-panel decision-tree">
        <div className="tree-node">Student Profile</div>
        <div className="tree-node">Enrollment Status</div>
        <div className="tree-node">Business Rules</div>
        <div className="tree-node accent">Available Fees</div>
      </div>
    )
  },
  {
    num: '04',
    title: 'Turning fee collection into digital payments.',
    body: 'I integrated Razorpay for secure online fee collection, handling transaction validation, payment callbacks, and status reconciliation.',
    reverse: true,
    visual: (
      <div className="glass-panel payment-states">
        <span>Initiated</span><span>Processing</span><span>Success</span><span>Reconciliation</span>
      </div>
    )
  },
  {
    num: '05',
    title: 'Enterprise payment integration.',
    body: 'I contributed to an NTT Data payment gateway integration — secure transaction processing workflows and API-level integration for enterprise payment operations.',
    visual: (
      <div className="glass-panel flow-row">
        <span>Application</span><span className="arrow">→</span><span>Payment Gateway</span><span className="arrow">→</span><span>Transaction</span><span className="arrow">→</span><span>Status</span>
      </div>
    )
  },
  {
    num: '06',
    title: 'Automating the repetitive.',
    body: 'I built backend automation workflows with n8n for notifications, data synchronization, and third-party integrations.',
    reverse: true,
    visual: (
      <div className="glass-panel flow-col">
        <span>Trigger</span><span>Process</span><span>Sync</span><span>Notify</span>
      </div>
    )
  },
  {
    num: '07',
    title: 'Software for everyday administration.',
    body: 'I contributed system modules, UI improvements, and backend functionality to School Chimes, a school ERP platform supporting day-to-day administration.',
    visual: (
      <div className="glass-panel erp-mock small">
        <span className="mock-module">Attendance</span>
        <span className="mock-module">Records</span>
      </div>
    )
  }
];

function Chapter({ chapter }) {
  return (
    <article className={`chapter${chapter.reverse ? ' reverse' : ''}`}>
      <Reveal className="chapter-copy">
        <span className="chapter-num">{chapter.num}</span>
        <h3>{chapter.title}</h3>
        <p>{chapter.body}</p>
      </Reveal>
      <Reveal className="chapter-visual">{chapter.visual}</Reveal>
    </article>
  );
}

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <Reveal as="p" className="section-eyebrow">Where I Build</Reveal>
      <Reveal as="h2" className="section-statement">02+ years of building real software.</Reveal>

      <Reveal as="div" className="role-header">
        <h3>Savyasasy Software Solutions</h3>
        <p>Full Stack Angular Developer — Feb 2025 to Present</p>
      </Reveal>

      {CHAPTERS_ONE.map((c) => <Chapter chapter={c} key={c.num} />)}

      <Reveal className="career-transition">
        <p>Full stack</p>
        <p>frontend</p>
        <p className="gradient-word">React.</p>
      </Reveal>

      <Reveal as="div" className="role-header">
        <h3>Nastaf Technologies</h3>
        <p>React Developer — Intern — May 2024 to Sept 2024</p>
      </Reveal>

      <article className="chapter">
        <Reveal className="chapter-copy">
          <span className="chapter-num">08</span>
          <h3>Starting with React.</h3>
          <p>On Jessy Cabs, a CRM-based taxi booking application, I worked on core frontend features, responsive UI
            enhancements, reusable React components, booking-flow improvements, and frontend integration with backend APIs.</p>
        </Reveal>
        <Reveal className="chapter-visual">
          <div className="glass-panel booking-mock">
            <span className="mock-line" />
            <span className="mock-line short" />
            <span className="mock-pill">Book ride</span>
          </div>
        </Reveal>
      </article>

      <Reveal className="career-transition">
        <p>From components to systems.</p>
        <p>From frontend to full stack.</p>
        <p className="gradient-word">From features to products.</p>
      </Reveal>
    </section>
  );
}
