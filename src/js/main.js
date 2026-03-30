import '../css/style.css'


const opcionesValidas = ['A','B','C','D','E','F','G']
const costoBase = 1.16
let factorMultiplicador = 0
let tipoVivienda
let metrosCuadrados

metrosCuadrados=Number(prompt("ingrese metros cuadradaos"))
do {

    tipoVivienda = prompt(`Ingrese tipo de vivienda 
A. Casa
B. PH
C. Dto edificio
D. Barrio privado
E. Oficina
F. Local comercial
G. Deposito logistica
`).trim().toUpperCase()

    if (!opcionesValidas.includes(tipoVivienda)) {
        console.warn('Tipo de vivienda inválido, reintente')
    }

} while (!opcionesValidas.includes(tipoVivienda))

    switch (tipoVivienda) {
        case 'A':
            factorMultiplicador = 1.009
            break;
        case 'B':
                factorMultiplicador = 1.005
            break;
        case 'C':
                factorMultiplicador = 1.002
            break;
        case 'D':
                factorMultiplicador = 1.019
            break;
        case 'E':
                factorMultiplicador = 1.039
            break;
        case 'F':
                factorMultiplicador = 1.041
            break;
        case 'G':
                factorMultiplicador = 1.092
            break;
    }

    if(factorMultiplicador> 1.000 && Number.isInteger(metrosCuadrados))
{
alert('calculanding.... calculanding....')

let precioPoliza = factorMultiplicador * metrosCuadrados * costoBase

console.log(`El monto total de la poliza es de $${precioPoliza.toFixed(4)}`)

}
else{
    console.warn("Datos invalidos para realizar el calculo");
}

