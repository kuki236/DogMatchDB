document.addEventListener('DOMContentLoaded', function () {

    document.querySelector("#buscar").addEventListener('click', function () {
        borrarAnterior();
        obtenerFiltros();
        mandarPaginaAdoptar();
    });
});
function obtenerCantidad(numero){
    document.querySelector("#cantidad").textContent=numero;
}
function borrarAnterior() {
    document.querySelector("#espacioPerros").innerHTML = "";
}
function obtenerFiltros() {
    const sexoS = document.querySelector("#sexo").value;
    const tamanoS = document.querySelector("#tamano").value;
    const edadS = document.querySelector("#edad").value;

    const coincidencias = perros.filter(perro => 
        (sexoS === 'Sexo' || perro.sexo === sexoS) &&
        (tamanoS === 'Tamaño' || perro.tamano === tamanoS) &&
        (edadS === 'Edad' || perro.rangoEdad == edadS)
    );
   obtenerCantidad(coincidencias.length);
    mostrarCoincidencia(coincidencias);
        
}
function mandarPaginaAdoptar(){
    const perroElegido = document.querySelectorAll('.cartaPerro');
    perroElegido.forEach(perroElegidoClic => {
        perroElegidoClic.addEventListener('click', function() {
            abrirFormulario();
        });
    });
}
function abrirFormulario() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSd8TwbGpfr58wXSMebmt9V-KAn3w5tNZrS2RUTkpu-krPeEzA/viewform?pli=1'; 
}
const today = new Date();

const year = today.getFullYear();
function obtenerEdad(anoNacimiento) {
    const edad = year - anoNacimiento; 
    return `${edad} años`; 
}
function obtenerRango(anoNacimiento){
    const edadRango = year - anoNacimiento; 

    if(edadRango>=1 && edadRango<=3){
        return 2;
    }else{
        return 3;
    }

}

function mostrarCoincidencia(perrosEncontrados) {
    const $espacioPerros = document.querySelector("#espacioPerros");

    if (perrosEncontrados.length > 0) {
        perrosEncontrados.forEach(perro => {
           const card = crearCard(perro);
           $espacioPerros.appendChild(card);
        });
    } else {
        $espacioPerros.innerHTML = '<p>No se encontraron coincidencias</p>';
    }
}

function crearCard(perroObj){
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('cartaPerro');
    card.style.width = '18rem';
    const img = document.createElement('img');
    img.src = perroObj.src;
    img.className = 'card-img-top';
    img.alt = perroObj.src;
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.classList.add('nombrePerro');
    cardTitle.textContent = perroObj.nombre;
    const cardText1 = document.createElement('p');
    cardText1.classList.add('card-text');
    cardText1.classList.add('sexoPerro');
    cardText1.textContent = perroObj.sexo;
    const cardText2 = document.createElement('p');
    cardText2.classList.add('card-text');
    cardText1.classList.add('tamanoPerro');
    cardText2.textContent = perroObj.tamano;
    const cardText3 = document.createElement('p');
    cardText3.classList.add('card-text');
    cardText3.classList.add('edadPerro');
    cardText3.textContent = perroObj.edad;
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText1);
    cardBody.appendChild(cardText2);
    cardBody.appendChild(cardText3);
    card.appendChild(img);
    card.appendChild(cardBody);
    return card;
}

const perro2 = {
    nombre: "Thomas",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2019),
    src: "adop/2.png",
    rangoEdad: obtenerRango(2019)
};
const perro26 = {
    nombre: "Clint",
    sexo: "Macho",
    tamano: "Pequeño",
    edad: obtenerEdad(2020),
    src: "adop/26.png",
    rangoEdad: obtenerRango(2020)
};
const perro28 = {
    nombre: "Leo",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2019),
    src: "adop/28.png",
    rangoEdad: obtenerRango(2019)
};
const perro13 = {
    nombre: "Bono",
    sexo: "Macho",
    tamano: "Grande",
    edad: obtenerEdad(2020),
    src: "adop/13.png",
    rangoEdad: obtenerRango(2020)
};
const perro15 = {
    nombre: "Max",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2018),
    src: "adop/15.png",
    rangoEdad: obtenerRango(2018)
};
const perro19 = {
    nombre: "Alfie",
    sexo: "Macho",
    tamano: "Pequeño",
    edad: obtenerEdad(2020),
    src: "adop/19.png",
    rangoEdad: obtenerRango(2020)
};
const perro20 = {
    nombre: "Gringo",
    sexo: "Macho",
    tamano: "Grande",
    edad: obtenerEdad(2020),
    src: "adop/20.png",
    rangoEdad: obtenerRango(2020)
};
const perro30 = {
    nombre: "Tigre",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2021),
    src: "adop/30.png",
    rangoEdad: obtenerRango(2021)
};
const perro36 = {
    nombre: "Romi",
    sexo: "Hembra",
    tamano: "Mediano",
    edad: obtenerEdad(2020),
    src: "adop/36.png",
    rangoEdad: obtenerRango(2020)
};
const perro65 = {
    nombre: "Lauro",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2021),
    src: "adop/65.png",
    rangoEdad: obtenerRango(2021)
};
const perro67 = {
    nombre: "Toño",
    sexo: "Macho",
    tamano: "Mediano",
    edad: "8 meses",
    src: "adop/67.png",
    rangoEdad: 1
};
const perro34 = {
    nombre: "Carmelita",
    sexo: "Hembra",
    tamano: "Mediano",
    edad: obtenerEdad(2020),
    src: "adop/34.png",
    rangoEdad: obtenerRango(2020)
};
const perro25 = {
    nombre: "Tomasita",
    sexo: "Hembra",
    tamano: "Mediano",
    edad: obtenerEdad(2021),
    src: "adop/25.png",
    rangoEdad: obtenerRango(2021)
};
const perro22 = {
    nombre: "Brunito",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2020),
    src: "adop/22.png",
    rangoEdad: obtenerRango(2020)
};
const perro23 = {
    nombre: "Bambi",
    sexo: "Hembra",
    tamano: "Mediano",
    edad: obtenerEdad(2021),
    src: "adop/23.png",
    rangoEdad: obtenerRango(2021)
};
const perro27 = {
    nombre: "Charlie",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2019),
    src: "adop/27.png",
    rangoEdad: obtenerRango(2019)
};
const perro35 = {
    nombre: "Manu",
    sexo: "Macho",
    tamano: "Pequeño",
    edad: obtenerEdad(2021),
    src: "adop/35.png",
    rangoEdad: obtenerRango(2021)
};
const perro11 = {
    nombre: "Soco",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2021),
    src: "adop/11.png",
    rangoEdad: obtenerRango(2021)
};
const perro59 = {
    nombre: "Faber",
    sexo: "Macho",
    tamano: "Grande",
    edad: obtenerEdad(2021),
    src: "adop/59.png",
    rangoEdad: obtenerRango(2021)
};
const perro60 = {
    nombre: "Fabi",
    sexo: "Hembra",
    tamano: "Grande",
    edad: obtenerEdad(2021),
    src: "adop/60.png",
    rangoEdad: obtenerRango(2021)
};
const perro73 = {
    nombre: "Lima",
    sexo: "Hembra",
    tamano: "Mediano",
    edad: obtenerEdad(2021),
    src: "adop/73.png",
    rangoEdad: obtenerRango(2021)
};
const perro51 = {
    nombre: "Tommy",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2023),
    src: "adop/51.png",
    rangoEdad: obtenerRango(2023)
};
const perro53 = {
    nombre: "Jerry",
    sexo: "Macho",
    tamano: "Pequeño",
    edad: obtenerEdad(2020),
    src: "adop/53.png",
    rangoEdad: obtenerRango(2020)
};
const perro12 = {
    nombre: "Bartolito",
    sexo: "Macho",
    tamano: "Grande",
    edad: obtenerEdad(2020),
    src: "adop/12.png",
    rangoEdad: obtenerRango(2020)
};
const perro75 = {
    nombre: "Tina",
    sexo: "Hembra",
    tamano: "Pequeño",
    edad: obtenerEdad(2021),
    src: "adop/75.png",
    rangoEdad: obtenerRango(2021)
};
const perro69 = {
    nombre: "Luna",
    sexo: "Hembra",
    tamano: "Mediana",
    edad: "7 meses",
    src: "adop/69.png",
    rangoEdad: 1
};
const perro10 = {
    nombre: "Roger",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2017),
    src: "adop/10.png",
    rangoEdad: obtenerRango(2017)
};
const perro5 = {
    nombre: "Will",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2021),
    src: "adop/5.png",
    rangoEdad: obtenerRango(2021)
};
const perro14 = {
    nombre: "Pantro",
    sexo: "Macho",
    tamano: "Grande",
    edad: obtenerEdad(2019),
    src: "adop/14.png",
    rangoEdad: obtenerRango(2019)
};
const perro74 = {
    nombre: "Sur",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2018),
    src: "adop/74.png",
    rangoEdad: obtenerRango(2018)
};
const perro29 = {
    nombre: "Dotty",
    sexo: "Hembra",
    tamano: "Mediano",
    edad: obtenerEdad(2020),
    src: "adop/29.png",
    rangoEdad: obtenerRango(2020)
};
const perro31 = {
    nombre: "Lalo",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2021),
    src: "adop/31.png",
    rangoEdad: obtenerRango(2021)
};
const perro37 = {
    nombre: "Joey",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2023),
    src: "adop/37.png",
    rangoEdad: obtenerRango(2023)
};
const perro47 = {
    nombre: "Codi",
    sexo: "Macho",
    tamano: "Mediano",
    edad: obtenerEdad(2023),
    src: "adop/47.png",
    rangoEdad: obtenerRango(2023)
};
const perro68 = {
    nombre: "Aura",
    sexo: "Hembra",
    tamano: "Mediano",
    edad: "8 meses",
    src: "adop/68.png",
    rangoEdad: 1
};
const perros = [perro2, perro10,perro14,perro5,perro74,perro29,perro31,perro37,perro47,perro68,perro26, perro28, perro13, perro15, perro19, perro20, perro30, perro36, perro65, perro67, perro34, perro25, perro22, perro23, perro27, perro35, perro11, perro59, perro60, perro73, perro51, perro53, perro12, perro75, perro69];
