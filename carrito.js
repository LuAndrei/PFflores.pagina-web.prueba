
let carrito = JSON.parse(localStorage.getItem("carrito"))|| []



const totalCarritoRender = ()=>{
    
    const carritoTotal = document.getElementById("carritoTotal")
    let total = carrito.reduce((acumulador, {price, quantity})=>{
        return acumulador + (price*quantity)
    }, 0)
    carritoTotal.innerHTML=`Precio total:  ${total}`
}

const agregarCarrito = (objetoCarrito)=>{
   
    carrito.push(objetoCarrito)
    totalCarritoRender()
}



const renderizarCarrito = ()=>{
   
    const listaCarrito = document.getElementById("listaCarrito")
    
    listaCarrito.innerHTML=""
    carrito.forEach(({name, price, quantity, id}) =>{
        let elementoLista = document.createElement("li")
        elementoLista.innerHTML=`Producto:${name} -- P/u: ${price} -- Cant.:${quantity} <button id="eliminarCarrito${id}">X</button>`
        listaCarrito.appendChild(elementoLista)
        const botonBorrar = document.getElementById(`eliminarCarrito${id}`)
        botonBorrar.addEventListener("click",()=>{
            
            carrito = carrito.filter((elemento)=>{
                if(elemento.id !== id){
                    return elemento
                }
            })
            let carritoString = JSON.stringify(carrito)
            localStorage.setItem("carrito", carritoString)
            renderizarCarrito()
        })
        let carritoString = JSON.stringify(carrito)
        localStorage.setItem("carrito", carritoString)
    })
}

const borrarCarrito = ()=>{
    carrito = []
    let carritoString = JSON.stringify(carrito)
    localStorage.setItem("carrito", carritoString)
    renderizarCarrito()
}







const finalizarCompra = ()=>{
    
    borrarCarrito()
    let mensaje = document.getElementById("carritoTotal")
    mensaje.innerHTML = "Muchas gracias por su compra, los esperamos pronto"

}


const compraFinal = document.getElementById("botonCompraFinal")
compraFinal.addEventListener("click",(()=>{finalizarCompra()}))


// Testing
renderizarProductos()
renderizarCarrito()