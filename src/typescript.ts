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
    tipoTransacao: string;
    data: Date;
    valor: number;
}

const novaTransacao: Transacao = {
    tipoTransacao: "" ,
    data: new Date(),
    valor: 0
}