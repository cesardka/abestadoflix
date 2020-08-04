import React from 'react';
import PageDefault from '../PageDefault';
import './styles.css';
import TextoSeparado from '../TextoSeparado';

function ErroAbestado() {
    return (
        <PageDefault>
            <TextoSeparado
                texto="Erro 404"
                label="Erro para página não encontrada"
                role="erro404"
            />
            <p>
                Que diabo é isso, abestado?
            </p>
        </PageDefault>
    );
}

export default ErroAbestado;