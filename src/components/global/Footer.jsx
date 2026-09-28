import Container from './Container';
import shiftLogo from '../../assets/logos/shiftWhite.png';

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__inner">
        <div className="brand brand--light"><img src={shiftLogo} alt="Shift — Pulsa pela vida" /></div>
        <p>Tecnologia para um melhor cuidado com a vida.</p>
        <p className="footer__legal">© 2026 Shift. Demonstração conceitual.</p>
      </Container>
    </footer>
  );
}
