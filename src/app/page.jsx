import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <>

      <section className="hero-container">
        <div className="hero-content">

          <div className="hero-txt">
            <h1>Unlock Your Business Potential With Facebook & Instagram Advertising</h1>
            <p className="subtitulo">Facebook Premier Level Partner Agency</p>
            <Link href={""} className="btnHero">WORK WITH US</Link>
          </div>

          <div className="box-imagem">
            <img src="/imagens/tier11graficos.png" alt="Ilustração do celular e dos gráficos" className="hero-img" />
          </div>

        </div>

          <div className="badges-container">

            <div className="badge-itens">
              <img src="/imagens/tierFacebook.png" alt="Facebook Logo" className="badge-img" />
              <p>Facebook Premier<br />Level Agency Partner</p>
            </div>

            <div className="badge-itens">
              <img src="/imagens/tierGoogle.png" alt="Google Logo" className="badge-img" />
              <p>Google Endorsed<br />Marketing Partner</p>
            </div>

            <div className="badge-itens">
              <img src="/imagens/tierForbes.png" alt="Forbes Logo" className="badge-img" />
              <p>Forbes Agency<br />Council Member</p>
            </div>

            <div className="badge-itens">
              <img src="/imagens/tierInc500.png" alt="Inc. 5000 Logo" className="badge-img" />
              <p>Inc. 5000<br />Fastest Growing Company</p>
            </div>

            <div className="badge-itens-status">
              <h2>$100M</h2>
              <p>In Annual<br />Digital Ad Spend</p>
            </div>

            <div className="badge-itens-status">
              <h2>15+</h2>
              <p>Years of Facebook<br />Advertising Experience</p>
            </div>

          </div>

      </section>

    </>


  );
}