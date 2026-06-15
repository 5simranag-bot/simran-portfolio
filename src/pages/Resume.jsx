import { Link } from 'react-router-dom';
import { skills, tools, education, highlights, jobs } from '../data/resume';

const EMAIL = '3simranag' + String.fromCharCode(64) + 'gmail.com';

const toolbarLinkStyle = {
  letterSpacing: '.04em',
  color: '#5a4f40',
  background: 'rgba(255,250,242,.7)',
  border: '1px solid #cdbfa8',
  padding: '9px 16px',
};

const sectionHeadingStyle = { margin: '0 0 14px', fontSize: 11, letterSpacing: '.24em', color: '#b14b34' };

/** Curriculum vitae: header band, skills/tooling/education/highlights and experience timeline. */
export default function Resume() {
  return (
    <div
      className="theme-journey min-h-screen flex flex-col items-center gap-5"
      style={{ padding: 'clamp(16px,3vw,44px) clamp(12px,3vw,32px) 60px', background: '#e6dccb', color: '#2b2722' }}
    >
      {/* toolbar (screen only) */}
      <div className="no-print w-full max-w-[820px] flex items-center justify-between gap-[14px]">
        <Link to="/" className="inline-flex items-center gap-[9px] text-[13px] rounded-full" style={toolbarLinkStyle}>
          ← Back to the journey
        </Link>
        <div className="flex items-center gap-[10px]">
          <a href="/assets/Simran-Agarwal-Resume.pdf" download="Simran-Agarwal-Resume.pdf" className="inline-flex items-center gap-[9px] text-[13px] rounded-full" style={toolbarLinkStyle}>
            Download PDF<span aria-hidden="true">↓</span>
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-[9px] text-[13px] rounded-full border-none"
            style={{ letterSpacing: '.04em', color: '#f6efe2', background: '#b14b34', padding: '10px 20px' }}
          >
            Save as PDF<span aria-hidden="true">⎙</span>
          </button>
        </div>
      </div>

      {/* the sheet */}
      <article
        className="w-full max-w-[820px] rounded-lg overflow-hidden print:shadow-none print:m-0 print:w-full print:max-w-none print:rounded-none"
        style={{ background: '#fbf6ec', boxShadow: '0 40px 80px -40px rgba(43,39,34,.55)' }}
      >
        {/* header band */}
        <header className="relative overflow-hidden" style={{ padding: 'clamp(28px,5vw,46px) clamp(28px,5vw,52px) clamp(22px,3vw,30px)', background: 'linear-gradient(180deg,#f4ead9,#efe2cf)' }}>
          <div aria-hidden="true" className="absolute" style={{ top: -34, right: 34, width: 108, height: 84, opacity: 0.9 }}>
            <div className="absolute" style={{ top: 40, left: '-6%', width: '112%', height: 11, background: '#b14b34', borderRadius: 3 }} />
            <div className="absolute" style={{ top: 54, left: '3%', width: '94%', height: 7, background: '#9a3f2b', borderRadius: 2 }} />
            <div className="absolute" style={{ top: 48, left: '15%', width: '7%', height: 46, background: '#b14b34' }} />
            <div className="absolute" style={{ top: 48, right: '15%', width: '7%', height: 46, background: '#b14b34' }} />
          </div>

          <div className="flex items-center gap-[13px] mb-[14px]">
            <span aria-hidden="true" className="grid place-items-center font-serif rounded-[3px]" style={{ width: 38, height: 38, border: '1.5px solid #b14b34', color: '#b14b34', fontSize: 21 }}>
              道
            </span>
            <span className="font-mono uppercase" style={{ fontSize: 11, letterSpacing: '.3em', color: '#9a8f7e' }}>
              Curriculum Vitae
            </span>
          </div>
          <h1 className="font-serif font-semibold m-0" style={{ fontSize: 'clamp(34px,6vw,54px)', lineHeight: 1, letterSpacing: '-.01em', color: '#241f1a' }}>
            Simran Agarwal
          </h1>
          <p className="m-0" style={{ marginTop: 8, fontSize: 'clamp(15px,2vw,19px)', letterSpacing: '.02em', color: '#b14b34', fontWeight: 500 }}>
            Senior UX Designer
          </p>
          <div className="flex flex-wrap" style={{ gap: '7px 20px', marginTop: 18, fontSize: 12.5, color: '#574d3f' }}>
            <a href={'mailto:' + EMAIL} className="inline-flex items-center gap-[6px]">
              <span aria-hidden="true" style={{ color: '#b14b34' }}>
                ✉
              </span>
              <span>{EMAIL}</span>
            </a>
            <span className="inline-flex items-center gap-[6px]">
              <span aria-hidden="true" style={{ color: '#b14b34' }}>
                ☎
              </span>
              +91 91318 12249
            </span>
            <span className="inline-flex items-center gap-[6px]">
              <span aria-hidden="true" style={{ color: '#b14b34' }}>
                ⌖
              </span>
              Pune, Maharashtra
            </span>
            <a href="https://linkedin.com/in/simran-agarwal-1b8833184" target="_blank" rel="noopener" className="inline-flex items-center gap-[6px]">
              <span aria-hidden="true" style={{ color: '#b14b34' }}>
                in
              </span>
              simran-agarwal
            </a>
            <span className="inline-flex items-center gap-[6px]">
              <span aria-hidden="true" style={{ color: '#b14b34' }}>
                ◎
              </span>
              @I_Just_Design
            </span>
          </div>
        </header>

        {/* summary strip */}
        <div style={{ padding: 'clamp(20px,3vw,26px) clamp(28px,5vw,52px)', borderBottom: '1px solid #e7dcc9' }}>
          <p className="m-0 font-serif font-medium" style={{ fontSize: 'clamp(15px,1.8vw,18px)', lineHeight: 1.6, color: '#3a342b' }}>
            Senior UX Designer with 5+ years across enterprise SaaS, internal tools and complex B2B systems. I transform fragmented workflows into
            streamlined experiences through user-centred research, data visualisation and design systems — partnering with engineering and
            facilitating workshops to drive product strategy.
          </p>
        </div>

        {/* body: two columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.85fr]" style={{ gap: 'clamp(24px,4vw,44px)', padding: 'clamp(26px,4vw,38px) clamp(28px,5vw,52px) clamp(34px,5vw,46px)' }}>
          {/* left column */}
          <aside className="flex flex-col gap-[30px]">
            <section>
              <h2 className="font-mono uppercase" style={sectionHeadingStyle}>
                Core skills
              </h2>
              <div className="flex flex-wrap gap-[6px]">
                {skills.map((s) => (
                  <span key={s} style={{ fontSize: 11.5, lineHeight: 1.3, color: '#4a4236', background: 'rgba(177,75,52,.07)', border: '1px solid rgba(177,75,52,.2)', padding: '5px 10px', borderRadius: 6 }}>
                    {s}
                  </span>
                ))}
              </div>
            </section>
            <section>
              <h2 className="font-mono uppercase" style={sectionHeadingStyle}>
                Tooling
              </h2>
              <div className="flex flex-wrap gap-[6px]">
                {tools.map((t) => (
                  <span key={t} style={{ fontSize: 11.5, lineHeight: 1.3, color: '#4a4236', border: '1px solid #d8cdbb', padding: '5px 10px', borderRadius: 6 }}>
                    {t}
                  </span>
                ))}
              </div>
            </section>
            <section>
              <h2 className="font-mono uppercase" style={sectionHeadingStyle}>
                Education
              </h2>
              <div style={{ borderLeft: '2px solid #e0d4c1', paddingLeft: 14 }}>
                <span className="font-mono" style={{ fontSize: 11.5, color: '#b14b34' }}>
                  {education.years}
                </span>
                <h3 className="font-serif font-semibold leading-[1.25]" style={{ margin: '3px 0 4px', fontSize: 15.5, color: '#2b2722' }}>
                  {education.degree}
                </h3>
                <p className="m-0" style={{ fontSize: 12.5, lineHeight: 1.5, color: '#6b6052' }}>
                  {education.school}
                </p>
              </div>
            </section>
            <section>
              <h2 className="font-mono uppercase" style={{ ...sectionHeadingStyle, margin: '0 0 12px' }}>
                Highlights
              </h2>
              <div className="flex flex-col gap-[12px]">
                {highlights.map((h) => (
                  <div key={h.l} className="flex flex-col" style={{ gap: 2 }}>
                    <span className="font-serif font-bold leading-none" style={{ fontSize: 24, color: '#b14b34' }}>
                      {h.v}
                    </span>
                    <span style={{ fontSize: 11.5, color: '#6b6052', lineHeight: 1.4 }}>{h.l}</span>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          {/* right column: experience */}
          <main>
            <h2 className="font-mono uppercase" style={{ ...sectionHeadingStyle, margin: '0 0 20px' }}>
              Experience
            </h2>
            <div className="flex flex-col gap-[26px]">
              {jobs.map((job) => (
                <section key={job.company} className="relative" style={{ borderLeft: '2px solid #e0d4c1', paddingLeft: 20 }}>
                  <span aria-hidden="true" className="absolute rounded-full" style={{ left: -7, top: 4, width: 11, height: 11, background: '#b14b34', boxShadow: '0 0 0 4px #fbf6ec' }} />
                  <div className="flex flex-wrap items-baseline justify-between gap-[6px]">
                    <h3 className="font-serif font-semibold m-0" style={{ fontSize: 19, color: '#241f1a' }}>
                      {job.role} · {job.company}
                    </h3>
                    <span className="font-mono" style={{ fontSize: 11.5, color: '#9a8f7e' }}>
                      {job.years}
                    </span>
                  </div>
                  <p className="italic" style={{ margin: '5px 0 12px', fontSize: 12.5, lineHeight: 1.5, color: '#8a7e6c' }}>
                    {job.note}
                  </p>
                  <ul className="m-0 p-0 flex flex-col gap-[8px]" style={{ listStyle: 'none' }}>
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-[10px]" style={{ fontSize: 13, lineHeight: 1.55, color: '#4a4236' }}>
                        <span aria-hidden="true" className="flex-shrink-0" style={{ color: '#caa066' }}>
                          —
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </main>
        </div>

        {/* footer ridge */}
        <div aria-hidden="true" className="relative" style={{ height: 46 }}>
          <svg viewBox="0 0 820 46" preserveAspectRatio="none" className="absolute bottom-0 left-0 block" style={{ width: '100%', height: '100%' }}>
            <path d="M0,30 L150,12 L320,32 L470,10 L620,30 L760,14 L820,26 L820,46 L0,46Z" fill="#e0d2bb" />
          </svg>
        </div>
      </article>
    </div>
  );
}
