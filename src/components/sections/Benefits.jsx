import Button from '../global/Button';
import Container from '../global/Container';
import Eyebrow from '../global/Eyebrow';
import { Activity, ArrowUpRight, ChartNoAxesCombined, CircleDollarSign, HeartPulse, ShieldCheck, Workflow } from 'lucide-react';

const icons = [Workflow, Activity, CircleDollarSign, ChartNoAxesCombined, HeartPulse, ShieldCheck];

export default function Benefits({ items }) {
  return (
    <section className="section benefits">
      <Container className="benefits__grid">
        <div className="benefits__copy" data-reveal><Eyebrow>Impacto real</Eyebrow><h2>Agilidade para a equipe. Segurança para o paciente.</h2><p>Uma infraestrutura consistente conecta áreas técnicas, assistência e gestão sem perder de vista o que mais importa: o cuidado com a vida.</p><Button>Quero uma demonstração</Button></div>
        <div className="benefits__list">{items.map((item, index) => { const Icon = icons[index]; return <article key={item} data-reveal style={{ '--delay': `${index * 55}ms` }}><span>0{index + 1}</span><div className="benefits__title"><Icon size={18} strokeWidth={1.6} /><h3>{item}</h3></div><i><ArrowUpRight size={16} /></i></article>; })}</div>
      </Container>
    </section>
  );
}
