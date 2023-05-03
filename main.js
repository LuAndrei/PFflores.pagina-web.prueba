const alert = document.getElementById("boton");


alert.addEventListener ("click", ()=>{
    Swal.fire ("Bienvenide Usuario");
})

const personalizado = document.getElementById("botonDos");

personalizado.addEventListener ("click", ()=>{
    Swal.fire ({
        title: "Bienvenide Usuario",
        text:  "Ingrese sus datos para inciar sesión",
        imageUrl: "https://i.blogs.es/7451df/dragon-ball-bulma-aparecio-por-primera-vez-en-otro-anime-que-no-hizo-akira-toriyama/450_1000.jpeg",
        icon: "info",
        confirmButtonText: "Aceptar",
        background: "darksalmon",
        backdrop: "black",
        
        
        })
})

const logueo = document.getElementById ("botonLogin");

const usuarioAutorizado = "IA";
const passwordAutorizado = "369";

logueo.addEventListener ("click", ()=>{
    Swal.fire ({
        title: "Login",
        html: ` <input type="text" id="usuario" class="swal2-input" placeholder="usuario">
                <input type="text" id="password" class="swal2-input" placeholder="password">`,
        background: "black", 
        backdrop: "black", 
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRl-hwY_AIkRuK3DOtOFHL8qnJIHpQRCXqYqd6rKDh0mQxu73IR19CPh8FEigCIPAnL1Y&usqp=CAU",
      
        confirmButtonText: "Enviar",
        showCancelButton: true,
        cancelButtonText: "Salir",
    }) .then((result) =>{
        if(result.isConfirmed){
            const usuario= document.getElementById("usuario").value;
            const password = document.getElementById("password").value;
            Swal.fire({
                title: "Sus datos no coinciden",
                icon: "error",
                confirmButtonText: "Aceptar",
            })
            if(usuario === usuarioAutorizado && password === passwordAutorizado){
                 window.location.href = "index.html";
             }
        }
    })
})



 