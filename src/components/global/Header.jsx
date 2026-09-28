import Button from './Button';
import Container from './Container';
import shiftLogo from '../../assets/logos/shiftWhite.png';
import { Activity } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <Container className="header__inner">
        <a className="brand" href="#top" aria-label="Shift — início">
          <img src={shiftLogo} alt="Shift — Pulsa pela vida" />
        </a>
        <nav className="header__nav" aria-label="Navegação principal">
          <a href="#plataforma">Plataforma</a>
          <a href="#resultados">Resultados</a>
          <a href="#jornada">Fluxo assistencial</a>
        </nav>
        <Button className="header__cta"><span className="header__cta-icon"><Activity size={14} /></span> Agendar demonstração</Button>
      </Container>
    </header>
  );
}
