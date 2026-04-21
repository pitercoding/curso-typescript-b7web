function removerElemento(el: HTMLElement | null): void {
    if(!el) return;

    el.remove();
}

removerElemento(document.getElementById('teste'));