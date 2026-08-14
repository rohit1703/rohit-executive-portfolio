'use client';

export default function ThemeToggle() {
  function toggle() {
    const cur =
      document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('rohit-theme', cur); } catch { /* ignore */ }
    document.documentElement.setAttribute('data-theme', cur);
  }
  return (
    <button type="button" aria-label="Toggle theme" className="theme-btn" onClick={toggle}>
      <span className="theme-moon">☾</span>
      <span className="theme-sun">☀</span>
    </button>
  );
}
