import Container from '../global/Container';
import SectionHeading from '../global/SectionHeading';
import { ClipboardPlus, FlaskConical, Microscope, ShieldCheck } from 'lucide-react';

const icons = [ClipboardPlus, FlaskConical, Microscope, ShieldCheck];

export default function Journey({ items }) {
  return (
    <section className="section journey" id="jornada">
      <Container>
        <SectionHeading eyebrow="Rastreabilidade ponta a ponta" title={<>Do pedido clínico ao resultado.<br /><span>Cada decisão mais segura.</span></>} align="center" />
        <div className="journey__line" data-reveal>{items.map((item, index) => { const Icon = icons[index]; return <article key={item.title}><div className="journey__node"><Icon size={17} /></div><small>Etapa 0{index + 1}</small><h3>{item.title}</h3><p>{item.text}</p></article>; })}</div>
      </Container>
    </section>
  );
}
