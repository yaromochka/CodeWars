import { assert } from 'chai'

class TreeNode {
    constructor(public value: number, public left: TreeNode | null = null, public right: TreeNode | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function arrayToTree(arr: number[]): TreeNode | undefined{
    if (arr.length === 0) return undefined;

    const root = new TreeNode(arr[0]);
    const queue: TreeNode[] = [root];
    let i = 1;

    while (i < arr.length && queue.length > 0) {
        const currentNode = queue.shift()!;
        if (i < arr.length) {
            currentNode.left = new TreeNode(arr[i++]);
            queue.push(currentNode.left);
        }
        if (i < arr.length) {
            currentNode.right = new TreeNode(arr[i++]);
            queue.push(currentNode.right);
        }
    }

    return root;
};

describe("arrayToTree", function () {

    it("empty array", function () {
        var array: number[] = [];
        var expected = undefined;
        test(array, expected);
    });

    it("array with multiple elements", function () {
        var array = [17, 0, -4, 3, 15];
        var expected = new TreeNode(17, new TreeNode(0, new TreeNode(3), new TreeNode(15)), new TreeNode(-4));
        test(array, expected);
    });
}); 

function test(array: number[], expected: TreeNode | undefined) {
    assert(JSON.stringify(arrayToTree(array)), JSON.stringify(expected));
};