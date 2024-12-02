import s from './livrosDoados.module.scss'
import protagonista from '../../assets/protagonista.png'

export default function LivrosDoados() {
    return (
      <section className={s.boxDoados}>
        <h2>LIVROS DOADOS</h2>
        <section className={s.cards}>
          <article>
            <img src={protagonista} alt="" />
            <h3>O Protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </article>
        </section>
      </section>
    );
  }
  