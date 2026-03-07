function applyTheme() {
  try {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (stored !== "light" && prefersDark);
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  } catch {
    // Ignore.
  }
}

const themeScript = `(${applyTheme.toString()})();`;

export default function Head() {
  // The theme script must be inlined here to avoid a flash of the wrong theme on page load.

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#FF00E6" />
      <meta property="og:type" content="website" />
    </>
  );
}
