import "./careers.css";
import Link from "next/link";

export default function careers() {
  return (
    <main className="conteudo-pagina">
      <h1 className="titulo-pagina">Join Our Team</h1>
      <p className="subtitulo-pagina">
        We are always looking for talented media buyers, creative strategists, and data analysts.
      </p>

      <div className="conteudo-grid">
        <div className="card-item">
          <span className="badge-vaga">Remote</span>
          <h2>Senior Media Buyer</h2>
          <p>Manage high-budget Meta & Google Ad campaigns with data-driven strategies.</p>
          <Link href={""} className="btn-candidatar">Apply Now →</Link>
        </div>

        <div className="card-item">
          <span className="badge-vaga">Remote</span>
          <h2>Creative Strategist</h2>
          <p>Develop high-converting ad concepts and video scripts for top brands.</p>
          <Link href={""} className="btn-candidatar">Apply Now →</Link>
        </div>

        <div className="card-item">
          <span className="badge-vaga">Hybrid / Remote</span>
          <h2>Data & Analytics Lead</h2>
          <p>Build custom attribution models and tracking dashboards for our clients.</p>
          <Link href={""} className="btn-candidatar">Apply Now →</Link>
        </div>
      </div>
    </main>
  );
}