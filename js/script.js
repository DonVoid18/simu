const inter = 1
const clients = document.querySelectorAll(".client")

// Establecer posición inicial de los clientes
clients.forEach((client, index) => {
  client.style.position = "absolute"
  client.style.top = `${index * 110}px`
  client.style.left = "0px"
})

// Función para mover un cliente
function moveClient(client, speed) {
  let nuevaPosicionLeft = 0
  const intervalId = setInterval(() => {
    nuevaPosicionLeft = parseFloat(client.style.left) + speed
    client.style.left = nuevaPosicionLeft + "px"

    if (nuevaPosicionLeft >= 1400) {
      clearInterval(intervalId)
      client.style.display = "none" // Oculta la imagen
    }
  }, inter)
}

// Mover cada cliente con una velocidad diferente
clients.forEach((client, index) => {
  console.log(client, index)
  switch (index) {
    case 0:
      moveClient(client, 0.5)
      break
    case 1:
      moveClient(client, 0.8)
      break
    case 2:
      moveClient(client, 0.3)
      break
    case 3:
      moveClient(client, 0.5)
      break
    case 4:
      moveClient(client, 0.7)
      break
    case 5:
      moveClient(client, 0.9)
      break
    case 6:
      moveClient(client, 0.4)
      break
    // Puedes añadir más casos si hay más clientes
  }
})
