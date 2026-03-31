import '../css/style.css'
import { datosPropiedad, datosUbicacion } from './variables.js'

let fmPropiedad
let fmUbicacion
const costoBase = 1.16
let tipoPropiedad
let tipoUbicacion
let metrosCuadrados

metrosCuadrados=Number(prompt("ingrese metros cuadradaos"))

do {

    tipoPropiedad = prompt(`Ingrese tipo de vivienda de su interes
Casa
P.H.
Dto. edificio
Barrio privado
Oficina
Local comercial
Deposito logistica
`).trim()
let encontrado = false 
    for(let propiedad of datosPropiedad) {
        
        if (propiedad.tipo.toUpperCase()==tipoPropiedad.toUpperCase()) {
            fmPropiedad=propiedad // NO PONGO TIPO PROPEDAD PORQUE NECESITO GUARDAR TODO EL OBJETO
            encontrado = true 
            break
        }  
    }
     if (!encontrado) {
            console.warn('Tipo de propiedad inválido, reintente')
            
        }

} while (!fmPropiedad)

    
do {
    tipoUbicacion=prompt(`Ingrese ubicacion de su interes:
        CABA
        Tandil
        Costa Atlantica
        Patagonia Argentina

        `).trim().toUpperCase()
        let encontrado = false
        for(let ubicacion of datosUbicacion){
            
            if (ubicacion.tipo.toUpperCase()==tipoUbicacion) {
                fmUbicacion=ubicacion
                encontrado = true 
                break
            }
        }
         if(!encontrado)
           {
            console.warn("tipo de ubicacion no encontrada");
           }

} while (!fmUbicacion);
    
    //-----------------CALCULAMOS---------------
if (fmPropiedad && fmUbicacion && Number.isInteger(metrosCuadrados))
{
alert('calculanding.... calculanding....')

let precioPoliza = fmUbicacion.factor * metrosCuadrados * fmPropiedad.factor * costoBase

console.log(`El monto total de la poliza es de $${precioPoliza.toFixed(4)}`)

}
else{
    console.warn("Datos invalidos para realizar el calculo");
}

