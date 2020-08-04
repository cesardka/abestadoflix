import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import PageDefault    from '../../../components/PageDefault';
import FormField      from '../../../components/FormField';
import Button         from '../../../components/Button';
import useForm        from '../../../hooks/useForm';
import repoCategorias from '../../../repo/categorias';
import repoVideos     from '../../../repo/videos';

function CadastroVideo() {
    let history = useHistory();
    const [ categorias, setCategorias ] = useState([]);
    const categoriasTitulos = categorias.map(({ titulo }) => titulo);

    // Valores iniciais de cada FormField
    const { handleChange, values } = useForm({
        titulo: '',
        url: '',
        descricao: '',
        categoria: '',
    });

    // Controle de submit
    const handleSubmit = (event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
        });

        if (categoriaEscolhida === undefined) {
            return false;
        }

        repoVideos.create({
            titulo: values.titulo,
            url: values.url,
            descricao: values.descricao,
            categoria: categoriaEscolhida.id,
        }).then(() => {
            history.push('/');
        });
    }

    // Wrapper dos botões
    const ButtonWrapper = styled.div`
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    `;

    useEffect(() => {
        repoCategorias
            .getAll()
            .then((categorias) => {
                setCategorias(categorias);
            })
    }, []);


    return (
        <PageDefault>
            <h1>Novo Vídeo: {values.nome}</h1>

            <form onSubmit={handleSubmit}>
                {/* Título do vídeo */}
                <FormField
                    label="Título do vídeo"
                    name="titulo"
                    type="text"
                    value={values.titulo}
                    onChange={handleChange}
                />

                {/* Link do vídeo */}
                <FormField
                    label="Link Youtube"
                    name="link"
                    type="text"
                    value={values.url}
                    onChange={handleChange}
                />

                {/* Descrição do vídeo */}
                <FormField
                    label="Descrição"
                    name="descricao"
                    type="textarea"
                    value={values.descricao}
                    onChange={handleChange}
                />

                {/* Categoria */}
                <FormField
                    label="Categoria"
                    name="categoria"
                    type="datalist"
                    value={values.categoria}
                    onChange={handleChange}
                    suggestions={categoriasTitulos}
                />

                <ButtonWrapper>
                    <Button type="submit">
                        Cadastrar
                    </Button>

                    <Button to="/categoria/novo">
                        Cadastrar Categoria
                    </Button>
                </ButtonWrapper>
            </form>
        </PageDefault>
    );
}

export default CadastroVideo;