"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
function combinePathsUri() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 0) {
        return '/';
    }
    var pathInUnixStyle = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg === '')
            continue;
        var cleanedPath = arg.replace(/\\/g, '/').replace(/ /g, '').trim();
        if (cleanedPath === '')
            continue;
        if (pathInUnixStyle.length != 0 && !cleanedPath.startsWith('/')) {
            cleanedPath = '/' + cleanedPath;
        }
        cleanedPath = cleanedPath.replace(/\/+$/g, '');
        pathInUnixStyle.push(cleanedPath);
    }
    var resultPathInUnixStyle = pathInUnixStyle.join('');
    if (!resultPathInUnixStyle.startsWith('/')) {
        resultPathInUnixStyle = '/' + resultPathInUnixStyle;
    }
    return resultPathInUnixStyle;
}
describe("UNIX style path", function () {
    it("Simple tests", function () {
        chai_1.assert.equal(combinePathsUri(), '/');
        chai_1.assert.equal(combinePathsUri('test'), '/test');
        chai_1.assert.equal(combinePathsUri('test/test'), '/test/test');
    });
    it("Backslashes and spaces", function () {
        chai_1.assert.equal(combinePathsUri("   /testing", "", "", "  \\  empty", "\\parts/", " and ", "", "with/different\\slashes    "), "/testing/empty/parts/and/with/different/slashes");
        chai_1.assert.equal(combinePathsUri('test\\test/test'), '/test/test/test');
        chai_1.assert.equal(combinePathsUri('    test/test'), '/test/test');
        chai_1.assert.equal(combinePathsUri('   test   ', '/test', '', '       \\test\\', 'test'), '/test/test/test/test');
        chai_1.assert.equal(combinePathsUri(" .. ", "/complex/path/with/slashes/inside/", " . ", "\\complex\\path\\with\\back\\slashes\\inside\\"), "/../complex/path/with/slashes/inside/./complex/path/with/back/slashes/inside");
    });
});
