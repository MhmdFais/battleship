import { Player } from "../back-end/player";

let players = [];
let gameState;

function getBoardFromDom() {
  const boards = Array.from(document.querySelectorAll(".board"));
  const boardsChildNodes = [boards[0].children, boards[1].children];
  return boardsChildNodes;
}

function createPlayers(
  playerOneName,
  playerTwoName,
  playerOneType,
  playerTwoType
) {
  players = [
    {
      player: new Player(playerOneType, playerOneName),
      board: getBoardFromDom(0),
    },
    {
      player: new Player(playerTwoType, playerTwoName),
      board: getBoardFromDom(1),
    },
  ];
}

function reInitializePlayers(playerOneName, playerOneType) {
  players[0] = {
    player: new Player(playerOneType, playerOneName),
    board: getBoardFromDom(0),
  };
  initiateGameState();
  populateGameBoards();
  setBeforeGameState();
}

function initiateGameState() {
  gameState = {
    currentPlayer: players[0].player,
    currentPlayerBoard: players[0].board,
    isFinished: false,
  };
}
function getPlayers() {
  return players;
}
function getGameState() {
  return gameState;
}
function setGameState(key, value) {
  gameState[`${key}`] = value;
}
function getCurrentPlayer() {
  return gameState.currentPlayer;
}
function getCurrentPlayerDomBoard() {
  return gameState.currentPlayerBoard;
}
function getNonCurrentPlayerDomBoard() {
  return gameState.currentPlayer === players[0].player
    ? players[1].board
    : players[0].board;
}

function getOpposingPlayer() {
  return gameState.currentPlayer === players[0].player
    ? players[1].player
    : players[0].player;
}
function changeCurrentPlayer() {
  gameState.currentPlayer =
    gameState.currentPlayer === players[0].player
      ? players[1].player
      : players[0].player;
  gameState.currentPlayerBoard =
    gameState.currentPlayer === players[0].player
      ? players[0].board
      : players[1].board;
}

function initiateGame(playerOne, playerTwo) {
  initiateDom();
  createPlayers(playerOne.name, playerTwo.name, playerOne.type, playerTwo.type);
  initiateGameState();
  populateGameBoards();
  setBeforeGameState();
}

export {
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
};
