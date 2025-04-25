/**
 * Converte uma string de data (ou objeto Date) para formato dd/mm/yyyy.
 * @param {string|Date} data
 * @returns {string}
 */
export function formatarData(data) {
    if (!data) return 'Não informado';

    try {
        const date = new Date(data.replace(/\//g, '-')); // 👈 substitui / por -
        if (isNaN(date)) return 'Data inválida';

        const dia = String(date.getDate()).padStart(2, '0');
        const mes = String(date.getMonth() + 1).padStart(2, '0');
        const ano = date.getFullYear();

        return `${dia}/${mes}/${ano}`;
    } catch {
        return 'Data inválida';
    }
}


/**
 * Extrai e formata a hora de uma data: hh:mm
 * @param {string|Date} data
 * @returns {string}
 */
export function formatarHora(data) {
    if (!data) return 'Não informado';

    const date = new Date(data);
    if (isNaN(date)) return 'Hora inválida';

    const horas = String(date.getHours()).padStart(2, '0');
    const minutos = String(date.getMinutes()).padStart(2, '0');

    return `${horas}:${minutos}`;
}

/**
 * Formata data e hora no estilo dd/mm/yyyy às hh:mm
 * @param {string|Date} data
 * @returns {string}
 */
export function formatarDataHora(data) {
    return `${formatarData(data)} às ${formatarHora(data)}`;
}

/**
 * Retorna a data no formato ano/mês
 * @param {string|Date} data
 * @returns {string}
 */
export function formatarAnoMes(data) {
    if (!data) return 'Não informado';
    const date = new Date(data);
    if (isNaN(date)) return 'Data inválida';

    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const ano = date.getFullYear();
    return `${ano}/${mes}`;
}

/**
 * Capitaliza a primeira letra de cada palavra
 * @param {string} texto
 * @returns {string}
 */
export function capitalizarTexto(texto) {
    if (!texto) return '';
    return texto
        .toLowerCase()
        .split(' ')
        .map(p => p.charAt(0).toUpperCase() + p.slice(1))
        .join(' ');
}

/**
 * Formata número para 2 casas decimais (ou retorna 'N/A')
 * @param {number|string} valor
 * @returns {string}
 */
export function formatarValor(valor) {
    if (valor === null || valor === undefined || isNaN(valor)) return 'N/A';
    return Number(valor).toFixed(2).replace('.', ',');
}
