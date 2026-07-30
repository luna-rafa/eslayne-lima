import finalPhoto from "../assets/eslayne-final.png";
import "./Manifesto.css";

function Manifesto() {
  return (
    <section className="manifesto" id="manifesto">
      <div className="manifesto__image" aria-hidden="true">
        <img
          src={finalPhoto}
          alt=""
        />
      </div>

      <div className="manifesto__overlay" aria-hidden="true" />
      <div className="manifesto__glow" aria-hidden="true" />

      <div className="manifesto__content">
        <span className="manifesto__tag">
          Uma trajetória movida por propósito
        </span>

        <h2 className="manifesto__title">
          Propósito.
          <br />
          Conexão.
          <br />
          <strong>Transformação.</strong>
        </h2>

        <p className="manifesto__text">
          Acredito que toda história pode alcançar novos caminhos quando existe
          coragem para agir, propósito para continuar e pessoas dispostas a
          caminhar juntas.
        </p>

        <div className="manifesto__signature">
          <span className="manifesto__line" aria-hidden="true" />

          <div>
            <strong>Eslayne Lima</strong>
            <span>Empresária, embaixadora e palestrante</span>
          </div>
        </div>
      </div>

      <div className="manifesto__scroll-detail" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}

export default Manifesto;