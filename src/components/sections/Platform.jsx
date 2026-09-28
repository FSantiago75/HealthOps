import Container from '../global/Container';
import Eyebrow from '../global/Eyebrow';
import productImage from '../../assets/images/pc.png';
import { Cloud, Network, ShieldCheck } from 'lucide-react';

export default function Platform({ items }) {
  return (
    <section className="platform" id="plataforma">
      <Container>
        <div className="platform__heading" data-reveal><div><Eyebrow tone="cyan">Ecossistema Shift</Eyebrow><h2>Uma visão única.<br /><span>Do atendimento à decisão.</span></h2></div><div className="platform__intro"><p>Análises Clínicas, Imagem e Anatomia Patológica integradas à rotina de hospitais e prontos atendimentos.</p><div className="platform__badges"><span><Network size={14} /> Multiunidade</span><span><Cloud size={14} /> Cloud</span><span><ShieldCheck size={14} /> Segura</span></div></div></div>
        <div className="platform__stage" data-reveal><div className="platform__product-glow" /><img src={productImage} alt="Painéis analíticos da plataforma Shift" /></div>
        <div className="platform__features">{items.map((item, index) => <article key={item.number} data-reveal style={{ '--delay': `${index * 80}ms` }}><div className="platform__feature-top"><span>{item.number}</span><img src={item.icon} alt="" /></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </Container>
    </section>
  );
}
