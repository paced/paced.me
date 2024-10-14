export default function Head() {
  const themeColor = "#FF00E6";
  return (
    <>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="theme-color" content={themeColor} />

      <meta property="og:type" content="website" />
    </>
  );
}
