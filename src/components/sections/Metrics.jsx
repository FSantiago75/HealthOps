import Container from '../global/Container';

export default function Metrics({ items }) {
  return (
    <section className="metrics" id="resultados">
      <Container>
        <p className="metrics__intro" data-reveal>Infraestrutura para quem cuida em escala. <span>Dados, exames e decisões conectados em operações de alta complexidade.</span></p>
        <div className="metrics__track drag-track" data-drag>
          {items.map((item, index) => <article className="metric" key={item.index} data-reveal style={{ '--delay': `${index * 55}ms` }}><div className="metric__top"><span>{item.index}</span><img src={item.icon} alt="" /></div><strong>{item.value}</strong><p>{item.label}</p></article>)}
        </div>
      </Container>
    </section>
  );
}
