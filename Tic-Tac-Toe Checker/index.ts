import { assert } from 'chai';

enum TicTacToeState {
    NOT_FINISHED_AND_WON = -1,
    CAT_GAME = 0,
    X_GAMER = 1,
    O_GAMER = 2
}

function isSolved(board: number[][]): number {
  // TODO: Check if the board is solved!
  
  

  return 0
}

describe('', () => {
    it('', () => {
        let board = [[0, 0, 1], [0, 1, 2], [2, 1, 0]]
        assert.equal(isSolved(board), -1);
    })
})