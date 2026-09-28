import Container from '../global/Container';
import Eyebrow from '../global/Eyebrow';
import { ArrowRight, Check, LockKeyhole } from 'lucide-react';

const fields = [
  { label: 'Nome', type: 'text', placeholder: 'Como podemos chamar você?' },
  { label: 'E-mail profissional', type: 'email', placeholder: 'voce@empresa.com.br' },
  { label: 'Empresa', type: 'text', placeholder: 'Nome da empresa' },
  { label: 'Telefone', type: 'tel', placeholder: '(00) 00000-0000' },
];

export default function Contact() {
  return (
    <section className="contact" id="contato">
      <Container className="contact__grid">
        <div className="contact__copy" data-reveal><Eyebrow tone="cyan">Próximo passo</Eyebrow><h2>Veja a Shift na realidade da sua rede de saúde.</h2><p>Converse com especialistas em medicina diagnóstica e descubra como conectar laboratório, hospital, PA e gestão.</p><div className="contact__note"><span><Check size={14} /></span><p>Demonstração personalizada para o seu cenário</p></div><div className="contact__note"><span><Check size={14} /></span><p>Conversa consultiva, sem compromisso</p></div></div>
        <form className="contact__form" data-reveal onSubmit={(event) => event.preventDefault()}>
          <div className="form__top"><span>Solicitar demonstração</span><small>01 / 02</small></div>
          {fields.map((field) => <label key={field.label}><span>{field.label}</span><input type={field.type} placeholder={field.placeholder} /></label>)}
          <button type="submit">Continuar <ArrowRight size={17} /></button>
          <small><LockKeyhole size={11} /> Seus dados estão protegidos. Ao continuar, você concorda com nossa Política de Privacidade.</small>
        </form>
      </Container>
    </section>
  );
}
