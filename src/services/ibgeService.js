import axios from 'axios';

const IBGE_API = 'https://servicodados.ibge.gov.br/api/v1/localidades';

/**
 * Retorna a lista de todos os estados do Brasil (UFs).
 * @returns {Promise<Array<{ id: number, sigla: string, nome: string }>>}
 */
export async function buscarEstados() {
    const response = await axios.get(`${IBGE_API}/estados`);
    // Ordenar por nome para melhor usabilidade
    return response.data.sort((a, b) => a.nome.localeCompare(b.nome));
}

/**
 * Retorna os municípios de um estado com o código IBGE ajustado para 6 dígitos (sem o dígito verificador final).
 * @param {number} ufId - Código do estado (ex: 35 para SP)
 * @returns {Promise<Array<{ nome: string, codigo_ibge_6: string, codigo_ibge_original: number }>>}
 */
export async function buscarMunicipiosPorUF(ufId) {
    const response = await axios.get(`${IBGE_API}/estados/${ufId}/municipios`);

    return response.data.map(municipio => {
        const codigoOriginal = municipio.id;
        const codigoCortado = String(codigoOriginal).slice(0, 6); // Remove o último dígito

        return {
            nome: municipio.nome,
            codigo_ibge_original: codigoOriginal,
            codigo_ibge_6: codigoCortado,
        };
    });
}
