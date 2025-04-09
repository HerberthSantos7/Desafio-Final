import s from './livrosDoados.module.scss'
import protagonista from '../../assets/protagonista.png'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Doados() {

  const [livros, setLivros] = useState([])

  const getLivros = async () => {
      try {
          const response = await axios.get("https://api-livros-vnw-k1g3.onrender.com/livros")
          setLivros(response.data)
      } catch (error) {
          console.error("Erro ao buscar livros:", error)
      }
  }

  useEffect(() => {
      getLivros()
  }, [])

    return (
      <section className={s.boxDoados}>
        <h2>LIVROS DOADOS</h2>
        <section className={s.boxCard}>
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