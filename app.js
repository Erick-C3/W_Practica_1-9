async function obtenerPersonajes() {
    const respuesta = await fetch("https://hp-api.onrender.com/api/characters");
    const personajes = await respuesta.json();
    const divContPerfiles = document.querySelector("#contenedor-perfiles");

    console.log(personajes);//para verificar que funciono
    console.log(personajes[0].image);
    personajes.forEach((personaje, numeroPersonaje) => {
        if (personaje.image) {
            divContPerfiles.innerHTML += `
                <div class="perfil">
                    <span>${personaje.name}</span>
                    <img id="imagen-${numeroPersonaje}" src="${personaje.image}" alt="imagen de harry" title=${personaje.name.split(" ")[0]}>
                </div>
            `;
        }
    });

}

obtenerPersonajes();