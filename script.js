// ADICIONAR MUDANÇA DE TEMAS

function mudarTema(click){
  const colorYellow = document.querySelector(".yellow")
  const colorBlue = document.querySelector(".blue")
  const colorGreen = document.querySelector(".green")
  const colorRed = document.querySelector(".red")
  let corpo = document.querySelector('body')

  const result = /yellow|blue|green|red/.exec(`${corpo.classList.value}`)
  corpo.classList.remove(result)

  corpo.classList.add(`${click.target.classList.value}`)
}

function toggleFigurinha(){
  document.querySelector('aside').classList.toggle('active')
  console.log('clique')
}



function createGame(player1, hour, player2){
  return`
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return`
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
    createCard(
      "22/11", 
      "terça", 
      createGame("argentina", "07:00", "arabia-saudita")
    )+
    createCard(
      "24/11", 
      "quinta", 
      createGame("uruguai", "10:00", "coreia-sul") +
        createGame("portugal", "13:00", "gana") + 
          createGame("brazil", "16:00", "servia")
    )+
    createCard(
      "26/11", 
      "sabado", 
      createGame("argentina", "13:00", "mexico")
    )+
    createCard(
      "28/11", 
      "segunda", 
      createGame("brazil", "13:00", "suica") +
      createGame("portugal", "16:00", "uruguai")
    )+
    createCard(
      "30/11", 
      "quarta", 
      createGame("polonia", "16:00", "argentina")
    )+
    createCard(
      "02/12", 
      "sexta", 
      createGame("coreia-sul", "12:00", "portugal")+
        createGame("camarao", "16:00", "brazil")
    )
