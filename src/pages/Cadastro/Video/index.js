import React, { useState } from 'react';
import { Link }            from 'react-router-dom';
import PageDefault         from '../../../components/PageDefault';
import FormField           from '../../../components/FormField';
import Button              from '../../../components/Button';

function CadastroVideo() {
    // Valores iniciais de FormField
    const valoresIniciais = {
        nome: '',
        link: '',
        descricao: '',
    }

    // Estados
    const [videos, setVideos] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    // Função que altera valor de um atributo
    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor, // posição [chave] dentro de values recebe valor
        });
    }

    // Handler de submit do formulário
    function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        setVideos([
            ...videos,
            values
        ]);

        setValues(valoresIniciais); // Reseta os valores dos inputs todos
    }

    // Handler de alteração de input
    function handleChange(infoEvento) {
        setValue(
            infoEvento.target.getAttribute('name'),
            infoEvento.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Nova Vídeo: {values.nome}</h1>

            <form onSubmit={handleSubmit}>
                {/* Nome do vídeo      TEXT     */}
                <FormField
                    label="Nome"
                    name="nome"
                    type="text"
                    value={values.nome}
                    onChange={handleChange}
                />

                {/* Link do vídeo      TEXT     */}
                <FormField
                    label="Link Youtube"
                    name="link"
                    type="text"
                    value={values.link}
                    onChange={handleChange}
                />

                {/* Descrição do vídeo TEXTAREA */}
                <FormField
                    label="Descrição"
                    name="descricao"
                    type="textarea"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <Button>
                    Cadastrar
                </Button>
            </form>

            <Link to="/categoria/novo">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    );
}

export default CadastroVideo;