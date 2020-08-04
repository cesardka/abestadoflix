import config from '../config';

const URL_VIDEOS = `${config.URL_API_ABESTADA}/videos`;

function create(objVideo) {
    return callApi(`${URL_VIDEOS}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objVideo),
    });
}

function getAll() {
    return callApi(`${URL_VIDEOS}`);
}

function callApi(url, opt = {}) {
    return fetch(url, opt)
        .then(async (respostaServidor) => {
            if (!respostaServidor.ok) {
                throw new Error(`Falha na requisição abestada para [${url}]`);
            }

            return await respostaServidor.json();
        });
}

export default {
    getAll,
    create,
}