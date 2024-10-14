export default function Footer() {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="content">
      <p>Paced Engineering &copy; 2015 - {currentYear}.</p>
    </footer>
  );
}
