document.addEventListener('DOMContentLoaded', function () {

    document.querySelector("#buscar").addEventListener('click', function () {
        borrarAnterior();
        obtenerFiltros();
    });
});
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

    mostrarCoincidencia(coincidencias);
        
}


function mostrarCoincidencia(perrosEncontrados) {
    const $espacioPerros = document.querySelector("#espacioPerros");
    const cantidad = document.querySelector("#cantidad");
    
    cantidad.textContent = perros.length;

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
    edad: "5 años",
    src: "adop/2.png",
    rangoEdad: 3
};
const perro26 = {
    nombre: "Clint",
    sexo: "Macho",
    tamano: "Pequeño",
    edad: "4 años",
    src: "adop/26.png",
    rangoEdad: 3
};
const perro28 = {
    nombre: "Leo",
    sexo: "Macho",
    tamano: "Mediano",
    edad: "5 años",
    src: "adop/28.png",
    rangoEdad: 3
};
const perro13 = {
    nombre: "Bono",
    sexo: "Macho",
    tamano: "Grande",
    edad: "4.5 años",
    src: "adop/13.png",
    rangoEdad: 3
};
const perro15 = {
    nombre: "Max",
    sexo: "Macho",
    tamano: "Mediano",
    edad: "6 años",
    src: "adop/15.png",
    rangoEdad: 3
};
const perro19 = {
    nombre: "Alfie",
    sexo: "Macho",
    tamano: "Pequeño",
    edad: "4 años",
    src: "adop/19.png",
    rangoEdad: 3
};
const perro20 = {
    nombre: "Gringo",
    sexo: "Macho",
    tamano: "Grande",
    edad: "4.5 años",
    src: "adop/20.png",
    rangoEdad: 3
};
const perro30 = {
    nombre: "Tigre",
    sexo: "Macho",
    tamano: "Mediano",
    edad: "3 años",
    src: "adop/30.png",
    rangoEdad: 2
};
const perro36 = {
    nombre: "Romi",
    sexo: "Hembra",
    tamano: "Mediana",
    edad: "4 años",
    src: "adop/36.png",
    rangoEdad: 3
};
const perro65 = {
    nombre: "Lauro",
    sexo: "Macho",
    tamano: "Mediano",
    edad: "3 años",
    src: "adop/65.png",
    rangoEdad: 2
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
    tamano: "Mediana",
    edad: "4 años",
    src: "adop/34.png",
    rangoEdad: 3
};
const perro25 = {
    nombre: "Tomasita",
    sexo: "Hembra",
    tamano: "Mediana",
    edad: "3 años",
    src: "adop/25.png",
    rangoEdad: 2
};
const perro22 = {
    nombre: "Brunito",
    sexo: "Macho",
    tamano: "Mediano",
    edad: "4 años",
    src: "adop/22.png",
    rangoEdad: 3
};
const perro23 = {
    nombre: "Bambi",
    sexo: "Hembra",
    tamano: "Mediana",
    edad: "3 años",
    src: "adop/23.png",
    rangoEdad: 2
};
const perro27 = {
    nombre: "Charlie",
    sexo: "Macho",
    tamano: "Mediano",
    edad: "5 años",
    src: "adop/27.png",
    rangoEdad: 3
};
const perro35 = {
    nombre: "Manu",
    sexo: "Macho",
    tamano: "Pequeño",
    edad: "3 años",
    src: "adop/35.png",
    rangoEdad: 2
};
const perro11 = {
    nombre: "Soco",
    sexo: "Macho",
    tamano: "Mediano",
    edad: "7 años",
    src: "adop/11.png",
    rangoEdad: 3
};
const perro59 = {
    nombre: "Faber",
    sexo: "Macho",
    tamano: "Grande",
    edad: "3 años",
    src: "adop/59.png",
    rangoEdad: 3
};
const perro60 = {
    nombre: "Fabi",
    sexo: "Hembra",
    tamano: "Grande",
    edad: "3 años",
    src: "adop/60.png",
    rangoEdad: 2
};
const perro73 = {
    nombre: "Lima",
    sexo: "Hembra",
    tamano: "Mediana",
    edad: "3 años",
    src: "adop/73.png",
    rangoEdad: 2
};
const perro51 = {
    nombre: "Tommy",
    sexo: "Macho",
    tamano: "Mediano",
    edad: "1 año",
    src: "adop/51.png",
    rangoEdad: 2
};
const perro53 = {
    nombre: "Jerry",
    sexo: "Macho",
    tamano: "Pequeño",
    edad: "4.5 años",
    src: "adop/53.png",
    rangoEdad: 3
};
const perro12 = {
    nombre: "Bartolito",
    sexo: "Macho",
    tamano: "Grande",
    edad: "4 años",
    src: "adop/12.png",
    rangoEdad: 3
};
const perro75 = {
    nombre: "Tina",
    sexo: "Hembra",
    tamano: "Pequeña",
    edad: "3 años",
    src: "adop/75.png",
    rangoEdad: 3
};
const perro69 = {
    nombre: "Luna",
    sexo: "Hembra",
    tamano: "Mediana",
    edad: "7 meses",
    src: "adop/69.png",
    rangoEdad: 1
};
const perros = [perro2, perro26, perro28, perro13, perro15, perro19, perro20, perro30, perro36, perro65, perro67, perro34, perro25, perro22, perro23, perro27, perro35, perro11, perro59, perro60, perro73, perro51, perro53, perro12, perro75, perro69];
