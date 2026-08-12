export default function Podcast() {
  return (
    <main className="hero-container">
      <div className="hero-txt">
        <h1>Perpetual Traffic Podcast</h1>
        <p className="subtitulo">
          Listen to practical tips and real-world case studies on paid traffic.
        </p>
      </div>

      <div className="badges-container" style={{ marginTop: '40px' }}>
        <div className="badge-itens-status">
          <h2>Ep. 450</h2>
          <p>Scaling Ads Beyond $100k/Month</p>
        </div>
        <div className="badge-itens-status">
          <h2>Ep. 449</h2>
          <p>Mastering AI in Creative Strategy</p>
        </div>
        <div className="badge-itens-status">
          <h2>Ep. 448</h2>
          <p>Google Ads vs Meta Ads Framework</p>
        </div>
      </div>
    </main>
  );
}