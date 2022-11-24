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
  document.querySelector('.info-figurinha').classList.toggle('block')
}

//  CARDS > JOGOS
function createGame(player1, hour, player2){
  return`
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
  `
}

//  CARDS
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

//  JOGOS > HORARIOS
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
          createGame("brasil", "16:00", "servia")
    )+
    createCard(
      "26/11", 
      "sabado", 
      createGame("argentina", "13:00", "mexico")
    )+
    createCard(
      "28/11", 
      "segunda", 
      createGame("brasil", "13:00", "suica") +
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
        createGame("camarao", "16:00", "brasil")
    )


// function createFigure(nome, dataNascimento, paisOrigem, altura, peso){
//   return`
//       <div class="figurinhas">
//         <div class="logo-primeira-parte">
//           <img src="./img/logo-figurinha.jpg" alt="logo figurinha copa">
//         </div>
//         <div class="central">
//           <img src="./img/${nome}.png" alt="foto jogador">
//           <h4>${nome}</h4>
//           <p>${dataNascimento}</p>
//         </div>
//         <div class="icon-segunda-parte">
//           <img src="./assets/icon-${paisOrigem}.svg" alt="logo ${paisOrigem}">
//           <p>2022</p>
//           <div class="icon-terceiro">           
//             <div>
//               <img src="./img/iconde-altura.jpg" alt="icone altura">
//               <p>${altura}</p>
//             </div>
//             <div>
//               <img src="./img/icone-peso.jpg" alt="icone peso">
//               <p>${peso}</p>
//             </div>
//           </div>
//         </div>
//       </div>
// `}

// let nome = [];
// let dataNascimento = [];
// let paisOrigem = [];
// let altura = [];
// let peso = [];

// let data = [
//     {
//         "nome": "Neymar",
//         "data_nascimento": "27/12/1997",
//         "altura": "1,78",
//         "peso": 70
//     },
//     {
//         "nome": "gustavo",
//         "data_nascimento": "25/05/1983",
//         "altura": "1,56",
//         "peso": 60
//     },
//     {
//         "nome": "bruno",
//         "data_nascimento": "02/11/2002",
//         "altura": "1,92",
//         "peso": 85
//     },
//     {
//         "nome": "lucas",
//         "data_nascimento": "19/03/2000",
//         "altura": "1,82",
//         "peso": 65
//     },
//     {
//         "nome": "arthur",
//         "data_nascimento": "15/03/2011",
//         "altura": "1,58",
//         "peso": 45
//     },
//     {
//         "nome": "marta",
//         "data_nascimento": "07/05/1986",
//         "altura": "1,66",
//         "peso": 56
//     },
//     {
//         "nome": "messi",
//         "data_nascimento": "30/06/1985",
//         "altura": "1,70",
//         "peso": 67
//     },
//     {
//         "nome": "cristiano ronaldo",
//         "data_nascimento": "28/02/1979",
//         "altura": "1,82",
//         "peso": 73
//     },
//     {
//         "nome": "tulio",
//         "data_nascimento": "13/05/2006",
//         "altura": "1,82",
//         "peso": 53
//     },
//     {
//         "nome": "wesley martins",
//         "data_nascimento": "01/02/2000",
//         "altura": "1,56",
//         "peso": 46
//     }
// ]

// function getDados() {
//   fetch('http://demo0939067.mockable.io/')
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('data')
//       console.log(data)
//       data.forEach((item) => {
//         nome.push(item.nome)
//         dataNascimento.push(item.data_nascimento)
//         paisOrigem.push(item.pais_origem)
//         altura.push(item.altura)
//         peso.push(item.peso)
//       })
//     });
// }
// getDados()

console.log(nome);
console.log(dataNascimento);
console.log(paisOrigem);
console.log(altura);
console.log(peso);


// document.querySelector('.conteudo-figurinhas').innerHTML = data
//   .map((item) => createFigure(item.nome, item.data_nascimento, "brasil", item.altura, item.peso))
//   .join('')


// MUDANÇA DE TEMA-LEGEND

// let legend = true;
// if (legend === false){
//   document.querySelector('.figurinhas').addClass('legend')
// }