import "./podcast.css";

export default function podcast() {
  return (
    <main className="conteudo-pagina pagina-podcast">
      <h1 className="titulo-pagina">Perpetual Traffic Podcast</h1>
      <p className="subtitulo-pagina">
        Listen to practical tips and real-world case studies on paid traffic.
      </p>

      <div className="conteudo-grid">
        <div className="card-item">
          <h2>Ep. 450</h2>
          <p>Scaling Ads Beyond $100k/Month</p>
        </div>

        <div className="card-item">
          <h2>Ep. 449</h2>
          <p>Mastering AI in Creative Strategy</p>
        </div>

        <div className="card-item">
          <h2>Ep. 448</h2>
          <p>Google Ads vs Meta Ads Framework</p>
        </div>
      </div>
    </main>
  );
}