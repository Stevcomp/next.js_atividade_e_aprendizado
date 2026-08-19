import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (

<footer className="footer">
          <div className="conteudo-footer">
            <p>© {new Date().getFullYear()} Tier 11. All rights reserved.</p>
            <div className="footer-links">
              <Link href={"/sobre/privacyPolicy"}>Privacy Policy</Link>
              <Link href={"/sobre/termsOfService"}>Terms of Service</Link>
              <Link href={"/sobre/contactUs"}>Contact Us</Link>
            </div>
          </div>
        </footer>

        );
}