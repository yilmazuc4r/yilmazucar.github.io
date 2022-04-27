const clearFilmBtn = document.querySelector("#clear-films");
const form = document.getElementById("film-form");
const elementtitle = document.getElementById("title");
const elementdirector = document.getElementById("director");
const elementurl = document.getElementById("url")
const clearbtn = document.querySelector("#delete-film")
const cardbody2 = document.querySelectorAll(".card-body")[1];
const ui = new UI();
const ls = new Storage();
evetlisteners();

function evetlisteners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", callFromLocalStorage);
    cardbody2.addEventListener("click", deleteFilm)
    clearFilmBtn.addEventListener("click",deleteAllFilm)

}

function addFilm(e) {
    const title = elementtitle.value;
    const director = elementdirector.value;
    const url = elementurl.value;

    if (title === "" || director === "" || url === "") {
        console.log("Hata")
        ui.displayMessages("Lürfen bilgislerin tam girin", "success")
    } else {
        const newFilm = new Film(title, director, url)

        ui.addFilmtoUI(newFilm);
        ls.addToLocalStorage(newFilm);
    }

    ui.clearInputs(elementdirector, elementtitle, elementurl);
    e.preventDefault();
}

function callFromLocalStorage(e) {
    let allfilms = ls.getFromLocalStorage();
    ui.addAllFilms(allfilms);
}

function deleteFilm(e) {
let filmname = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
console.log(filmname)
    ui.deleteFromUI(e);
    ls.deleteFromStorage(filmname);

}

function deleteAllFilm (e){

    console.log("Bütün filmleri silmeye yarae")
    

    ui.deleteAllFromUI(e);
    ls.deleteAllFromStorage();

}