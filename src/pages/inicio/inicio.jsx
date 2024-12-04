import community from '../../assets/community.png'
import reading from '../../assets/reading.png'
import transform from '../../assets/transform.png'
import balance from '../../assets/balance.png'
import s from '../inicio/inicio.module.scss'

export default function Inicio() {
    return (
      <main>

      <section className={s.banner}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
  
      <section className={s.devoDoar}>
        <div>
          <h2>Por que devo doar?</h2>
        </div>
          
        <section className={s.boxCards}>

          <article className={s.community}>
              <img src={community} alt="" />
              <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </article>

          <article className={s.reading}>
              <img src={reading} alt="" />
              <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </article>

          <article className={s.transform}>
              <img src={transform} alt="" />
              <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </article>

          <article className={s.balance}>
              <img src={balance} alt="" />
              <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </article>

        </section>

      </section>
      </main>
    );
  }
  