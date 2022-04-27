function Storage() {}

Storage.prototype.getFromLocalStorage = function () {
    let films;

    if (localStorage.getItem("films") === null) {
        films = [];
    } else {
        films = JSON.parse(localStorage.getItem("films"))
    }
    return films;
}


Storage.prototype.addToLocalStorage = function (newfilm) {
    let films = this.getFromLocalStorage();
    films.push(newfilm);
    localStorage.setItem("films", JSON.stringify(films))


}

Storage.prototype.deleteFromStorage = function (filmadı) {

    let allfilms = this.getFromLocalStorage();
    allfilms.forEach(function (element, index) {
        if (element.title == filmadı) {
            allfilms.splice(index, 1);
            console.log("silindi")
        } else {
        }
        localStorage.setItem("films", JSON.stringify(allfilms));
    });

}

Storage.prototype.deleteAllFromStorage = function (e) {

    alert("Hepsi Silinecek emin misiniz")

    localStorage.removeItem("films")
}