import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className={styles.header}>
            <span>(S)cript</span>
            <nav>
                 <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )    
}

export default Header