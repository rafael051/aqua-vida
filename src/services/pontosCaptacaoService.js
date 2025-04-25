import axios from 'axios';
import { montarParametrosCaptacao } from '../utils/montarParametrosCaptacao';

const api = axios.create({
    baseURL: 'https://apidadosabertos.saude.gov.br',
    headers: {
        Accept: 'application/json',
    },
});

/**
 * Busca pontos de captação com filtros opcionais
 */
export async function buscarPontosDeCaptacao(filtros = {}) {
    const params = montarParametrosCaptacao(filtros);
    const response = await api.get('/sisagua/pontos-de-captacao', { params });
    return response.data.pontos_de_captacao || [];
}
