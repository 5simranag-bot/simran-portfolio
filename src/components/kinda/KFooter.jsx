/** Closing footer for the KINDA SHOPEE case study. */
export default function KFooter() {
  return (
    <footer style={{ background: '#120d09', borderTop: '1px solid rgba(202,160,102,.14)', padding: '30px clamp(20px,5vw,42px)' }}>
      <div className="max-w-[1140px] mx-auto flex flex-wrap items-center justify-between gap-[14px]">
        <span className="font-serif" style={{ fontSize: 14, letterSpacing: '.1em', color: '#caa066' }}>
          ⛩ KINDA SHOPEE · A case study by Simran Agarwal
        </span>
        <span className="font-mono" style={{ fontSize: 11.5, color: '#7a6444' }}>
          The Journey of a Designer
        </span>
      </div>
    </footer>
  );
}
