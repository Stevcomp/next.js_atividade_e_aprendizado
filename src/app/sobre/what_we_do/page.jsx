export default function WhatWeDo() {
  return (
    <main className="hero-container">
      <div className="hero-txt">
        <h1>What We Do</h1>
        <p className="subtitulo">
          We help scale e-commerce and lead gen brands with high-performance paid advertising.
        </p>
      </div>

      <div className="badges-container" style={{ marginTop: '40px' }}>
        <div className="badge-itens">
          <h2>Paid Social</h2>
          <p>Facebook & Instagram ad management focused on maximum ROI.</p>
        </div>
        <div className="badge-itens">
          <h2>Paid Search</h2>
          <p>Google Search & Shopping campaigns designed to capture intent.</p>
        </div>
        <div className="badge-itens">
          <h2>Creative Studio</h2>
          <p>High-converting video and image ad creatives tailored for your audience.</p>
        </div>
      </div>
    </main>
  );
}