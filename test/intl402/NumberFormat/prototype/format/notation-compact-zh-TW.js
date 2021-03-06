// Copyright 2019 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.numberformat.prototype.format
description: Checks handling of the compactDisplay option to the NumberFormat constructor.
locale: [zh-TW]
features: [Intl.NumberFormat-unified]
---*/

const nfShort = new Intl.NumberFormat("zh-TW", {
  notation: "compact",
  compactDisplay: "short",
});
assert.sameValue(nfShort.format(987654321), "9.9億");
assert.sameValue(nfShort.format(98765432), "9877萬");
assert.sameValue(nfShort.format(98765), "9.9萬");
assert.sameValue(nfShort.format(9876), "9876");
assert.sameValue(nfShort.format(159), "159");
assert.sameValue(nfShort.format(15.9), "16");
assert.sameValue(nfShort.format(1.59), "1.6");
assert.sameValue(nfShort.format(0.159), "0.16");
assert.sameValue(nfShort.format(0.0159), "0.016");
assert.sameValue(nfShort.format(0.00159), "0.0016");

const nfLong = new Intl.NumberFormat("zh-TW", {
  notation: "compact",
  compactDisplay: "long",
});
assert.sameValue(nfLong.format(987654321), "9.9億");
assert.sameValue(nfLong.format(98765432), "9877萬");
assert.sameValue(nfLong.format(98765), "9.9萬");
assert.sameValue(nfLong.format(9876), "9876");
assert.sameValue(nfLong.format(159), "159");
assert.sameValue(nfLong.format(15.9), "16");
assert.sameValue(nfLong.format(1.59), "1.6");
assert.sameValue(nfLong.format(0.159), "0.16");
assert.sameValue(nfLong.format(0.0159), "0.016");
assert.sameValue(nfLong.format(0.00159), "0.0016");
