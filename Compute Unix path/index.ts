import { assert } from 'chai';

function combinePathsUri(...args: string[]) {
    // add magic here
    if (args.length === 0) {
        return '/'
    }

    let pathInUnixStyle: string[] = []

    for (let indexOfArg in args) {
        let path: string = args[indexOfArg]

        if (path === '') {
            continue
        }

        if (path[0] !== '/') {
            pathInUnixStyle.push('/')
        }
        let clearPath = path.replace(' ', '').replace('\\', '/').trim()
        pathInUnixStyle.push(clearPath)
    }

    return pathInUnixStyle.join('')
}

describe("UNIX style path", () => {
    it("Simple tests", () => {
        assert.equal(combinePathsUri(), '/');
        assert.equal(combinePathsUri('test'), '/test');
        assert.equal(combinePathsUri('test/test'), '/test/test');
    });

    it("Backslashes and spaces", () => {
        assert.equal(combinePathsUri("   /testing", "", "", "  \\  empty", "\\parts/", " and ", "", "with/different\\slashes    "), "/testing/empty/parts/and/with/different/slashes");
        assert.equal(combinePathsUri('test\\test/test'), 'test/test/test');
        assert.equal(combinePathsUri('    test/test'), '/test/test');
        assert.equal(combinePathsUri('   test   ', '/test', '', '       \\test\\', 'test'), '/test/test/test/test');
        assert.equal(combinePathsUri(" .. ", "/complex/path/with/slashes/inside/", " . ", "\\complex\\path\\with\\back\\slashes\\inside\\"), "/../complex/path/with/slashes/inside/./complex/path/with/back/slashes/inside");
    });
});

