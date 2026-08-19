export default function blog() {
  return (
    <main className="conteudo-pagina pagina-blog">
      <h1 className="titulo-pagina">Latest Insights</h1>
      <p className="subtitulo-pagina">
        Strategies, tactics, and news on digital advertising and media buying.
      </p>

      <div className="conteudo-grid">
        <div className="card-item">
          <h2>Facebook Ads in 2026</h2>
          <p>Key strategies to scale performance campaigns this year.</p>
        </div>

        <div className="card-item">
          <h2>Ad Creative Testing</h2>
          <p>How to build a continuous testing framework that drives ROAS.</p>
        </div>

        <div className="card-item">
          <h2>Attribution Guide</h2>
          <p>Understanding multi-touch attribution in modern marketing.</p>
        </div>
      </div>
    </main>
  );
}