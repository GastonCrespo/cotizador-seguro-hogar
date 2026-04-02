import '../css/style.css'
import { datosPropiedad, datosUbicacion } from './variables.js'

// ---------------- DOM ----------------

const selectPropiedad = document.querySelector("#propiedad");
const selectUbicacion = document.querySelector("#ubicacion");
const inputMetros = document.querySelector("#metros2");
const btnCotizar = document.querySelector("#btnCotizar");
const valorPoliza = document.querySelector("#valorPoliza");

const costoBase = 1.16;


// ---------------- FUNCIONES ----------------

// 1️⃣ cargar combo propiedad
function cargarComboPropiedad() {

  let opciones = '<option disabled selected>Seleccione...</option>';

  for (let propiedad of datosPropiedad) {
    opciones += `
      <option value="${propiedad.factor}">
        ${propiedad.tipo}
      </option>
    `;
  }

  selectPropiedad.innerHTML = opciones;
}


// 2️⃣ cargar combo ubicación
function cargarComboUbicacion() {

  let opciones = '<option disabled selected>Seleccione...</option>';

  for (let ubicacion of datosUbicacion) {
    opciones += `
      <option value="${ubicacion.factor}">
        ${ubicacion.tipo}
      </option>
    `;
  }

  selectUbicacion.innerHTML = opciones;
}


// 3️⃣ calcular póliza
function calcularPoliza() {

  const factorPropiedad = Number(selectPropiedad.value);
  const factorUbicacion = Number(selectUbicacion.value);
  const metrosCuadrados = Number(inputMetros.value);

  // validación
  if (!factorPropiedad || !factorUbicacion || !metrosCuadrados) {
    console.warn("Datos inválidos");
    return;
  }

  const precio =
    factorPropiedad *
    factorUbicacion *
    metrosCuadrados *
    costoBase;

  console.log("Precio calculado:", precio);

  // mostrar en HTML
  valorPoliza.textContent = precio.toFixed(2);
}


// ---------------- EVENTOS ----------------

btnCotizar.addEventListener("click", calcularPoliza);


// ---------------- INICIALIZACIÓN ----------------

cargarComboPropiedad();
cargarComboUbicacion();
/* import '../css/style.css'
import { datosPropiedad, datosUbicacion } from './variables.js'

let fmPropiedad
let fmUbicacion
const costoBase = 1.16
datosPropiedad = document.querySelector("#propiedad")
datosUbicacion = document.querySelector("#ubicacion")
let metrosCuadrados

metrosCuadrados=Number(prompt("ingrese metros cuadradaos"))
function cargartipoPropiedad() {

    let opciones = ""

    for (let propiedad of datosPropiedad) {
        opciones += `<option>${propiedad.tipo}</option>`
    }

    datosPropiedad.innerHTML = opciones
}
function cargartipoUbicacion() {

    let opciones = ""

    for (let propiedad of datosUbicacion) {
        opciones += `<option>${propiedad.tipo}</option>`
    }

    datosUbicacion.innerHTML = opciones
}
/* do {

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

} while (!fmUbicacion); */
    
    //-----------------CALCULAMOS---------------
/* if (fmPropiedad && fmUbicacion && Number.isInteger(metrosCuadrados))
{
alert('calculanding.... calculanding....')

let precioPoliza = fmUbicacion.factor * metrosCuadrados * fmPropiedad.factor * costoBase

console.log(`El monto total de la poliza es de $${precioPoliza.toFixed(4)}`)

}
else{
    console.warn("Datos invalidos para realizar el calculo");
}
 */