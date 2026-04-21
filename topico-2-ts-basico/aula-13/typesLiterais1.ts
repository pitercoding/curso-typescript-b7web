function mostrarTexto (
    texto: string,
    alinhamento: 'left' | 'right' | 'center'
) {
    return `<div style= "text-align: ${alinhamento}">${texto}</div>`;
}

mostrarTexto('Racha Cuca', 'left');
mostrarTexto('Racha Cuca', 'right');
mostrarTexto('Racha Cuca', 'center');

