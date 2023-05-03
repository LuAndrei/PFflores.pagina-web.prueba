const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre,modelo,precio){
	img = "<img class='dilatador-img' src='dilatador.jpg'>";
	
	nombre = `<h2>${nombre}</h2>`;
	modelo = `<h3>${modelo}</h3>`;
	precio = `<p>Precio: <b>$${precio}</b></p>`;
	return [img,nombre,modelo,precio];
}


let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 6; i++) {
	let modeloRandom = Math.round(Math.random()*10000);
	let precioRandom = Math.round(Math.random()*15+30);
	let llave = crearLlave(`dilatador ${i}`,`modelo ${modeloRandom}`,precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{
    	document.querySelector(".key-data").value = modeloRandom
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML = llave;
	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);