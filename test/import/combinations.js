import assert from "assert"
import * as abc1 from "../fixture/export/abc.js"
import abc2, * as abc3 from "../fixture/export/abc.js"
import { default as abc4 } from "../fixture/export/abc.js"
import abc5, { a as aa, b as bb, c } from "../fixture/export/abc.js"

export function check() {
  const abcNs = {
    a: "a",
    b: "b",
    c: "c",
    default: { a: "a", b: "b", c: "c" }
  }

  assert.deepEqual(abc1, abcNs)
  assert.strictEqual(abc1, abc3)
  assert.strictEqual(abc1.default, abc2)
  assert.strictEqual(abc1.default, abc4)
  assert.strictEqual(abc1.default, abc5)
}
