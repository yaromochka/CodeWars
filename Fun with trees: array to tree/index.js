"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var TreeNode = /** @class */ (function () {
    function TreeNode(value, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.value = value;
        this.left = left;
        this.right = right;
        this.value = value;
        this.left = left;
        this.right = right;
    }
    return TreeNode;
}());
function arrayToTree(arr) {
    if (arr.length === 0)
        return undefined;
    var root = new TreeNode(arr[0]);
    var queue = [root];
    var i = 1;
    while (i < arr.length && queue.length > 0) {
        var currentNode = queue.shift();
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
}
;
describe("arrayToTree", function () {
    it("empty array", function () {
        var array = [];
        var expected = undefined;
        test(array, expected);
    });
    it("array with multiple elements", function () {
        var array = [17, 0, -4, 3, 15];
        var expected = new TreeNode(17, new TreeNode(0, new TreeNode(3), new TreeNode(15)), new TreeNode(-4));
        test(array, expected);
    });
});
function test(array, expected) {
    (0, chai_1.assert)(JSON.stringify(arrayToTree(array)), JSON.stringify(expected));
}
;
