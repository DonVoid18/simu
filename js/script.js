const inter = 1

const client1 = document.getElementById("client1")
const client2 = document.getElementById("client2")
const client3 = document.getElementById("client3")
const client4 = document.getElementById("client4")

client1.style.position = "absolute"
client1.style.top = "0px"
client1.style.left = "0px"

client2.style.position = "absolute"
client2.style.top = "200px"
client2.style.left = "0px"

client3.style.position = "absolute"
client3.style.top = "400px"
client3.style.left = "0px"

client4.style.position = "absolute"
client4.style.top = "600px"
client4.style.left = "0px"

let nuevaPosicionLeft = 0  // Declarar nuevaPosicionLeft fuera del setInterval

const intervalId = setInterval(() => {
  nuevaPosicionLeft = parseFloat(client1.style.left) + 0.5
  client1.style.left = nuevaPosicionLeft + "px"

  if (nuevaPosicionLeft >= 1200) {
    clearInterval(intervalId)
    client1.style.display = "none" // Oculta la imagen
  }
}, inter)

const intervalId2 = setInterval(() => {
  nuevaPosicionLeft = parseFloat(client2.style.left) + 0.8
  client2.style.left = nuevaPosicionLeft + "px"

  if (nuevaPosicionLeft >= 1200) {
    clearInterval(intervalId2)
    client2.style.display = "none" // Oculta la imagen
  }
}, inter)

const intervalId3 = setInterval(() => {
  nuevaPosicionLeft = parseFloat(client3.style.left) + 0.3
  client3.style.left = nuevaPosicionLeft + "px"

  if (nuevaPosicionLeft >= 1200) {
    clearInterval(intervalId3)
    client3.style.display = "none" // Oculta la imagen
  }
}, inter)

const intervalId4 = setInterval(() => {
  nuevaPosicionLeft = parseFloat(client4.style.left) + 0.5
  client4.style.left = nuevaPosicionLeft + "px"

  if (nuevaPosicionLeft >= 1200) {
    clearInterval(intervalId4)
    client4.style.display = "none" // Oculta la imagen
  }
}, inter)
