const numeros = [10, 20, 42, 8]

console.log(numeros[0])

const texts = ["Ola", "Mundo", "beleza"]

console.log(texts[2])

const misturado = [10, 34, "Ola", 5, "Beleza"]

console.log(misturado[3], misturado[2])


const usuario = [{ name: "Kalos", gen: "6"}, 10, "Ola"]

console.log(usuario[0].name)

const matriz = [[23, 56], [45,23, [45, 56, [43, 91, 100], 100]], [10, 45, [5,78]]]

console.log(matriz[1][2][2][2])

for( let i = 0; i < 4 ; i ++){

    console.log("Valor de i: ", i)
    console.log(numeros[i])


    
}

numeros.map((numero, index) => {

    console.log("Valor de i: ", index)
    console.log(numero)
})

console.log(numeros.length)

const errors = {

    message: "Dados inválidos",
    fields: {
        name: [
            "Nome é requerido",
            "Nome deve ter mais de 3 caracteres",
            "Nome não pode começar com um número",
        ],
        password: [
            "A senha deve ter um caractere minúsculo",
            "A senha deve ter um caractere maisculo",
            "A senha deve ter um caractere especial",
            "A senha deve ter no minimo, 6 caracteres",
        ]
    }
}

numeros.push(87)

console.log(numeros)

