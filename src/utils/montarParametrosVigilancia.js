/**
 * Monta os parâmetros para a consulta de vigilância de parâmetros básicos do SISAGUA
 */
export function montarParametrosVigilancia({
                                               uf,
                                               codigo_ibge,
                                               motivo_da_coleta,
                                               tipo,
                                               ano,
                                               mes,
                                               procedencia_da_coleta,
                                               ponto_de_coleta,
                                               parametro,
                                               ld_minimo,
                                               ld_maximo,
                                               lq_minimo,
                                               lq_maximo,
                                               limit = 1000,
                                               offset = 0,
                                           }) {
    const params = {};

    if (uf) params.uf = uf;
    if (codigo_ibge) params.codigo_ibge = codigo_ibge;
    if (motivo_da_coleta) params.motivo_da_coleta = motivo_da_coleta;
    if (tipo) params.tipo_da_forma_de_abastecimento = tipo;
    if (ano) params.ano = ano;
    if (mes) params.mes = mes;
    if (procedencia_da_coleta) params.procedencia_da_coleta = procedencia_da_coleta;
    if (ponto_de_coleta) params.ponto_de_coleta = ponto_de_coleta;
    if (parametro) params.parametro = parametro;
    if (ld_minimo !== undefined) params.ld_minimo = ld_minimo;
    if (ld_maximo !== undefined) params.ld_maximo = ld_maximo;
    if (lq_minimo !== undefined) params.lq_minimo = lq_minimo;
    if (lq_maximo !== undefined) params.lq_maximo = lq_maximo;

    params.limit = limit;
    params.offset = offset;

    return params;
}
