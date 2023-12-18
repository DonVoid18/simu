const inter = 1
const pauseDuration = (Math.floor(Math.random() * 5) + 1) * 1000
const clients = document.querySelectorAll(".client")

// Establecer posición inicial de los clientes
clients.forEach((client, index) => {
  client.style.position = "absolute"
  client.style.top = `${index * 110}px`
  client.style.left = "0px"
})

function resetPosition(client) {
  client.style.display = "block" // Asegura que la imagen esté visible
  client.style.left = "0px"
}


// Función para mover un cliente
function moveClient(client, speed) {
  let nuevaPosicionLeft = 0
  const targetPosition = 1330

  function move() {
    const intervalId = setInterval(() => {
      nuevaPosicionLeft = parseFloat(client.style.left) + speed
      client.style.left = nuevaPosicionLeft + "px"

      if (nuevaPosicionLeft >= targetPosition) {
        clearInterval(intervalId)

        // Pausar por 2 segundos en la posición 1350px
        setTimeout(() => {
          resetPosition(client) // Reinicia la posición del cliente
          continueMovement()
        }, pauseDuration)
      }
    }, inter)
  }

  function continueMovement() {
    const intervalId = setInterval(() => {
      nuevaPosicionLeft = parseFloat(client.style.left) + speed
      client.style.left = nuevaPosicionLeft + "px"

      if (nuevaPosicionLeft >= 1400) {
        clearInterval(intervalId)
        client.style.display = "none" // Oculta la imagen
      }
    }, inter)
  }

  move()
}

// Mover cada cliente con una velocidad diferente
clients.forEach((client, index) => {
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
