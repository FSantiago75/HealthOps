import { useEffect, useRef } from 'react';
import Container from '../global/Container';
import Eyebrow from '../global/Eyebrow';
import { ArrowRight, Check, CheckCircle2, LockKeyhole, X } from 'lucide-react';

const fields = [
  { label: 'Nome', type: 'text', placeholder: 'Como podemos chamar você?' },
  { label: 'E-mail profissional', type: 'email', placeholder: 'voce@empresa.com.br' },
  { label: 'Empresa', type: 'text', placeholder: 'Nome da empresa' },
  { label: 'Telefone', type: 'tel', placeholder: '(00) 00000-0000' },
];

export default function Contact() {
  const toastTimer = useRef(null);
  const toastRef = useRef(null);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const handleSubmit = (event) => {
    event?.preventDefault();
    clearTimeout(toastTimer.current);
    toastRef.current?.classList.add('is-visible');
    toastRef.current?.setAttribute('aria-hidden', 'false');
    toastTimer.current = setTimeout(() => closeToast(), 5600);
  };

  const closeToast = () => {
    toastRef.current?.classList.remove('is-visible');
    toastRef.current?.setAttribute('aria-hidden', 'true');
  };

  return (
    <section className="contact" id="contato">
      <Container className="contact__grid">
        <div className="contact__copy" data-reveal><Eyebrow tone="cyan">Próximo passo</Eyebrow><h2>Imagine essa experiência na realidade da sua rede de saúde.</h2><p>Um conceito de como conectar laboratório, hospital, PA e gestão em uma única jornada digital.</p><div className="contact__note"><span><Check size={14} /></span><p>Demonstração personalizada para o seu cenário</p></div><div className="contact__note"><span><Check size={14} /></span><p>Conversa consultiva, sem compromisso</p></div></div>
        <form className="contact__form" data-reveal onSubmit={handleSubmit}>
          <div className="form__top"><span>Solicitar demonstração</span><small>01 / 02</small></div>
          {fields.map((field) => <label key={field.label}><span>{field.label}</span><input type={field.type} placeholder={field.placeholder} /></label>)}
          <button type="button" onClick={handleSubmit}>Continuar <ArrowRight size={17} /></button>
          <small><LockKeyhole size={11} /> Seus dados estão protegidos. Ao continuar, você concorda com nossa Política de Privacidade.</small>
        </form>
      </Container>
      <div ref={toastRef} className="demo-toast" role="status" aria-live="polite" aria-hidden="true">
        <span className="demo-toast__icon"><CheckCircle2 size={20} strokeWidth={1.8} /></span>
        <div><strong>Demonstração concluída</strong><p>Este é um site demonstrativo. Nenhum dado foi enviado ou armazenado.</p></div>
        <button type="button" onClick={closeToast} aria-label="Fechar aviso"><X size={17} /></button>
      </div>
    </section>
  );
}
