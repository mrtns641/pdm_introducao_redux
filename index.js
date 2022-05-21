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