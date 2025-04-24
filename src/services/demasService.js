// src/services/demasService.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apidadosabertos.saude.gov.br',
    headers: {
        Accept: 'application/json',
    },
});

// 🔹 Busca unidades por município
export async function buscarUnidadesPorMunicipio(codigoMunicipio) {
    const response = await api.get('/cnes/estabelecimentos', {
        params: {
            codigo_municipio: codigoMunicipio,
            limit: 1000,
            offset: 0,
        },
    });
    return response.data.estabelecimentos || [];
}

// 🔹 Busca unidades por município e lista de bairros
export async function buscarEstabelecimentosPorMunicipioEBairros(codigoMunicipio, bairros = []) {
    const response = await api.get('/cnes/estabelecimentos', {
        params: {
            codigo_municipio: codigoMunicipio,
            limit: 1000,
            offset: 0,
        },
    });

    const dados = response.data.estabelecimentos || [];
    return dados.filter(item =>
        item.bairro_estabelecimento &&
        bairros.some(bairro => item.bairro_estabelecimento.toLowerCase().includes(bairro.toLowerCase()))
    );
}

// 🔹 Parâmetros básicos (vigilância)
export async function buscarParametrosBasicos(limit = 100, offset = 0) {
    const response = await api.get('/sisagua/vigilancia-parametros-basicos', {
        params: { limit, offset },
    });
    return response.data.parametros || [];
}

// 🔹 Parâmetros de vigilância - Cianobactérias
export async function buscarVigilanciaCianobacterias(limit = 100, offset = 0) {
    const response = await api.get('/sisagua/vigilancia-cianobacterias-e-cianotoxinas', {
        params: { limit, offset },
    });
    return response.data.sisagua_vigilancia_cianobacterias_cianotoxinas || [];
}

// 🔹 Demais parâmetros mensais
export async function buscarParametrosControleMensal(limit = 100, offset = 0) {
    const response = await api.get('/sisagua/controle-mensal-demais-parametros', {
        params: { limit, offset },
    });
    return response.data.sisagua_controle_mensal_demais_parametros || [];
}

// 🔹 Amostras fora do padrão
export async function buscarAmostrasForaDoPadrao(limit = 100, offset = 0) {
    const response = await api.get('/sisagua/controle-mensal-amostras-fora-do-padrao', {
        params: { limit, offset },
    });
    return response.data.sisagua_controle_mensal_amostras_fora_padrao || [];
}

// 🔹 Pontos de captação de água
export async function buscarPontosDeCaptacao(limit = 100, offset = 0) {
    const response = await api.get('/sisagua/pontos-de-captacao', {
        params: { limit, offset },
    });
    return response.data.pontos_de_captacao || [];
}

// 🔹 Tratamento de água
export async function buscarTratamentoDeAgua(limit = 100, offset = 0) {
    const response = await api.get('/sisagua/tratamento-de-agua', {
        params: { limit, offset },
    });
    return response.data.sisagua_tratamento_agua || [];
}

// 🔹 População abastecida
export async function buscarPopulacaoAbastecida(limit = 100, offset = 0) {
    const response = await api.get('/sisagua/populacao-abastecida', {
        params: { limit, offset },
    });
    return response.data.sisagua_populacao_abastecida || [];
}

// 🔹 Infraestrutura operacional
export async function buscarInfraestrutura(limit = 100, offset = 0) {
    const response = await api.get('/sisagua/controle-mensal-infraestrutura-operacional', {
        params: { limit, offset },
    });
    return response.data.sisagua_mensal_infraestrutura_operacional || [];
}

// 🔹 Plano de amostragem mensal
export async function buscarPlanoDeAmostragem(limit = 100, offset = 0) {
    const response = await api.get('/sisagua/controle-mensal-plano-amostragem', {
        params: { limit, offset },
    });
    return response.data.sisagua_controle_mensal_plano_amostragem || [];
}
