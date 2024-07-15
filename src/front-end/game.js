import { create, without } from "lodash";
import {
  initiateGame,
  getPlayers,
  getGameState,
  setGameState,
  getCurrentPlayer,
  getCurrentPlayerDomBoard,
  getNonCurrentPlayerDomBoard,
  getOpposingPlayer,
  changeCurrentPlayer,
  reInitializePlayers,
} from "./playersBoard.js";

function initiateDom() {
  populateBoard();
}

function populateBoard() {
  const boards = document.querySelectorAll(".board");

  boards.forEach((board, index) => {
    board.innerHTML = "";

    for (let i = 0; i < 10; i++) {
      const rowIndex = i;
      for (let j = 0; j < 10; j++) {
        const columnIndex = j;
        const div = document.createElement("div");
        div.classList.add("cell");

        div.dataset.row = rowIndex;
        div.dataset.column = columnIndex;
        div.dataset.player = index;

        if (rowIndex === 0) {
          const span = createSpan("coord-num-up", columnIndex);
          div.appendChild(span);
        }
        if (columnIndex === 0) {
          const span = createSpan("coord-num-left", rowIndex);
          div.appendChild(span);
        }

        board.appendChild(div);

        div.addEventListener("click", handleDivClick);
      }
    }
  });
}

function createSpan(className, text) {
  const span = document.createElement("span");
  span.classList.add(className);
  span.textContent = text;
  return span;
}

async function handleDivClick(e) {
  if (hitShip(e.target.dataset)) {
    const currentPlayer = getPlayers()[parseInt(e.target.dataset.player)];

    const x_coord = parseInt(e.target.dataset.column);
    const y_coord = parseInt(e.target.dataset.row);

    const currentShip = currentPlayer.player.gameBoard.getShip([
      x_coord,
      y_coord,
    ]);

    if (currentShip.sunk) {
      const surroundingCoords = currentPlayer.player.getShipSurroundingCoords([
        [x_coord, y_coord],
      ]);
      currentPlayer.player.gameBoard.surroundingShots.push(
        ...surroundingCoords
      );
      if (currentPlayer.player.gameBoard.hasAllShipsBeenSunk()) {
        setGameState("isFinished", true);
        alert(getCurrentPlayer().name + " wins!");
        return;
      }
    } else {
      changeCurrentPlayer();
      populateGameboards();
      renderCurrentPlayerDisplay();
      // change players
      const nonAIPlayer = getPlayers()[0];
      const playerGameboard = nonAIPlayer.player.gameBoard;

      await aiAttackWithDelay(playerGameboard);
      if (playerGameboard.hasAllShipsBeenSunk()) return;
    }
  }

  populateGameboards();
  await new Promise((resolve) => setTimeout(resolve, 300));
  renderCurrentPlayerDisplay();
}

function populateGameboards() {
  const players = getPlayers();
  renderPlayerNames(players);
  players.forEach((player) => {
    renderPlayerBoard(player);
  });
}

function renderCurrentPlayerDisplay() {
  const humanBoard = document.querySelector(".human-board");
  const aiBoard = document.querySelector(".computer-board");

  humanBoard.classList.remove("half-opacity");
  aiBoard.classList.remove("half-opacity");

  setBoardOpacity();

  const nonCurrentPlayerBoard = [...getNonCurrentPlayerDomBoard()];
  const currentPlayerBoard = [...getCurrentPlayerDomBoard()];

  setPlayerBoardEventListener(currentPlayerBoard, true);
  setPlayerBoardEventListener(nonCurrentPlayerBoard, false);
}

function setBoardOpacity() {
  const humanBoard = document.querySelector(".human-board");
  const aiBoard = document.querySelector(".computer-board");
  const currentPlayer = getCurrentPlayer();
  const opposingPlayer = getOpposingPlayer();

  if (currentPlayer.type === "ai") {
    humanBoard.classList.add("half-opacity");
  } else {
    aiBoard.classList.add("half-opacity");
  }
}

function generateCoordNums(div) {
  const divRow = parseInt(div.dataset.row);
  const divColumn = parseInt(div.dataset.column);

  if (divRow === 0 && divColumn === 0) {
    const span1 = createSpan("coord-num-up", divColumn);
    div.appendChild(span1);
    const span2 = createSpan("coord-num-left", divRow);
    div.appendChild(span2);
  } else if (divRow === 0) {
    const span = createSpan("coord-num-up", divColumn);
    div.appendChild(span);
  } else if (divColumn === 0) {
    const span = createSpan("coord-num-left", divRow);
    div.appendChild(span);
  }
}

async function aiAttackWithDelay() {
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (!aiAttack()) {
      if (playerGameboard.hasAllShipsBeenSunk()) {
        alert(getCurrentPlayer().name + " wins!");
        setEndGameState();
        return;
      }
      changeCurrentPlayer();
      break;
    }
    populateGameboards();
    renderCurrentPlayerDisplay();
  }
}

function setEndGameState() {
  populateGameboards();
  //has won message
  setGameState("isFinished", true);
  const nonCurrentPlayerBoard = [...getNonCurrentPlayerDomBoard()];
  const currentPlayerBoard = [...getCurrentPlayerDomBoard()];
  setPlayerBoardEventListener(currentPlayerBoard, true);
  setPlayerBoardEventListener(nonCurrentPlayerBoard, true);
  setBoardOpacity();

  playAgain();
}

function setBeforeGameState() {
  const nonCurrentPlayerBoard = [...getNonCurrentPlayerDomBoard()];
  const currentPlayerBoard = [...getCurrentPlayerDomBoard()];
  setPlayerBoardEventListener(currentPlayerBoard, true);
  setPlayerBoardEventListener(nonCurrentPlayerBoard, true);
  setBoardOpacity();
}

function startGame() {
  const nonCurrentPlayerBoard = [...getNonCurrentPlayerDomBoard()];
  const currentPlayerBoard = [...getCurrentPlayerDomBoard()];
  setPlayerBoardEventListener(currentPlayerBoard, false);
  setPlayerBoardEventListener(nonCurrentPlayerBoard, false);
  setBoardOpacity();
}

function setPlayerBoardEventListener(board, shouldRemoveEventListener) {
  if (shouldRemoveEventListener) {
    board.forEach((div) => {
      div.removeEventListener("click", handleDivClick);
    });
  } else {
    board.forEach((div) => {
      div.addEventListener("click", handleDivClick);
    });
  }
}

function aiAttack() {
  const humanPlayer = getPlayers()[0];
  const playerGameBoard = humanPlayer.player.gameBoard;

  if (playerGameBoard.hasAllShipsBeenSunk()) {
    alert(getCurrentPlayer().name + " wins!");
    return false;
  }

  const hitShots = playerGameBoard.hitShots;
  const missedShots = playerGameBoard.missedShots;
  const surroundingShots = playerGameBoard.surroundingShots;

  let x_coord = Math.floor(Math.random() * 10);
  let y_coord = Math.floor(Math.random() * 10);

  while (
    hasCoordCollision([x_coord, y_coord], hitShots) ||
    hasCoordCollision([x_coord, y_coord], missedShots) ||
    hasCoordCollision([x_coord, y_coord], surroundingShots)
  ) {
    x_coord = Math.floor(Math.random() * 10);
    y_coord = Math.floor(Math.random() * 10);
  }

  const coord = [x_coord, y_coord];

  const isSuccessful = playerGameBoard.receiveAttack(coord);

  const currentShip = playerGameBoard.getShip([x_coord, y_coord]);

  if (currentShip && currentShip.sunk) {
    const surroundingCoords = playerGameBoard.getShipSurroundingCoords([
      x_coord,
      y_coord,
    ]);
    playerGameBoard.surroundingShots.push(...surroundingCoords);
  }

  return isSuccessful;
}

function hasCoordCollision(coord, otherCoord) {
  return otherCoord.some((existingCoord) => {
    // console.log(arraysEqual(existingCoord, coord));
    return arraysEqual(existingCoord, coord);
  });
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((element, index) => element === arr2[index]);
}

function hitShip(player) {
  const playerDataSet = { ...player };

  const currentPlayer = getPlayers()[parseInt(playerDataSet.player)];
  const playerGameBoard = currentPlayer.player.gameBoard;

  const x_coord = parseInt(playerDataSet.column);
  const y_coord = parseInt(playerDataSet.row);
  const coord = [x_coord, y_coord];
  return playerGameBoard.receiveAttack(coord);
}

function renderPlayerBoard(player) {
  const currentPlayer = player.player;

  if (player.player.type !== "ai") {
    const playerBoard = Array.from(player.board);
    playerBoard.forEach((element) => {
      element.classList.remove("ship");
    });
    renderGameboardData(
      player,
      currentPlayer.gameBoard.currentCoords,
      "",
      "ship",
      false
    );
  }

  renderGameboardData(player, currentPlayer.gameBoard.hitShots, "❌", "hit");

  renderGameboardData(
    player,
    currentPlayer.gameBoard.missedShots,
    "▪️",
    "missed"
  );

  renderGameboardData(
    player,
    currentPlayer.gameBoard.surroundingShots,
    "▪️",
    "surround"
  );
}

function renderGameboardData(
  player,
  data,
  text,
  className,
  shouldRemoveEventListener = true
) {
  const playerBoard = Array.from(player.board);

  data.forEach((coord) => {
    const div = findCorrespondingDiv(coord, playerBoard);

    div.textContent = text;
    div.classList.add(className);
    generateCoordNums(div);
    // prevent clicking the same coord again
    if (shouldRemoveEventListener) {
      div.removeEventListener("click", handleDivClick);
    }
  });
}

function findCorrespondingDiv(coord, board) {
  const [x_coord, y_coord] = coord;

  const div = board.find((div) => {
    const row = parseInt(div.dataset.row);
    const column = parseInt(div.dataset.column);
    return row === y_coord && column === x_coord;
  });

  return div;
}

function renderPlayerNames(players) {
  const humanText = document.querySelector(".human-text");
  const aiText = document.querySelector(".computer-text");

  humanText.textContent = "";
  aiText.textContent = "";

  humanText.textContent = players[0].player.name;
  aiText.textContent = players[1].player.name;
}
