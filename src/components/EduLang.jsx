import Reveal from './Reveal.jsx';

export default function EduLang() {
  return (
    <section className="edu-lang" id="education">
      <Reveal className="edu">
        <p className="section-eyebrow">Education</p>
        <h3>Bachelor of Computer Applications (BCA)</h3>
        <p>D.R. M.G.R University, Chennai — 2021–2024</p>
      </Reveal>
      <Reveal className="lang">
        <p className="section-eyebrow">Languages</p>
        <div className="lang-list">
          <span>English</span><span>Tamil</span><span>Hindi</span>
        </div>
      </Reveal>
    </section>
  );
}
