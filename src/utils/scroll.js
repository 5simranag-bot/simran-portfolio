/** Smoothly (or instantly, if reduced motion) scrolls to a section by id. */
export function scrollToId(id, reduced = false, offset = 4) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({ top: el.offsetTop - offset, behavior: reduced ? 'auto' : 'smooth' });
  }
}
