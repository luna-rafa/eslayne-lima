import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import logo from "../assets/logo.png";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappNumber = "5527995787990";

  const whatsappMessage =
    "Olá, Eslayne! Vim através da sua página e gostaria de conversar.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />

      <div className="footer__content">
        <div className="footer__brand">
          <img
            className="footer__logo"
            src={logo}
            alt="Logo Eslayne Lima"
          />

          <p className="footer__description">
            Empresária, embaixadora Popdrat, palestrante e mãe atípica.
          </p>
        </div>

        <nav className="footer__socials" aria-label="Redes sociais">
          <a
            className="footer__social-link"
            href="https://www.instagram.com/soueslayne_lima/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Eslayne Lima"
          >
            <FaInstagram aria-hidden="true" />
            <span>Instagram</span>
          </a>

          <a
            className="footer__social-link"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de Eslayne Lima"
          >
            <FaWhatsapp aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </nav>
      </div>

      <div className="footer__bottom">
        <p>© {currentYear} Eslayne Lima. Todos os direitos reservados.</p>

        <p className="footer__credit">
          Desenvolvido por Rodrigues Digital
        </p>
      </div>
    </footer>
  );
}

export default Footer;