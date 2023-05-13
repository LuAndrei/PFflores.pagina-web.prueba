const logueo = document.getElementById ("botonLogin");

const usuarioAutorizado = "IA@gmail.com";
const passwordAutorizado = "369";

logueo.addEventListener ("click", ()=>{
    Swal.fire ({
        title: "Iniciar",
        html: ` <input type="text" id="usuario" class="swal2-input" placeholder="usuario">
                <input type="text" id="password" class="swal2-input" placeholder="password">`,
        background: "black", 
        backdrop: "black", 
        
        confirmButtonText: "Enviar",
        showCancelButton: true,
        cancelButtonText: "Salir",
    }) .then((result) =>{
        if(result.isConfirmed){
            const usuario= document.getElementById("usuario").value;
            const password = document.getElementById("password").value;
            
            if(usuario === usuarioAutorizado && password === passwordAutorizado){
                 window.location.href = "index.html";
             }
        }
    })
})



 