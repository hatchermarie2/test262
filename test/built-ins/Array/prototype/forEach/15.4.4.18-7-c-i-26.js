// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.18-7-c-i-26
description: >
    Array.prototype.forEach - This object is the Arguments object
    which implements its own property get method (number of arguments
    equals number of parameters)
includes: [runTestCase.js]
---*/

function testcase() {

        var called = 0;
        var testResult = false;

        function callbackfn(val, idx, obj) {
            called++;
            if (called !== 1 && !testResult) {
                return;
            }
            if (idx === 0) {
                testResult = (val === 11);
            } else if (idx === 1) {
                testResult = (val === 9);
            } else {
                testResult = false;
            }
        }

        var func = function (a, b) {
            Array.prototype.forEach.call(arguments, callbackfn);
        };

        func(11, 9);

        return testResult;
    }
runTestCase(testcase);