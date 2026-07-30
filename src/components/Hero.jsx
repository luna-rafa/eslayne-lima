import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import logo from "../assets/logo.png";
import eslaynePhoto from "../assets/eslayne.jpeg";
import "./Hero.css";

function Hero() {
  const whatsappNumber = "5527995787990";
  const whatsappMessage =
    "Olá, Eslayne! Vim através do seu link e gostaria de conversar.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="hero" id="inicio">
      <div className="hero__glow hero__glow--top" />
      <div className="hero__glow hero__glow--bottom" />

      <div className="hero__content">
        <div className="hero__text">
         <div className="hero__logo">
  <img src={logo} alt="Logo Eslayne Lima" />
</div>

          <p className="hero__eyebrow">
            Empresária
            <span>•</span>
            Embaixadora Popdrat
            <span>•</span>
            Mãe atípica
          </p>

          <h1 className="hero__name">Eslayne Lima</h1>

          <div className="hero__divider" aria-hidden="true">
            <span />
            <FaStar />
            <span />
          </div>

          <p className="hero__description">
            Mais do que empreender, eu conecto{" "}
            <strong>pessoas, marcas e propósitos</strong> para gerar impacto e
            transformação.
          </p>

          <div className="hero__actions">
            <a
              className="hero__button hero__button--primary"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden="true" />
              <span>Fale comigo no WhatsApp</span>
            </a>

            <a
              className="hero__button hero__button--secondary"
              href="https://www.instagram.com/soueslayne_lima/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram aria-hidden="true" />
              <span>Conheça meu Instagram</span>
            </a>
          </div>
        </div>

        <div className="hero__image-area">
          <div className="hero__image-frame">
            <img
              className="hero__image"
              src={eslaynePhoto}
              alt="Eslayne Lima em seu ambiente profissional"
            />
          </div>

          <div className="hero__image-line" aria-hidden="true" />
        </div>
      </div>

      <p className="hero__signature">
        Fé, propósito e ação transformam vidas.
      </p>
    </section>
  );
}

export default Hero;