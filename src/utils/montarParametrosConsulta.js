/**
 * Monta o objeto de query params para a rota de
 * controle mensal de parâmetros básicos (/controle-mensal-parametros-basicos)
 *
 * @param {Object} filtros
 * @returns {Object} params
 */
export function montarParametrosConsulta({
                                             uf,
                                             codigo_ibge,
                                             ano,
                                             mes,
                                             parametro,
                                             tipo,
                                             valor_minimo,
                                             valor_maximo,
                                             limit = 1000,
                                             offset = 0,
                                         }) {
    const params = {};

    if (uf) params.uf = uf;
    if (codigo_ibge) params.codigo_ibge = codigo_ibge;
    if (ano) params.ano_de_referencia = ano;
    if (mes) params.mes_de_referencia = mes;
    if (parametro) params.parametro = parametro;
    if (tipo) params.tipo_da_forma_de_abastecimento = tipo;
    if (valor_minimo !== undefined) params.valor_minimo = valor_minimo;
    if (valor_maximo !== undefined) params.valor_maximo = valor_maximo;

    params.limit = limit;
    params.offset = offset;

    return params;
}
