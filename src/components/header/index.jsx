import Link from "next/link";
import "./header.css";

export default function Header() {
  return (

<header className="header">
          <div className="logo">
            <Link href="/">
              <img src="/imagens/tier11.png" alt="tier logo" className="logo-img" />
            </Link>
          </div>

          <nav className="menu">
            <Link href="/sobre/what_we_do" className="link-nav">
              WHAT WE DO <span className="setinha">▼</span>
            </Link>
            <Link href="/sobre/blog" className="link-nav">
              BLOG
            </Link>
            <Link href="/sobre/podcast" className="link-nav">
              PODCAST
            </Link>
            <Link href="/sobre/careers" className="link-nav">
              CAREERS
            </Link>
          </nav>

          <Link href={""} className="btn-header">WORK WITH US</Link>
        </header>

  );
}