import { assert } from 'chai';

const DELETE_SPACES_REGEXP = /\\/g

function combinePathsUri(...args: string[]): string {
    if (args.length === 0) {
        return '/';
    }

    let pathInUnixStyle = [];

    for (let arg of args) {
        if (arg === '') continue;
        let cleanedPath = arg.replace(/\\/g, '/').replace(DELETE_SPACES_REGEXP, '').trim();
        if (cleanedPath === '') continue;
        if (pathInUnixStyle.length != 0 && !cleanedPath.startsWith('/')) {
            cleanedPath = '/' + cleanedPath;
        }
        cleanedPath = cleanedPath.replace(/\/+$/g, '');
        pathInUnixStyle.push(cleanedPath);
    }

    let resultPathInUnixStyle = pathInUnixStyle.join('')

    if (!resultPathInUnixStyle.startsWith('/')) {
        resultPathInUnixStyle = '/' + resultPathInUnixStyle;
    }

    return resultPathInUnixStyle;
}

describe("UNIX style path", () => {
    it("Simple tests", () => {
        assert.equal(combinePathsUri(), '/');
        assert.equal(combinePathsUri('test'), '/test');
        assert.equal(combinePathsUri('test/test'), '/test/test');
    });

    it("Backslashes and spaces", () => {
        assert.equal(combinePathsUri("   /testing", "", "", "  \\  empty", "\\parts/", " and ", "", "with/different\\slashes    "), "/testing/empty/parts/and/with/different/slashes");
        assert.equal(combinePathsUri('test\\test/test'), '/test/test/test');
        assert.equal(combinePathsUri('    test/test'), '/test/test');
        assert.equal(combinePathsUri('   test   ', '/test', '', '       \\test\\', 'test'), '/test/test/test/test');
        assert.equal(combinePathsUri(" .. ", "/complex/path/with/slashes/inside/", " . ", "\\complex\\path\\with\\back\\slashes\\inside\\"), "/../complex/path/with/slashes/inside/./complex/path/with/back/slashes/inside");
    });
});