const bars = [44, 68, 57, 83, 72, 92, 78];

export default function DashboardMockup() {
  return (
    <div className="dashboard" aria-label="Demonstração visual de um painel de gestão laboratorial">
      <div className="dashboard__chrome"><i /><i /><i /><span>Visão operacional</span></div>
      <div className="dashboard__body">
        <aside className="dashboard__rail"><b>S</b>{[1, 2, 3, 4, 5].map((item) => <i key={item} />)}</aside>
        <div className="dashboard__content">
          <div className="dashboard__topline"><div><small>Operação hoje</small><strong>Visão geral</strong></div><span>Atualizado agora</span></div>
          <div className="dashboard__stats">
            <article><small>Exames processados</small><strong>12.840</strong><em>+8,4%</em></article>
            <article><small>Dentro do prazo</small><strong>97,6%</strong><em>+2,1%</em></article>
            <article><small>Unidades online</small><strong>18/18</strong><em>estável</em></article>
          </div>
          <div className="dashboard__grid">
            <article className="chart-card">
              <div className="chart-card__label"><span>Volume por período</span><small>Últimos 7 dias</small></div>
              <div className="bars">{bars.map((bar, index) => <i key={index} style={{ '--height': `${bar}%` }} />)}</div>
            </article>
            <article className="status-card">
              <div className="status-card__ring"><strong>94</strong><span>score</span></div>
              <p>Performance operacional</p>
              <small>Todos os indicadores dentro da meta</small>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
