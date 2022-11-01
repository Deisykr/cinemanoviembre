let peliculas=[
    {
        nombre:"mario bros",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadeisyrubio.appspot.com/o/MARIO%20BROS1.jpg?alt=media&token=e165478c-6d5a-4d57-91b4-9a5bc219b229"
    },
    {
        nombre:"onepiece",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadeisyrubio.appspot.com/o/ONEPIECE1.jpg?alt=media&token=4b7d9f09-5fde-4a02-9f15-6fccc4394d1c"
    },
    {
        nombre:"supermascotas",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadeisyrubio.appspot.com/o/SUPERMASCOTASNUEVO.jpg?alt=media&token=3903daa0-5354-4084-b5bc-d70a94a6f96a"
    },
    {
        nombre:"unmundoextraño",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadeisyrubio.appspot.com/o/UNMUNDOEXTRANONUEVOPOSTER1.jpg?alt=media&token=3e8db09e-ad68-4c43-a6aa-87179fe81d16"
    },
    {
        nombre:"coco",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadeisyrubio.appspot.com/o/coco.jpg?alt=media&token=54178b9d-6338-41f6-9a0f-825525e9f01a"
    },
    {
        nombre:"encantada",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadeisyrubio.appspot.com/o/encantada.jpg?alt=media&token=a7ac2d04-27c4-474f-a6d4-55f80cc00c5b"
    },
    {
        nonbre:"encanta",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadeisyrubio.appspot.com/o/encantada.jpg?alt=media&token=a7ac2d04-27c4-474f-a6d4-55f80cc00c5b"
    },
    {
        nombre:"gatoconbotas",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadeisyrubio.appspot.com/o/gatoconbotasnuevo.jpg?alt=media&token=9a39a84f-fd1c-48d4-9afc-8f04ebafe1d2"
    },
    {
        nombre:"gatoconbotas",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadeisyrubio.appspot.com/o/gatoconbotasnuevo.jpg?alt=media&token=9a39a84f-fd1c-48d4-9afc-8f04ebafe1d2"
    },
    {
        nombre:"gatoconbotas",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadeisyrubio.appspot.com/o/gatoconbotasnuevo.jpg?alt=media&token=9a39a84f-fd1c-48d4-9afc-8f04ebafe1d2"
    },
    {
        nombre:"gatoconbotas",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadeisyrubio.appspot.com/o/gatoconbotasnuevo.jpg?alt=media&token=9a39a84f-fd1c-48d4-9afc-8f04ebafe1d2"
    },
    {
        nombre:"gatoconbotas",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadeisyrubio.appspot.com/o/gatoconbotasnuevo.jpg?alt=media&token=9a39a84f-fd1c-48d4-9afc-8f04ebafe1d2"
    },
    {
        nombre:"gatoconbotas",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadeisyrubio.appspot.com/o/gatoconbotasnuevo.jpg?alt=media&token=9a39a84f-fd1c-48d4-9afc-8f04ebafe1d2"
    },
    {
        nombre:"gatoconbotas",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadeisyrubio.appspot.com/o/gatoconbotasnuevo.jpg?alt=media&token=9a39a84f-fd1c-48d4-9afc-8f04ebafe1d2"
    }

]

let fila=document.getElementById("fila")

peliculas.forEach(function(pelicula){
    console.log(pelicula.poster)

    let foto=document.createElement("img")
    foto.src=pelicula.poster
    foto.classList.add("img-fluid","w-100")

    fila.appendChild(foto)

})