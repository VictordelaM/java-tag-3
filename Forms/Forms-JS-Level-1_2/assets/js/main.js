function calc(){
    let datum = document.querySelector("#date").value
    let age = 2023 - datum
    let output = document.querySelector("#output")
    output.innerHTML = `<p>${age}</p>`
}