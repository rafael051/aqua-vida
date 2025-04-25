/**
 * Monta o objeto de query params para consulta de cadastro de Carros-Pipa com base nos filtros fornecidos
 */
export function montarParametrosCarroPipa({
                                              codigo_ibge,
                                              uf,
                                              nome_da_instituicao,
                                              placa,
                                              limit = 1000,
                                              offset = 0,
                                          }) {
    const params = {};

    if (codigo_ibge) params.codigo_ibge = codigo_ibge;
    if (uf) params.uf = uf;
    if (nome_da_instituicao) params.nome_da_instituicao = nome_da_instituicao;
    if (placa) params.placa = placa;

    params.limit = limit;
    params.offset = offset;

    return params;
}
