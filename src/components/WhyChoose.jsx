import {
  FaComments,
  FaHandshake,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

import "./WhyChoose.css";

function WhyChoose() {
  const values = [
    {
      number: "01",
      icon: <FaHandshake aria-hidden="true" />,
      title: "Conexões verdadeiras",
      text: "Acredito que os melhores resultados nascem de relacionamentos sólidos, construídos com confiança, respeito e presença.",
    },
    {
      number: "02",
      icon: <FaShieldAlt aria-hidden="true" />,
      title: "Credibilidade",
      text: "Cada parceria é conduzida com responsabilidade, transparência e compromisso em todas as etapas.",
    },
    {
      number: "03",
      icon: <FaRocket aria-hidden="true" />,
      title: "Propósito",
      text: "Mais do que alcançar metas, acredito em projetos que geram impacto positivo e deixam um legado.",
    },
    {
      number: "04",
      icon: <FaComments aria-hidden="true" />,
      title: "Comunicação",
      text: "Transformo experiências em mensagens que aproximam pessoas, fortalecem marcas e criam oportunidades.",
    },
  ];

  return (
    <section className="why" id="valores">
      <div className="why__glow why__glow--top" />
      <div className="why__glow why__glow--bottom" />

      <div className="why__content">
        <div className="why__heading">
          <span className="why__tag">
            Os valores que conduzem minha atuação
          </span>

          <h2 className="why__title">
            Mais do que resultados, acredito em relações construídas com
            confiança, propósito e compromisso.
          </h2>

          <p className="why__intro">
            Cada projeto começa com escuta, clareza e respeito. São esses
            princípios que orientam minhas decisões, minhas conexões e a forma
            como construo cada parceria.
          </p>
        </div>

        <div className="why__list">
          {values.map((value) => (
            <article className="why__item" key={value.title}>
              <span className="why__number" aria-hidden="true">
                {value.number}
              </span>

              <div className="why__icon">{value.icon}</div>

              <div className="why__item-content">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;