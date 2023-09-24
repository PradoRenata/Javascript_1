let savedUser ="RonaRamona"

for (let i = 1; i <=3 ; i++) {
    let enterUser = prompt ("Ingresa tu nombre de usuario");

    if (savedUser === enterUser){
        alert("Bienvenida de vuelta "+savedUser)
        break;
    }else{
        alert("El usuario es incorrecto, intento "+i+" de 3");
    }    
}
alert("Fin")
