/*----------- Crear elementos HTML ------------*/
const main = document.querySelector('main');
const firstSection = document.createElement('section');
const container = document.createElement('div');
const title = document.createElement('h2');
const label = document.createElement('label');
const precio = document.createElement('input');
const label2 = document.createElement('label');
const descuento = document.createElement('input');
const label3 = document.createElement('label');
const result = document.createElement('h3');
const button = document.createElement('button');



/*--- Agregar elemetos hijo a elementos padre HTML ---------*/
main.appendChild(firstSection);
firstSection.appendChild(container);
container.append(title, label, precio, label2, descuento, label3, result, button);

/*----------- Crear clase para elementos HTML ------------*/
firstSection.classList.add('first-section');
container.classList.add('first-section--container');
/*----------- Agregar texto a elementos HTML ------------*/
title.innerText = 'Calcula Porcentajes';
label.innerText = 'Ingresa el precio del producto:';
precio.type = 'number';
label2.innerText = 'Ingresa el descuento del producto:'
descuento.type = 'number';
descuento.placeholder = '%';
label3.innerText = 'Precio con descuento:';
button.innerText = 'Calcular';



/*----------------- Calcular Porcentaje ----------------*/

button.addEventListener('click', calcularPorcentaje);

function calcularPorcentaje() {
  const costo = Number(precio.value);
  const porcentaje = Number(descuento.value);  
  
  if (costo > 0 && porcentaje > 0 && porcentaje <= 100) {
    const r = (costo * (100 - porcentaje)) / 100;
   
    result.innerHTML = `$${r}`;
  } else {
    alert('Complete correctamente el formulario');
  }
}

document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        const costo = Number(precio.value);
        const porcentaje = Number(descuento.value);  
        
        if (costo > 0 && porcentaje > 0 && porcentaje <= 100) {
          const r = (costo * (100 - porcentaje)) / 100;
         
          result.innerHTML = `$${r}`;
        }
    }
});