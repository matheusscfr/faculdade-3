import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import { Link } from 'react-router-dom'
import "../Sobre/Sobre.module.css"
function Sobre() {
    return (
       <>
          <Header />
          <Container>
            <h1 className="sobre">Sobre nós</h1>
            <p> Com uma abordagem interativa e intuitiva dos pontos turísticos de nosso centro pernambucano, a equipe (S)CRYPT surgiu com a inovação de tirar os conhecimentos dos livros e traze-los aos toques do turista e do recifense.


Por meio de um sistema de GPS e por meio de um celular, o presente aplicativo entrega a possibilidade de visita presencial a pontos turísticos, fatos históricos, e itens digitais colecionáveis de raridade variada.


Quanto mais for desbravada a nossa querida capital, maiores as chances de obter os itens únicos!

A equipe (S)CRYPT tem compromisso em mostrar que a história, entretenimento e mobilidade devem andar juntos.
</p>
        </Container>
          <Footer />
        </> 
    )
}

export default Sobre