import { GrupoTransacao } from "./GrupoTransacao.js";
import { Transacao } from "./Transacao.js";

export class Conta {

    nome: string;
    saldo: number = JSON.parse(localStorage.getItem("saldo")) || 0;
    transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes"), (key: string, value: any) => {
        if(key === "data"){
            return new Date(value);
        }
        return value;
    }) || [];

    constructor(nome: string) {
        this.nome = nome;
    }

    getGruposTransacoes(): GrupoTransacao[] {
        const gruposTransacoes: GrupoTransacao[] = [];
        const listaTransacoes: Transacao[] = structuredClone(this.transacoes);
        const transacoesOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao: string = "";

        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao: string = transacao.data.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            gruposTransacoes.at(-1).transacoes.push(transacao);
        }

        return gruposTransacoes;
    }

}

const conta = new Conta("Joana da silva Oliveira");