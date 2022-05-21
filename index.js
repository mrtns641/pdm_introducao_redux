//Essa função é uma função criadora de ação
//ou seja, ela devolve um objeto JSON
//uma ação é um objeto JSON

const criarContrato = (nome, taxa) => {
    //esse JSON é uma ação
    //type é obrigatório
    return {
        type: "CRIAR_CONTRATO",
        payload: {
            nome, taxa
        }
    }
}

const cancelarContrato = (nome) => {
    return {
        type: "CANCELAR_CONTRATO",
        payload: {
            nome
        }
    }
}

const solicitarCashback = (nome, valor) => {
    return {
        type: "SOLICITAR_CASHBACK",
        payload: {
            nome, valor
        }
    }
}

//essa é uma função reducer
const historicoDePedidosDeCashbackReducer = (historicoDePedidosDeCashbackAtual = [], acao) => {
    if (acao.type === "SOLICITAR_CASHBACK") {
        return [
            ...historicoDePedidosDeCashbackAtual,
            acao.payload
        ]
    }
    return historicoDePedidosDeCashbackAtual
}

//essa é outra função reducer
const caixaReducer = (dinheiroEmCaixa = 0, acao) => {
    //se a ação for SOLICITAR_CASHBACK, reduzir o valor do caixa
    if (acao.type === "SOLICITAR_CASHBACK") {
       dinheiroEmCaixa -= acao.payload.valor
    }
    //senão se a ação for CRIAR_CONTRATO, aumentar o valor do caixa
    else if (acao.type == "CRIAR_CONTRATO") {
        dinheiroEmCaixa += acao.payload.taxa
    }
    //senão, somente devolver a fatia de estado envolvida
    return dinheiroEmCaixa
}