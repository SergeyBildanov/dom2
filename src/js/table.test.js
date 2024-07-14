import Table from "./table";

test("making new Table", () => {
  let table = new Table();
  expect(table instanceof Table).toBe(true);
});
