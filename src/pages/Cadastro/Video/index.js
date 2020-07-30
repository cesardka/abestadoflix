import React       from 'react';
import { Link }    from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
    return (
        <PageDefault>
            <h1>Nova Vídeo</h1>

            <Link to="/categoria/novo">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    );
}

export default CadastroVideo;