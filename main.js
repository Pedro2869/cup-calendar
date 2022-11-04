function createGame(player1, hour, player2) {
  return `
    <li>
        <img
            src="./assets/bandeira-${player1}.svg"
            alt="Bandeira do ${player1}"
        />
        <strong>${hour}</strong>
        <img
            src="./assets/bandeira-${player2}.svg"
            alt="Bandeira da ${player2}"
        />
    </li>
    `;
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
    `;
}

document.querySelector("#cards").innerHTML =
        createCard(
          "24/11",
          "quinta",
          createGame("brasil", "16:00", "serbia")
        ) +
        createCard(
          "28/11",
          "segunda",
          createGame("switzerland", "13:00", "brasil") + 
          createGame("portugal", "16:00", "uruguai")
        ) +
        createCard(
          "02/12",
          "sexta", 
          createGame("brasil", "16:00", "cameroon"))
