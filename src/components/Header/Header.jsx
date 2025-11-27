import React from 'react';
import styles from './Header.module.css';
import logoAcarb from '../../assets/texto_ACARB_sem_fundo.png'; 
import { Link } from 'react-router-dom'; // Importante para a navegação funcionar

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        
        {/* Logo apontando para a Home */}
        <Link to="/" className={styles.logoLink}>
          <img src={logoAcarb} alt="ACARB Logo" className={styles.logoImage} />
        </Link>

        {/* Lista de Links de Navegação */}
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/sobre" className={styles.navLink}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/mapa" className={styles.navLink}>
              Mapa
            </Link>
          </li>
          <li>
            <Link to="/equipe" className={styles.navLink}>
              Equipe
            </Link>
          </li>
          <li>
            <Link to="/contato" className={styles.navLink}>
              Contato
            </Link>
          </li>
        </ul>

        {/* --- NOVO: Botão de Login/Entrar --- */}
        <Link to="/login" className={styles.loginButton}>
            Entrar
        </Link>

      </nav>
    </header>
  );
};

export default Header;