import axios from 'axios';
import { montarParametrosCianobacterias } from '../utils/montarParametrosCianobacterias';

const api = axios.create({
    baseURL: 'https://apidadosabertos.saude.gov.br',
    headers: {
        Accept: 'application/json',
    },
});

/**
 * Consulta os dados de vigilância de cianobactérias e cianotoxinas da API SISAGUA com filtros personalizados.
 * @param {Object} filtros - Objeto contendo os filtros da consulta (ex: uf, municipio, ano, mes...)
 * @returns {Promise<Object[]>} Lista de registros encontrados
 */
export async function buscarVigilanciaCianobacteriasFiltrado(filtros = {}) {
    const params = montarParametrosCianobacterias(filtros);

    const response = await api.get('/sisagua/vigilancia-cianobacterias-e-cianotoxinas', {
        params,
    });

    return response.data.sisagua_vigilancia_cianobacterias_cianotoxinas || [];
}
