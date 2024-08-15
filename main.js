let son = document.querySelector(".h1")

let random = Math.round(Math.random() * 100)

son.style.textAlign  = "center"
son.style.marginTop = "300px"
son.innerHTML = `<h1 style="color: red; " >${random}</h1>`   