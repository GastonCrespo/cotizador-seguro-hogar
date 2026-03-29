import '../css/style.css'

const costoBase = 1.17
let factorMultiplicador = 1.03

let metrosCuadrados = Number(
    prompt("Ingrese los metros cuadrados de la propiedad entre 1 y 100")
)

alert('calculanding.... calculanding....')

let precioPoliza = costoBase * metrosCuadrados * factorMultiplicador

alert(`El monto total de la poliza es de $${precioPoliza}`)

