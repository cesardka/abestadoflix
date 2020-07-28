import React from 'react';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import Logo from '../../assets/img/abestadoflix-120.png';
import './styles.css';

function Menu() {
    return (
        <header className="Menu">
            <a href="/home">
                <img className="Logo" src={Logo} alt="Abestadoflix" />
            </a>

            <Button as="a" href="/home" className="ButtonLink">
                Novo vídeo
            </Button>
        </header>
    );
}

export default Menu;