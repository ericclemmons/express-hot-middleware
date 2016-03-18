import expect from "expect";
import test from "ava";

import hot from "..";

test("export default to be 'hotMiddleware' function", (t) => {
  expect(hot.name).toEqual("hotMiddleware");
});
