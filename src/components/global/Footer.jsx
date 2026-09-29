import Container from './Container';
import healthOpsWordmark from '../../assets/generated/health-ops-wordmark.png';

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__inner">
        <div className="brand brand--light"><img src={healthOpsWordmark} alt="HealthOps" /></div>
        <p>Tecnologia para um melhor cuidado com a vida.</p>
        <p className="footer__legal">Projeto autoral de portfólio. Marca e dados fictícios.</p>
      </Container>
    </footer>
  );
}
