import { formatarMoeda } from "../utils/formatters";
import Conta from "../types/Conta";
const elementoSaldo = document.querySelector(".saldo-valor .valor");
function renderizarSaldo() {
    if (elementoSaldo !== null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizar: function () {
        renderizarSaldo();
    },
};
export default SaldoComponent;
