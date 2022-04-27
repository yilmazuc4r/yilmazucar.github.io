function UI() {}


UI.prototype.addFilmtoUI = function (newfilm) {
    const films = document.getElementById("films");

    films.innerHTML += `
    <tr>
    <td><img src="${newfilm.url}" class="img-fluid img-thumbnail" style="width:100px;height:100px;"/></td>
     <td>${newfilm.title}</td>
     <td>${newfilm.director}</td>
     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
   </tr>
    `;


    console.log(newfilm)

}

UI.prototype.clearInputs = function (a, b, c) {
    a.value = "";
    b.value = "";
    c.value = "";
}



UI.prototype.displayMessages = function (message, type) {
    const cardbody = document.querySelectorAll(".card-body")[0]

    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardbody.appendChild(div)

    setTimeout(function () {
        div.remove();
    }, 1000)

}

UI.prototype.addAllFilms = function (films) {
    const filmslist = document.getElementById("films");

    films.forEach(function (element) {
        filmslist.innerHTML += `
<tr>
<td><img src="${element.url}" class="img-fluid img-thumbnail" style="width:100px;height:100px;"/></td>
 <td>${element.title}</td>
 <td>${element.director}</td>
 <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr>
`;
    });

}

UI.prototype.deleteFromUI = function (e) {

    if (e.target.className == "btn btn-danger") {
        e.target.parentElement.parentElement.remove();
    } else {}


}

UI.prototype.deleteAllFromUI = function (e) {

    if (e.target.id == "clear-films") {
        console.log(e.target.id)
        while (films.firstElementChild != null) {
            films.removeChild(films.firstElementChild);
        }
    }
}