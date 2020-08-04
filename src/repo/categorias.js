import config from '../config';

const URL_CATEGORIAS = `${config.URL_API_ABESTADA}/categorias`;

function getAll() {
    return callApi(`${URL_CATEGORIAS}`);
}

function getAllWithVideos() {
    return callApi(`${URL_CATEGORIAS}?_embed=videos`);
}

function callApi(url) {
    return fetch(url)
        .then(async (respostaServidor) => {
            if (!respostaServidor.ok) {
                throw new Error(`Falha na requisição abestada para [${url}]`);
            }

            return await respostaServidor.json();
        });
}

export default {
    getAll,
    getAllWithVideos,
}