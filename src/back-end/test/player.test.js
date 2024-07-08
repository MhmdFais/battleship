import { Player } from "../player";

const player = new Player("Player", false);
const computer = new Player("Computer", true);

test("Player attacks computer at (0, 0) : Success", () => {
  expect(player.playerAttack(0, 0, computer)).toBeFalsy();
});

test("Player attacks computer at (0, 0) : Already attacked", () => {
  expect(player.playerAttack(0, 0, computer)).toBeFalsy();
});

test("Computer attacks player", () => {
  expect(computer.computerAttack(player)).toBeFalsy();
});
