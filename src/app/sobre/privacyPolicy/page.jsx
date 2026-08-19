export default function privacyPolicy() {
  return (
    <main className="conteudo-pagina">
      <h1 className="titulo-pagina">Privacy Policy</h1>
      <p className="subtitulo-pagina">
        Your privacy is important to us. Learn how we handle and protect your personal data.
      </p>

      <div className="conteudo-grid">
        <div className="card-item">
          <h2>Data Collection</h2>
          <p>We only collect information necessary to provide and improve our marketing services to you.</p>
        </div>

        <div className="card-item">
          <h2>Data Protection</h2>
          <p>We implement strict security measures to protect your personal information from unauthorized access.</p>
        </div>

        <div className="card-item">
          <h2>Third Parties</h2>
          <p>We do not sell or trade your personally identifiable information to outside parties.</p>
        </div>
      </div>
    </main>
  );
}