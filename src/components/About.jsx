import "./About.css";
import eslayneAbout from "../assets/eslayne-about.png";

function About() {
  return (
    <section className="about" id="sobre">
      <div className="about__content">

        <div className="about__image-column">

          <div className="about__image-frame">
            <img
              src={eslayneAbout}
              alt="Eslayne Lima"
              className="about__image"
            />
          </div>

        </div>

        <div className="about__text-column">

          <span className="about__tag">
            Sobre mim
          </span>

          <h2 className="about__title">
            Transformando experiências em conexões que geram impacto.
          </h2>

          <p className="about__text">
            Minha trajetória é marcada pela fé, pelo propósito e pelo desejo
            de conectar pessoas, marcas e oportunidades.
          </p>

          <p className="about__text">
            Como empresária, embaixadora da Popdrat e mãe atípica,
            acredito que toda experiência pode se transformar
            em direção para outras pessoas.
          </p>

          <div className="about__cards">

            <article className="about__card">

              <h3>Empresária</h3>

              <p>
                Desenvolvendo conexões estratégicas entre pessoas,
                marcas e projetos.
              </p>

            </article>

            <article className="about__card">

              <h3>Embaixadora Popdrat</h3>

              <p>
                Representando uma marca baseada
                em confiança e experiências reais.
              </p>

            </article>

            <article className="about__card">

              <h3>Mãe Atípica</h3>

              <p>
                Uma missão que fortaleceu meu propósito
                de acolher e inspirar.
              </p>

            </article>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;