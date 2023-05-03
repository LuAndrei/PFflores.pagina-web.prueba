const libreria = document.getElementById("tosti");

libreria.addEventListener ("click", () =>{
        Toastify({
            text: "Hoy descuentos con tarjeta",
            duration: 4000,
            gravity: "top",
            position: "right",
            style: {
                background:"blueviolet",
            }

        }) .showToast();
        
})