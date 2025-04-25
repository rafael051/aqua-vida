// src/services/vigilanciaParametrosService.js

import axios from 'axios';
import { montarParametrosVigilancia } from '../utils/montarParametrosVigilancia';

const api = axios.create({
    baseURL: 'https://apidadosabertos.saude.gov.br',
    headers: {
        Accept: 'application/json',
    },
});

/**
 * Consulta os parâmetros básicos de vigilância da qualidade da água
 * @param {Object} filtros Filtros de busca conforme documentação da API
 * @returns {Promise<Array>} Lista de parâmetros
 */
export async function buscarParametrosVigilancia(filtros = {}) {
    const params = montarParametrosVigilancia(filtros);
    const response = await api.get('/sisagua/vigilancia-parametros-basicos', { params });
    return response.data.parametros || [];
}
