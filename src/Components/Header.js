import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import { ReactComponent as Logo } from '../Assets/dogs.svg'; // Transformar o svg em components

const Header = () => {
  return (
    <header className={styles.header}>
      <Container maxWidth="lg" className={styles.container} fixed>
        <nav className={styles.nav}>
          <Link className={styles.logo} to="/">
            <Logo />
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
