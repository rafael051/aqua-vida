import axios from 'axios';
import { montarParametrosCianobacterias } from '../utils/montarParametrosCianobacterias';

const api = axios.create({
    baseURL: 'https://apidadosabertos.saude.gov.br',
    headers: {
        Accept: 'application/json',
    },
});

export async function buscarVigilanciaCianobacterias(filtros = {}) {
    const params = montarParametrosCianobacterias(filtros);

    const response = await api.get('/sisagua/vigilancia-cianobacterias-e-cianotoxinas', {
        params,
    });

    return response.data.sisagua_vigilancia_cianobacterias_cianotoxinas || [];
}
