/**
 * Monta os parâmetros de busca dos pontos de captação
 */
export function montarParametrosCaptacao({
                                             uf,
                                             codigo_ibge,
                                             limit = 1000,
                                             offset = 0
                                         }) {
    const params = {};

    if (uf) params.uf = uf;
    if (codigo_ibge) params.codigo_ibge = codigo_ibge;
    params.limit = limit;
    params.offset = offset;

    return params;
}
