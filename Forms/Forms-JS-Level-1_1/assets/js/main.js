function doppel(){
    let eingabe = document.querySelector("#num").value
    let ausgabe = eingabe * 2
    let output = document.querySelector(".output")
    output.innerHTML = `<p>${ausgabe}</p>`
}