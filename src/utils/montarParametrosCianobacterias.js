/**
 * Monta o objeto de parâmetros para consulta filtrada de vigilância de cianobactérias e cianotoxinas
 * Endpoint: /sisagua/vigilancia-cianobacterias-e-cianotoxinas
 */
export function montarParametrosCianobacterias({
                                                   uf,
                                                   codigo_ibge,
                                                   ano,
                                                   mes,
                                                   motivo_da_coleta,
                                                   ponto_de_coleta,
                                                   tipo_da_forma_de_abastecimento,
                                                   grupo,
                                                   parametro_ciano,
                                                   resultado,
                                                   limit = 1000,
                                                   offset = 0,
                                               }) {
    const params = {};

    if (uf) params.uf = uf;
    if (codigo_ibge) params.codigo_ibge = codigo_ibge;
    if (ano) params.ano = ano;
    if (mes) params.mes = mes;
    if (motivo_da_coleta) params.motivo_da_coleta = motivo_da_coleta;
    if (ponto_de_coleta) params.ponto_de_coleta = ponto_de_coleta;
    if (tipo_da_forma_de_abastecimento) params.tipo_da_forma_de_abastecimento = tipo_da_forma_de_abastecimento;
    if (grupo) params.grupo = grupo;
    if (parametro_ciano) params.parametro_ciano = parametro_ciano;
    if (resultado) params.resultado = resultado;

    params.limit = limit;
    params.offset = offset;

    return params;
}