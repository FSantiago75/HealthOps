import Button from '../global/Button';
import Container from '../global/Container';
import doctorImage from '../../assets/images/doctor.png';

export default function CaseStudy() {
  return (
    <section className="case-study">
      <Container className="case-study__grid">
        <div className="case-study__visual" data-reveal><img src={doctorImage} alt="Profissionais utilizando a tecnologia Shift em um laboratório" /><div className="case-study__caption"><small>Ecossistema conectado</small><strong>Conhecimento aplicado à operação</strong></div></div>
        <div className="case-study__copy" data-reveal><p className="quote-mark">“</p><blockquote>Tecnologia é importante, mas conhecimento aplicado ao seu negócio é o que gera resultado.</blockquote><p>Mais de três décadas combinando tecnologia, serviços e conhecimento profundo da medicina diagnóstica.</p><Button variant="light">Conhecer casos de sucesso</Button></div>
      </Container>
    </section>
  );
}
