// Tipos Primitivos
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = 22;
qualquer = "";

// Arrays
const lista = [];
lista.push("miu", "dog", 22, true, []);


// Tipos personalizados(type alias)

type Transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor: number;
}

//Enum

enum TipoTransacao{
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.DEPOSITO ,
    data: new Date(),
    valor: 0
}