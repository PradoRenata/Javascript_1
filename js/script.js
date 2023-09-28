let savedUser = "UserTest";
let savedPass = "Secret123";

alert("Bienvenido a un simulador para gestionar tus lecturas pendientes.")

function login(){
    let access =false;

    //No se si habrá una mejor forma de hacer esto, pero cabeceándome harto salió. xD
    let userName = prompt ("Ingresa tu nombre de usuario.");
    while (userName != savedUser){
        alert("No es un usuario registrado.");
        userName = prompt ("Ingresa tu nombre de usuario.");
    }

    let attempts = 3;
    for (let i = attempts ; i > 0 ; i--) {
        let userPass = prompt ("Ingresa tu contraseña para ingresar. Tienes "+i+" intentos.")
        if (userPass===savedPass){
            alert("ingreso exitoso.");
            access = true;
            break;
        }else{
            alert("Contraseña incorrecta, te quedan "+(i-1)+" intentos.")
        }
    }
    return access;
}

if (login()) {
    //Si pudimos acceder
    let bookList = "\n- Cien años de soledad. \n- Tengo miedo torero. \n- Solanin. "
    let options = prompt ("Elige una opción: \n1 - Ver listado de libros. \n2 - Agregar un Libro. \n3 - Cerrar sesión.")

    while (options != "3"){
        switch (options){
            case '1':
                alert("Tu lista de libros es: "+ bookList)
                break;
            
            case '2':
                let addBook = prompt ("Ingresa el titulo del libro que quieres agregar a tu lista.")
                //bookList += addBook (Esto fue un intento fallido pero lo dejo de todas formas jajaja)
                //Acá no pude hacer que se agreguen como una lista, pero luego de la clase de arrays pienso que se puede utilizar esa forma para gestionar los titulos de la lista.
                alert ("Ingresaste un titulo exitosamente.\nTu nueva lista es: "+bookList+"\n- "+addBook)
                break;
                //Por ahora lo dejo para que se sobre escriba en cada ciclo. Pero a la siguiente puedo trabajar en gestionar los titulos, y así poder quitarlos de la lista también.

            default:
                alert('Elegiste una opción inválida');
                break;
        }

        options = prompt ("Elige una opción: \n1 - Ver listado de libros. \n2 - Agregar un Libro. \n3 - Cerrar sesión.");
    }

}else{
    //Si No pudo acceder
    alert("Cuenta bloqueada temporalmente, intenta de nuevo más tarde.")
}

alert("Vuelve pronto!")


