import React       from 'react';
import { Link }    from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Nova Categoria</h1>

            <Link to="/video/novo">
                Cadastrar Vídeo
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;