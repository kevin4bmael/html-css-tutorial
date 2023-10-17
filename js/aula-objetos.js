const pessoa = { //objeto
    nome: 'Kevin', // propriedade
    idade: 39,
    endereco: {
        rua:{
            logradouro: 'Rua',
            nome: 'Dos Bobos'
        },
        numero: 0,
        cep: '11111-234'
    },

    ola: (nome) => {return `olá ${nome}`}
}

pessoa.idade = 22 // alterei o valor de uma propriedade do objeto
pessoa.cidade = 'Caragua' //adicionei uma nova propriedade do objeto

delete pessoa.cidade

console.log(`Bem-vindo ${pessoa.nome}`)

console.log(`Bem-vindo ${pessoa.idade}`)

console.log(pessoa)



const produto = {
    nome: "SSD Kingston",
    caracteristicas:{
        armazenamento: '1 TB',
        tecnologias:{
            pcie: '4.0',
            velocidadeLeitura: '3500MBs',
            velocidadeEscrita: '2100Mbs',
        },
        preco: 'R$ 259,99'
    }
}


produto.marca = 'Kingston'

delete produto.caracteristicas.tecnologias.pcie

console.log(produto)
console.log(`Propriedades ${produto.caracteristicas.tecnologias.pcie}`)

const {nome, preco, caracteristicas} = produto

const {tecnologias} = produto.caracteristicas

console.log(tecnologias)


const extraProduto = {
    tamanho: 'grande',
    tipo: 'eletronico',
    material: 'vidro'
}

const produtao = { ...produto, ...extraProduto}

console.log(produtao)


const usuario = {
    nome: 'Carlinhos Alfandega',
    cpf: '123.456.789/00',
    dataNasc: '12/9/20'
}

const endereco = {
    rua: 'sete cores da aliança',
    numero: 70,
    cep: '08343-103'
}

const cartao = {
    numeroDoCartao: '00000-0000-0000-0000',
    dataValidade: '26/11',
    cvv: '319'

}

const criarCompra = {

    ...usuario,
    ...endereco,

    payment: {
        ...cartao
    },

    valor: "R$ 50,00"
}

console.log(criarCompra)