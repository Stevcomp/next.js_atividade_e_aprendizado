import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import "./home.css";
import BannerCTA from "@/components/bannerCTA";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {

  await sleep(3500);

  // throw new Error ("Simulando um erro catastrófico.");

  return (
    <main className="conteudo-hero">
      <div className="hero-linha">
        <div className="hero-texto">
          <h1>Unlock Your Business Potential With Facebook & Instagram Advertising</h1>
          <p className="subtitulo">Facebook Premier Level Partner Agency</p>
          <a href="#" className="btn-hero">WORK WITH US</a>
        </div>

        <div className="caixa-imagem">
          <img src="/imagens/tier11graficos.png" alt="Ilustração do celular e dos gráficos" className="hero-img" />
        </div>
      </div>

      <div className="conteudo-badges">
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

      <BannerCTA/>

    </main>
  );
}
