import Button from '../global/Button';
import Container from '../global/Container';
import DashboardMockup from '../visuals/DashboardMockup';
import heroImage from '../../assets/images/hero.png';
import { ArrowDown, CheckCircle2, Radio } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__orb hero__orb--one" /><div className="hero__orb hero__orb--two" />
      <Container className="hero__grid">
        <div className="hero__copy">
          <p className="hero__kicker fade-up"><Radio size={14} /> Tecnologia para medicina diagnóstica</p>
          <h1 className="fade-up delay-1">Operações de saúde que não podem <span>parar.</span></h1>
          <p className="hero__lead fade-up delay-2">Uma plataforma para laboratórios, hospitais e prontos atendimentos integrarem exames, equipes e decisões com rastreabilidade em tempo real.</p>
          <div className="hero__actions fade-up delay-3"><Button>Falar com um especialista</Button><a className="text-link" href="#plataforma">Conhecer a plataforma <ArrowDown size={14} /></a></div>
          <div className="hero__trust fade-up delay-3"><span><CheckCircle2 size={13} /> 30+ anos</span><span><CheckCircle2 size={13} /> 100% web</span><span><CheckCircle2 size={13} /> Operação 24/7</span></div>
        </div>
        <div className="hero__visual fade-side">
          <div className="hero__visual-label"><span className="pulse" /> operação assistencial conectada</div>
          <div className="hero__photo"><img src={heroImage} alt="Profissional analisando indicadores da operação laboratorial" /></div>
          <div className="hero__dashboard"><DashboardMockup /></div>
          <div className="floating-card floating-card--left"><small>Rastreabilidade</small><strong>100%</strong><span>Jornada monitorada</span></div>
          <div className="floating-card floating-card--right"><small>Produtividade</small><strong>+18,7%</strong><span>no período</span></div>
        </div>
      </Container>
      <div className="hero__foot"><span>SHIFT / LIS GLOBAL</span><span>01 — VISÃO GERAL</span></div>
    </section>
  );
}
