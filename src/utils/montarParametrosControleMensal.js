/**
 * Monta os parâmetros para requisição dos dados de controle mensal
 */
export function montarParametrosControleMensal({
                                                   uf,
                                                   codigo_ibge,
                                                   cnpj_da_instituicao,
                                                   tipo_da_forma_de_abastecimento,
                                                   ano_de_referencia,
                                                   mes_de_referencia,
                                                   parametro,
                                                   valor_minimo,
                                                   valor_maximo,
                                                   limit = 1000,
                                                   offset = 0,
                                               }) {
    const params = {};

    if (uf) params.uf = uf;
    if (codigo_ibge) params.codigo_ibge = codigo_ibge;
    if (cnpj_da_instituicao) params.cnpj_da_instituicao = cnpj_da_instituicao;
    if (tipo_da_forma_de_abastecimento) params.tipo_da_forma_de_abastecimento = tipo_da_forma_de_abastecimento;
    if (ano_de_referencia) params.ano_de_referencia = ano_de_referencia;
    if (mes_de_referencia) params.mes_de_referencia = mes_de_referencia;
    if (parametro) params.parametro = parametro;
    if (valor_minimo !== undefined) params.valor_minimo = valor_minimo;
    if (valor_maximo !== undefined) params.valor_maximo = valor_maximo;

    params.limit = limit;
    params.offset = offset;

    return params;
}
