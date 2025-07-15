"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
function combinePathsUri() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // add magic here
    if (args.length === 0) {
        return '/';
    }
    var pathInUnixStyle = [];
    for (var indexOfArg in args) {
        var path = args[indexOfArg];
        if (path === '') {
            continue;
        }
        if (path[0] !== '/') {
            pathInUnixStyle.push('/');
        }
        var clearPath = path.replace(' ', '').replace('\\', '/').trim();
        pathInUnixStyle.push(clearPath);
    }
    return pathInUnixStyle.join('');
}
describe("UNIX style path", function () {
    it("Simple tests", function () {
        chai_1.assert.equal(combinePathsUri(), '/');
        chai_1.assert.equal(combinePathsUri('test'), '/test');
        chai_1.assert.equal(combinePathsUri('test/test'), '/test/test');
    });
    it("Backslashes and spaces", function () {
        chai_1.assert.equal(combinePathsUri("   /testing", "", "", "  \\  empty", "\\parts/", " and ", "", "with/different\\slashes    "), "/testing/empty/parts/and/with/different/slashes");
        chai_1.assert.equal(combinePathsUri('test\\test/test'), 'test/test/test');
        chai_1.assert.equal(combinePathsUri('    test/test'), '/test/test');
        chai_1.assert.equal(combinePathsUri('   test   ', '/test', '', '       \\test\\', 'test'), '/test/test/test/test');
        chai_1.assert.equal(combinePathsUri(" .. ", "/complex/path/with/slashes/inside/", " . ", "\\complex\\path\\with\\back\\slashes\\inside\\"), "/../complex/path/with/slashes/inside/./complex/path/with/back/slashes/inside");
    });
});
