import axios from 'axios';

/**
 * Buscar localidade (cidade, UF e IBGE) a partir de um CEP
 * @param {string} cep CEP do endereço
 * @returns {Promise<{localidade: string, uf: string, ibge: string}>}
 */
export async function buscarLocalidadePorCep(cep) {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        return {
            localidade: response.data.localidade,
            uf: response.data.uf,
            ibge: response.data.ibge?.substring(0, 6), // ✅ Corrigido para remover dígito verificador
        };
    } catch (error) {
        console.error('Erro ao buscar localidade pelo CEP:', error);
        throw error;
    }
}
