"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
function findWrongWayCow(field) {
    var cows = [];
    for (var y = 0; y < field.length; y++) {
        for (var x = 0; x < field[y].length; x++) {
            if (field[y][x] === 'c') {
                var direction = getCowDirection(field, x, y);
                if (direction) {
                    cows.push({ position: { x: x, y: y }, direction: direction });
                }
            }
        }
    }
    var directionCount = {};
    cows.forEach(function (cow) {
        directionCount[cow.direction] = (directionCount[cow.direction] || 0) + 1;
    });
    var wrongDirection = Object.keys(directionCount).find(function (dir) { return directionCount[dir] === 1; });
    var wrongCow = cows.find(function (cow) { return cow.direction === wrongDirection; });
    return Array(wrongCow.position.x, wrongCow.position.y);
}
function getCowDirection(field, x, y) {
    var directions = [
        { name: 'north', dx: 0, dy: -1, letters: ['o', 'w'] },
        { name: 'south', dx: 0, dy: 1, letters: ['o', 'w'] },
        { name: 'east', dx: 1, dy: 0, letters: ['o', 'w'] },
        { name: 'west', dx: -1, dy: 0, letters: ['o', 'w'] }
    ];
    for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
        var dir = directions_1[_i];
        var valid = true;
        for (var i = 0; i < 2; i++) {
            var nx = x + dir.dx * (i + 1);
            var ny = y + dir.dy * (i + 1);
            if (ny < 0 || ny >= field.length || nx < 0 || nx >= field[ny].length ||
                field[ny][nx] !== dir.letters[i]) {
                valid = false;
                break;
            }
        }
        if (valid)
            return dir.name;
    }
    return null;
}
describe('', function () {
    it('', function () {
        var cows = [
            "cow.cow.cow.cow.cow",
            "cow.cow.cow.cow.cow",
            "cow.woc.cow.cow.cow",
            "cow.cow.cow.cow.cow"
        ];
        chai_1.assert.deepEqual(findWrongWayCow(cows), [6, 2]);
    }),
        it('', function () {
            var cows = [
                "c..........",
                "o...c......",
                "w...o.c....",
                "....w.o....",
                "......w.cow"
            ];
            chai_1.assert.deepEqual(findWrongWayCow(cows), [8, 4]);
        });
});
