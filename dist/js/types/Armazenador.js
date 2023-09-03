export class Armazenador {
    constructor() { }
    salvar(chave, valor) {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }
}
