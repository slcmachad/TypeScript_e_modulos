import { GrupoTransacao } from "./GrupoTransacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

let saldo: number = JSON.parse  (localStorage.getItem("saldo")) || 0;

const transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes"), (key: string, value: string) => {
    if(key === "data"){
        return new Date(value);
    }

    return value;
}) || []; 

function debitar(valor: number): void{
    if(valor <= 0){
        throw new Error("O valor a ser debitado deve ser maior que zero!");
    }
    if(valor > saldo){
        throw new Error("Saldo insuficiente!");
    }
    saldo -= valor;

    localStorage.setItem("saldo", saldo.toString());
}
function depositar(valor: number): void{
    if(valor <= 0){
        throw new Error("O valor a ser depositado deve ser maior que zero!");
    }
    saldo += valor;
    localStorage.setItem("saldo", saldo.toString());
}


const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso(): Date {
        return new Date();
    },

    getGruposTransacoe(): GrupoTransacao[] {
        const gruposTransacoes: GrupoTransacao[] = [];
        const listaTransacoes: Transacao[] = structuredClone(transacoes);
        const transacoeOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
    }

    registrarTransacao(novaTransacao: Transacao): void {

        if(novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO){
            depositar(novaTransacao.valor)
        }else if(novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO){
            debitar(novaTransacao.valor)
        }else{
            throw new Error('Tipo de Transação é inválido!');
        } 

        transacoes.push(novaTransacao);
        localStorage.setItem('transacoes', JSON.stringify(transacoes));
    }
}

export default Conta;

