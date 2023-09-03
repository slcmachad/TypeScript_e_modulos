export class Armazenador{
    private constructor() {}

    salvar(chave: string, valor: any):void{
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }
}