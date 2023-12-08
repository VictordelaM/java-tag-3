function calc(){
    let datum1 = document.querySelector("#alter1").value
    let datum2 = document.querySelector("#alter2").value
    let differenz = Math.sqrt(Math.pow((age1 - age2),2))
    let output = document.querySelector("#output")
    output.innerHTML += `<p>${differenz}</p>`
}