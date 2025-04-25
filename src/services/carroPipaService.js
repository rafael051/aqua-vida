import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apidadosabertos.saude.gov.br',
    headers: {
        Accept: 'application/json',
    },
});

/**
 * Consulta cadastro de carros-pipa e população atendida
 * @param {number} limit - Limite de registros (máx: 1000)
 * @param {number} offset - Página de resultados (inicia em 0)
 * @returns {Promise<Object[]>} Lista de registros de carros-pipa
 */
export async function buscarCadastroCarroPipa(limit = 100, offset = 0) {
    const response = await api.get('/sisagua/cadastro-carro-pipa-populacao', {
        params: { limit, offset },
    });
    return response.data.sisagua_cadastro_carro_pipa_populacao || [];
}
