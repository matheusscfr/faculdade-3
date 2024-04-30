import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import { Link } from 'react-router-dom'

function Contato() {
    return (
       <>
          <Header />
          <Container>
            <h1 className="sobre">Entre em contato com a gente</h1>
            <p> 80022422</p>
        </Container>
          <Footer />
        </> 
    )
}

export default Contato