import Container from '../global/Container';
import SectionHeading from '../global/SectionHeading';

export default function Challenges({ items }) {
  return (
    <section className="section challenges">
      <Container>
        <SectionHeading eyebrow="Operação crítica" title={<>Mais complexidade sem perder o <span>controle assistencial.</span></>} text="Laboratórios, hospitais e PAs operam sob pressão contínua. A tecnologia precisa acompanhar cada amostra, prioridade e decisão clínica." />
        <div className="challenges__grid drag-track" data-drag>
          {items.map((item, index) => <article className="challenge-card" key={item.title} data-reveal style={{ '--delay': `${index * 90}ms` }}><div className="challenge-card__index"><span>0{index + 1}</span><ArrowUpRight size={15} /></div><div className="challenge-card__signal"><img src={item.icon} alt="" /></div><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </Container>
    </section>
  );
}
import { ArrowUpRight } from 'lucide-react';
