function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a img
    if(html.classList.contains("light")) {
        //se estiver em light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/mayk2.png")
    } else {
        //se estiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/mayk1.png")
    }
}