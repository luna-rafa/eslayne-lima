import {
  FaBriefcase,
  FaHandshake,
  FaMicrophone,
  FaStar,
} from "react-icons/fa";

import eslaynePalco from "../assets/eslayne-palco.png";
import "./Areas.css";

function Areas() {
  const areas = [
    {
      icon: <FaBriefcase aria-hidden="true" />,
      title: "Empresária",
      text: "Conecto pessoas, marcas e oportunidades, criando relações estratégicas que geram crescimento, credibilidade e resultados.",
    },
    {
      icon: <FaStar aria-hidden="true" />,
      title: "Embaixadora Popdrat",
      text: "Represento uma marca em que acredito, fortalecendo experiências reais, confiança e conexões verdadeiras em cada parceria.",
    },
    {
      icon: <FaMicrophone aria-hidden="true" />,
      title: "Palestras",
      text: "Compartilho experiências, conhecimento e propósito em eventos, empresas e instituições por meio de uma comunicação próxima e inspiradora.",
    },
    {
      icon: <FaHandshake aria-hidden="true" />,
      title: "Parcerias estratégicas",
      text: "Desenvolvo projetos e conexões entre marcas, profissionais e empresas que compartilham valores, propósito e objetivos em comum.",
    },
  ];

  return (
    <section className="areas" id="atuacao">
      <div className="areas__glow areas__glow--top" />
      <div className="areas__glow areas__glow--bottom" />

      <div className="areas__content">
        <div className="areas__image-column">
          <div className="areas__image-frame">
            <img
              className="areas__image"
              src={eslaynePalco}
              alt="Eslayne Lima palestrando em um evento"
            />
          </div>

          <div className="areas__image-detail" aria-hidden="true" />

          <div className="areas__badge">
            <span>Comunicação</span>
            <strong>com propósito</strong>
          </div>
        </div>

        <div className="areas__text-column">
          <span className="areas__tag">Áreas de atuação</span>

          <h2 className="areas__title">
            Onde transformo conexões em resultados.
          </h2>

          <p className="areas__intro">
            Minha atuação une empreendedorismo, comunicação e relacionamento
            para criar oportunidades, fortalecer marcas e gerar impacto real.
          </p>

          <div className="areas__list">
            {areas.map((area) => (
              <article className="areas__item" key={area.title}>
                <div className="areas__item-header">
                  <div className="areas__icon">{area.icon}</div>

                  <h3>{area.title}</h3>
                </div>

                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Areas;