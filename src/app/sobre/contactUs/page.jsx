export default function contactUs() {
  return (
    <main className="conteudo-pagina">
      <h1 className="titulo-pagina">Contact Us</h1>
      <p className="subtitulo-pagina">
        Have questions? Get in touch with our team and we will respond as soon as possible.
      </p>

      <div className="conteudo-grid">
        <div className="card-item">
          <h2>Email Us</h2>
          <p>hello@tier11.com</p>
          <p>support@tier11.com</p>
        </div>

        <div className="card-item">
          <h2>Call Us</h2>
          <p>+1 (800) 123-4567</p>
          <p>Mon - Fri: 9am - 5pm EST</p>
        </div>

        <div className="card-item">
          <h2>Our Office</h2>
          <p>123 Marketing Street</p>
          <p>Suite 400, New York, NY</p>
        </div>
      </div>
    </main>
  );
}