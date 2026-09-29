import certificationIcon from '../assets/icons/certification.png';
import qualityIcon from '../assets/icons/conformidadeQualid.png';
import growthIcon from '../assets/icons/crescimentoSus.png';
import intelligenceIcon from '../assets/icons/gestãoInte.png';
import operationIcon from '../assets/icons/operacaoSemGarg.png';
import serviceIcon from '../assets/icons/service.png';
import tubeIcon from '../assets/icons/tube.png';
import tubeBalloonIcon from '../assets/icons/tubeBaloon.png';

export const metrics = [
  { value: '24/7', label: 'visibilidade contínua da operação', index: '01', icon: tubeBalloonIcon },
  { value: '360°', label: 'da jornada diagnóstica em uma visão', index: '02', icon: serviceIcon },
  { value: '100%', label: 'de rastreabilidade como objetivo operacional', index: '03', icon: certificationIcon },
  { value: 'Multi', label: 'unidades conectadas em uma arquitetura', index: '04', icon: tubeIcon },
];

export const challenges = [
  { title: 'Sistemas fragmentados', text: 'Informações dispersas reduzem a visibilidade da operação.', icon: serviceIcon },
  { title: 'Gargalos invisíveis', text: 'Atrasos e retrabalho aparecem tarde demais para a gestão.', icon: tubeIcon },
  { title: 'Rastreabilidade limitada', text: 'A jornada da amostra precisa ser segura do início ao fim.', icon: certificationIcon },
  { title: 'Expansão sem controle', text: 'Crescer exige processos consistentes entre todas as unidades.', icon: tubeBalloonIcon },
];

export const platformFeatures = [
  { number: '01', title: 'Gestão inteligente', text: 'Indicadores em tempo real e controle da performance operacional e administrativa.', icon: intelligenceIcon },
  { number: '02', title: 'Operação sem gargalos', text: 'Fluxos personalizados, automação e rastreabilidade total da jornada do exame.', icon: operationIcon },
  { number: '03', title: 'Crescimento sustentável', text: 'Arquitetura 100% web, cloud segura e preparada para expansão multiunidades.', icon: growthIcon },
  { number: '04', title: 'Conformidade e qualidade', text: 'Processos aderentes aos principais programas de acreditação do setor.', icon: qualityIcon },
];

export const benefits = [
  'Redução de retrabalho',
  'Aumento de produtividade',
  'Maior controle financeiro',
  'Decisões orientadas por dados',
  'Melhor experiência do paciente',
  'Sustentação do crescimento',
];

export const journey = [
  { title: 'Entrada', text: 'Cadastro e identificação segura' },
  { title: 'Triagem', text: 'Regras e prioridades automatizadas' },
  { title: 'Processamento', text: 'Integração e acompanhamento' },
  { title: 'Liberação', text: 'Controle, qualidade e resultado' },
];
