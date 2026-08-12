export default function Blog() {
  return (
    <main className="hero-container">
      <div className="hero-txt">
        <h1>Latest Insights</h1>
        <p className="subtitulo">
          Strategies, tactics, and news on digital advertising and media buying.
        </p>
      </div>

      <div className="badges-container" style={{ marginTop: '40px' }}>
        <div className="badge-itens">
          <h2>Facebook Ads in 2026</h2>
          <p>Key strategies to scale performance campaigns this year.</p>
        </div>
        <div className="badge-itens">
          <h2>Ad Creative Testing</h2>
          <p>How to build a continuous testing framework that drives ROAS.</p>
        </div>
        <div className="badge-itens">
          <h2>Attribution Guide</h2>
          <p>Understanding multi-touch attribution in modern marketing.</p>
        </div>
      </div>
    </main>
  );
}