import livro from '../../assets/livro.png'
import s from './queroDoar.module.scss'

export default function QueroDoar() {
    return (
      <section className={s.principal}>

        <section className={s.container}>
        
          <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>

          <form action="">
            
            <div>
              <img src={livro} alt="" />
              <h3>Informações do Livro</h3>
            </div>

            <input type="text" placeholder='Titulo'/>              
            <input type="text" placeholder='Categoria' />              
            <input type="text" placeholder='Autor' />              
            <input type="text" placeholder='Link da Imagem' />              
            <input type="submit" value="Doar"/>
          </form>
        
        </section>
      
      </section>
    );
  }
  