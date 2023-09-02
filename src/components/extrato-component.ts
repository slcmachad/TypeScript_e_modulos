import { GrupoTransacao } from './../types/GrupoTransacao.js';
import Conta from "../types/Conta.js";
import { formatarData, formatarMoeda } from '../utils/formatters.js';
import { FormatoData } from '../types/FormatoData';

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

function reenderizarExtrato(): void {
    const gruposTransacoes: GrupoTransacao[] = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoesExtrato: string = "";

    for (let grupoTransacao of gruposTransacoes){
        let htmlTransacaoItem: string = "";
        for(let transacao of grupoTransacao.transacoes){
            htmlTransacaoItem += `
                <div class="transacao-item">
                    <div class="transacao-info">
                        <span class="tipo">${transacao.tipoTransacao}</span>
                        <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                    </div>
                    <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
                </div>
            `
        }

        
    }
}