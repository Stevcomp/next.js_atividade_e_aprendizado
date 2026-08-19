import "./what_we_do.css";

export default function what_we_do() {
  return (
    <main className="conteudo-pagina pagina-o-que-fazemos">
      <h1 className="titulo-pagina">What We Do</h1>
      <p className="subtitulo-pagina">
        We help scale e-commerce and lead gen brands with high-performance paid advertising.
      </p>

      <div className="conteudo-grid">
        <div className="card-item">
          <h2>Paid Social</h2>
          <p>Facebook & Instagram ad management focused on maximum ROI.</p>
        </div>

        <div className="card-item">
          <h2>Paid Search</h2>
          <p>Google Search & Shopping campaigns designed to capture intent.</p>
        </div>

        <div className="card-item">
          <h2>Creative Studio</h2>
          <p>High-converting video and image ad creatives tailored for your audience.</p>
        </div>
      </div>
    </main>
  );
}