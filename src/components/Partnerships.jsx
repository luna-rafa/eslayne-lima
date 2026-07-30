import { FaArrowRight } from "react-icons/fa";

import logoMonograma from "../assets/logo-monograma.png";
import "./Partnerships.css";

function Partnerships() {
  const whatsappNumber = "5527995787990";

  const whatsappMessage =
    "Olá, Eslayne! Vim através da sua página e gostaria de conversar sobre uma parceria ou projeto.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="partnerships" id="parcerias">
      {/* Elementos decorativos */}
      <div
        className="partnerships__glow partnerships__glow--top"
        aria-hidden="true"
      />

      <div
        className="partnerships__glow partnerships__glow--bottom"
        aria-hidden="true"
      />

      <img
        className="partnerships__watermark"
        src={logoMonograma}
        alt=""
        aria-hidden="true"
      />

      {/* Conteúdo principal */}
      <div className="partnerships__content">
        <div className="partnerships__logo">
          <img
            src={logoMonograma}
            alt="Monograma da marca Eslayne Lima"
          />
        </div>

        <span className="partnerships__tag">
          Parcerias e projetos
        </span>

        <h2 className="partnerships__title">
          Boas conexões podem abrir caminhos para grandes transformações.
        </h2>

        <p className="partnerships__text">
          Estou aberta a projetos, campanhas, eventos e parcerias com marcas,
          profissionais e empresas que compartilham valores, propósito e visão
          de crescimento.
        </p>

        <a
          className="partnerships__button"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar com Eslayne Lima pelo WhatsApp sobre parcerias e projetos"
        >
          <span>Vamos conversar</span>
          <FaArrowRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default Partnerships;