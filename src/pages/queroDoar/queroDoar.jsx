import livro from '../../assets/livro.png'
import s from './queroDoar.module.scss'
import axios from 'axios'
import {useState} from 'react' 

export default function QueroDoar() {

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

    const enviarDados = async()=>{
        
      const urlApi = "https://api-livros-vnw-k1g3.onrender.com/doar" // URL da API

      // Objeto contendo os dados do livro
      const dadosEnviar = {
          titulo,
          categoria,
          autor,
          imagem_url
      }

      await axios.post(urlApi, dadosEnviar) // Envia os dados para a API via POST

      alert("Livro cadastrado!!") // Exibe um alerta informando o sucesso da operação

      // Reseta os campos do formulário
      setTitulo("")
      setCategoria("")
      setAutor("")
      setImagem_url("")
  }

  // Funções para capturar e atualizar os estados com os valores inseridos pelo usuário
  const capturaTitulo = (e) =>{
      setTitulo(e.target.value)
      console.log(e.target.value) // Exibe o valor no console para debug
  }

  const capturaCategoria = (e) =>{
      setCategoria(e.target.value)
  }

  const capturaAutor = (e) =>{
      setAutor(e.target.value)
  }

  const capturaImagem = (e) =>{
      setImagem_url(e.target.value)
  }


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
  