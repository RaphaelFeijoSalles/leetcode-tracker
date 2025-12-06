export default function Footer() {
  return (
    <footer className="main-footer">
      <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
        © {new Date().getFullYear()} Raphael Salles
      </div>
      
      <div className="footer-icons">
        <a href="mailto:feijoraphael1@gmail.com" className="icon-link" title="Email">✉️</a>
        <a href="https://wa.me/5543999546030" target="_blank" rel="noreferrer" className="icon-link" title="WhatsApp">💬</a>
        <a href="https://www.linkedin.com/in/raphaelfeijosalles/" target="_blank" rel="noreferrer" className="icon-link" title="LinkedIn">🔗</a>
        <a href="https://github.com/RaphaelFeijoSalles" target="_blank" rel="noreferrer" className="icon-link" title="GitHub">🐱</a>
      </div>
    </footer>
  );
}