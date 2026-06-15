import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../shared/Reveal';
import SiteFooter from '../layout/SiteFooter';
import { ParallaxLayer } from '../../context/ParallaxContext';
import { contactLinks } from '../../data/portfolio';

const fieldStyle = {
  fontSize: 15,
  color: '#3a2410',
  background: 'rgba(255,255,255,.7)',
  border: '1px solid rgba(110,71,36,.22)',
  borderRadius: 10,
  padding: '13px 15px',
  outline: 'none',
  fontWeight: 400,
  letterSpacing: 'normal',
  textTransform: 'none',
};

/** Mountain Four "Let's Build Together": contact links, résumé link, contact form and the site footer. */
export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const setField = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section
      id="contact"
      data-screen-label="Mountain 4 Let's Build Together"
      className="relative overflow-hidden"
      style={{ padding: 'clamp(110px,15vw,200px) 0 0', background: 'linear-gradient(180deg,#f7e9cf 0%,#f5dfb6 34%,#eecb95 64%,#e6b87a 100%)' }}
    >
      {/* sunrise */}
      <div
        aria-hidden="true"
        className="absolute rounded-full"
        style={{
          top: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(520px,72vw)',
          aspectRatio: '1',
          background: 'radial-gradient(circle,#fff7ea 0%,#fbeccb 32%,rgba(247,221,176,.5) 56%,rgba(247,221,176,0) 70%)',
          animation: 'sunPulse 11s ease-in-out infinite',
        }}
      />

      <div className="relative z-3 max-w-[1000px] mx-auto px-[clamp(22px,6vw,64px)] text-center">
        <Reveal className="inline-flex items-center gap-4 mb-[18px]">
          <span className="font-mono text-xs" style={{ letterSpacing: '.3em', color: '#a8552f' }}>
            峰 04 The Summit
          </span>
        </Reveal>
        <Reveal as="h2" delay={80} className="m-0 font-serif font-semibold leading-[1.02]" style={{ fontSize: 'clamp(36px,6vw,76px)', color: '#3a2410' }}>
          Let's Build Together
        </Reveal>
        <Reveal as="p" delay={140} className="font-medium max-w-[24ch] mx-auto" style={{ margin: '22px auto 0', fontFamily: "'Shippori Mincho', serif", fontSize: 'clamp(18px,2.4vw,28px)', lineHeight: 1.5, color: '#6e4724' }}>
          Great experiences begin with meaningful conversations.
        </Reveal>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[clamp(24px,5vw,56px)] text-left" style={{ marginTop: 'clamp(48px,7vw,76px)' }}>
          {/* left: links */}
          <Reveal className="flex flex-col gap-[14px]">
            {contactLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener"
                className="flex items-center justify-between rounded-[14px] transition-all duration-400 hover:translate-x-[5px] hover:bg-[rgba(255,250,240,.92)]"
                style={{ padding: '18px 22px', background: 'rgba(255,250,240,.6)', border: '1px solid rgba(110,71,36,.18)' }}
              >
                <span className="flex flex-col gap-[3px]">
                  <span className="text-[11px] uppercase" style={{ letterSpacing: '.2em', color: '#a8552f' }}>
                    {l.label}
                  </span>
                  <span className="font-serif font-semibold text-lg" style={{ color: '#3a2410' }}>
                    {l.value}
                  </span>
                </span>
                <span aria-hidden="true" className="text-base" style={{ color: '#a8552f' }}>
                  ↗
                </span>
              </a>
            ))}
            <Link
              to="/resume"
              className="flex items-center justify-between rounded-[14px] text-left transition-all duration-400 hover:translate-x-[5px] hover:bg-[#934826]"
              style={{ padding: '18px 22px', background: '#a8552f' }}
            >
              <span className="flex flex-col gap-[3px]">
                <span className="text-[11px] uppercase" style={{ letterSpacing: '.2em', color: '#f6dcc0' }}>
                  Résumé
                </span>
                <span className="font-serif font-semibold text-lg" style={{ color: '#fff7ea' }}>
                  View &amp; save as PDF
                </span>
              </span>
              <span aria-hidden="true" className="text-base" style={{ color: '#fff7ea' }}>
                ↓
              </span>
            </Link>
          </Reveal>

          {/* right: form */}
          <Reveal delay={120}>
            {sent ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center gap-[14px] rounded-2xl"
                style={{ minHeight: 280, background: 'rgba(255,250,240,.6)', border: '1px solid rgba(110,71,36,.18)', padding: 40 }}
              >
                <span aria-hidden="true" className="grid place-items-center rounded-full text-2xl" style={{ width: 54, height: 54, background: '#a8552f', color: '#fff7ea' }}>
                  ✓
                </span>
                <h3 className="font-serif font-semibold text-2xl m-0" style={{ color: '#3a2410' }}>
                  Thank you, {form.name}
                </h3>
                <p className="m-0 text-sm" style={{ color: '#6e4724', lineHeight: 1.6 }}>
                  Your message has reached the summit. I'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="flex flex-col gap-4 rounded-2xl"
                style={{ background: 'rgba(255,250,240,.6)', border: '1px solid rgba(110,71,36,.18)', padding: 'clamp(22px,3vw,32px)' }}
              >
                <label className="flex flex-col gap-[7px] text-[11px] uppercase" style={{ letterSpacing: '.16em', color: '#a8552f' }}>
                  Your name
                  <input required value={form.name} onChange={setField('name')} type="text" placeholder="Jane Doe" style={fieldStyle} />
                </label>
                <label className="flex flex-col gap-[7px] text-[11px] uppercase" style={{ letterSpacing: '.16em', color: '#a8552f' }}>
                  Email
                  <input required value={form.email} onChange={setField('email')} type="email" placeholder="jane@studio.com" style={fieldStyle} />
                </label>
                <label className="flex flex-col gap-[7px] text-[11px] uppercase" style={{ letterSpacing: '.16em', color: '#a8552f' }}>
                  Message
                  <textarea
                    required
                    value={form.message}
                    onChange={setField('message')}
                    rows={4}
                    placeholder="Tell me about the climb ahead…"
                    style={{ ...fieldStyle, resize: 'vertical', fontFamily: 'inherit' }}
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-full text-[14.5px] border-none transition-colors duration-400 hover:bg-[#3a342b]"
                  style={{ marginTop: 4, background: '#2b2722', color: '#f4ead9', padding: 15, letterSpacing: '.04em' }}
                >
                  Send message →
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>

      {/* summit silhouette */}
      <div className="relative" style={{ height: 'clamp(120px,16vw,210px)', marginTop: 'clamp(48px,7vw,80px)' }}>
        <ParallaxLayer
          as="svg"
          anchor="contact"
          speed={0.06}
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute block"
          style={{ bottom: 0, left: 0, width: '100%', height: '80%' }}
        >
          <path d="M0,200 L420,80 L760,210 L1040,90 L1440,200 L1440,360 L0,360Z" fill="#caa066" />
        </ParallaxLayer>
        <ParallaxLayer
          as="svg"
          anchor="contact"
          speed={0.16}
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute block"
          style={{ bottom: 0, left: 0, width: '100%', height: '62%' }}
        >
          <path d="M0,280 L360,200 L680,290 L1000,210 L1280,285 L1440,255 L1440,360 L0,360Z" fill="#6e5536" />
        </ParallaxLayer>
      </div>

      <SiteFooter />
    </section>
  );
}
