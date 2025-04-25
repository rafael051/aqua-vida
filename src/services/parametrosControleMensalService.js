import axios from 'axios';
import { montarParametrosControleMensal } from '../utils/montarParametrosControleMensal';

const api = axios.create({
    baseURL: 'https://apidadosabertos.saude.gov.br',
    headers: {
        Accept: 'application/json',
    },
});

/**
 * Busca parâmetros básicos de controle mensal com filtros
 */
export async function buscarParametrosControleMensal(filtros = {}) {
    const params = montarParametrosControleMensal(filtros);
    const response = await api.get('/sisagua/controle-mensal-parametros-basicos', { params });

    return response.data.parametros || [];
}
