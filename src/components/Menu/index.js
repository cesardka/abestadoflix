import React    from 'react';
import { Link } from 'react-router-dom';
import Button   from '../Button';
import Logo     from '../../assets/img/abestadoflix-120.png';
import './styles.css';

function Menu() {
    return (
        <header className="Menu">
            <Link to="/home">
                <img className="Logo" src={Logo} alt="Abestadoflix" />
            </Link>

            <Button as={Link} to="/video/novo" className="ButtonLink">
                Novo vídeo
            </Button>
        </header>
    );
}

export default Menu;