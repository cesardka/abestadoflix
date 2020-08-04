import React, { useState, useEffect } from 'react';
import { Link }       from 'react-router-dom';
import Button         from '../../../components/Button';
import PageDefault    from '../../../components/PageDefault';
import FormField      from '../../../components/FormField';
import useForm        from '../../../hooks/useForm';
import repoCategorias from '../../../repo/categorias';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const { values, handleChange, clearForm } = useForm(valoresIniciais);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        repoCategorias.getAll()
        .then((respostaCategorias) => {
            setCategorias(
                respostaCategorias,
            );
        })
        .catch((err) => {
            console.error(err.message);
        });
    }, []);

    return (
        <PageDefault>
            <h1>Nova Categoria {values.nome} </h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                clearForm();
            }}>

                <FormField
                label="Nome da Categoria"
                type="text"
                name="nome"
                value={values.nome}
                onChange={handleChange}
                />

                <FormField
                label="Descrição"
                type="textarea"
                name="descricao"
                value={values.descricao}
                onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <Button>
                    Cadastrar
                </Button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                return (
                    <li key={`${categoria}${indice}`}>
                    {categoria.titulo}
                    </li>
                )
                })}
            </ul>

            <Link to="/video/novo">
                Cadastrar Vídeo
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;