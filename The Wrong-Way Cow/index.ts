import { assert } from 'chai'

interface Position {
    x: number;
    y: number;
}

function findWrongWayCow(field: string[]): number[] {
    const cows: { position: Position; direction: string }[] = [];

    for (let y = 0; y < field.length; y++) {
        for (let x = 0; x < field[y].length; x++) {
            if (field[y][x] === 'c') {
                const direction = getCowDirection(field, x, y);
                if (direction) {
                    cows.push({ position: { x, y }, direction });
                }
            }
        }
    }

    const directionCount: Record<string, number> = {};
    cows.forEach(cow => {
        directionCount[cow.direction] = (directionCount[cow.direction] || 0) + 1;
    });

    const wrongDirection = Object.keys(directionCount).find(dir => directionCount[dir] === 1);

    const wrongCow = cows.find(cow => cow.direction === wrongDirection);

    return Array(wrongCow!.position.x, wrongCow!.position.y);
}

function getCowDirection(field: string[], x: number, y: number): string | null {
    const directions = [
        { name: 'north', dx: 0, dy: -1, letters: ['o', 'w'] },
        { name: 'south', dx: 0, dy: 1, letters: ['o', 'w'] },
        { name: 'east', dx: 1, dy: 0, letters: ['o', 'w'] },
        { name: 'west', dx: -1, dy: 0, letters: ['o', 'w'] }
    ];

    for (const dir of directions) {
        let valid = true;
        for (let i = 0; i < 2; i++) {
            const nx = x + dir.dx * (i + 1);
            const ny = y + dir.dy * (i + 1);

            if (ny < 0 || ny >= field.length || nx < 0 || nx >= field[ny].length ||
                field[ny][nx] !== dir.letters[i]) {
                valid = false;
                break;
            }
        }
        if (valid) return dir.name;
    }

    return null;
}

describe('', () => {
    it('', () => {
        let cows = [
            "cow.cow.cow.cow.cow",
            "cow.cow.cow.cow.cow",
            "cow.woc.cow.cow.cow",
            "cow.cow.cow.cow.cow"
        ]
        assert.deepEqual(findWrongWayCow(cows), [6, 2]);
    }),
    it('', () => {
        let cows = [
           "c..........",
           "o...c......",
           "w...o.c....",
            "....w.o....",
            "......w.cow"
        ]
        assert.deepEqual(findWrongWayCow(cows), [8, 4])
    })
})