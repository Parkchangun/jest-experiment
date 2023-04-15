it("toBeTruthy", () => {
  expect(true).toBeTruthy()
  expect(1).toBeTruthy()
  expect(-1).toBeTruthy()
  expect("hello jest").toBeTruthy()
  expect([]).toBeTruthy()
  expect({}).toBeTruthy()
  expect(function () {}).toBeTruthy()
  expect(() => {}).toBeTruthy()
})

it("toBeFalsy", () => {
  expect(false).toBeFalsy()
  expect(0).toBeFalsy()
  expect("").toBeFalsy()
  expect(null).toBeFalsy()
  expect(undefined).toBeFalsy()
  expect(NaN).toBeFalsy()
})

it("toHaveLength", () => {
  expect([]).toHaveLength(0)
  expect(["hello"]).toHaveLength(1)
  expect(["hello", "jest"]).toHaveLength(2)
})

it("toContain", () => {
  expect(["hello", "jest"]).toContain("hello")
  expect(["hello", "jest"]).toContain("jest")
  expect(["hello", "jest"]).not.toContain("python")
})

it("toMatch", () => {
  const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  expect("hello jest").toMatch(/jest/)
  expect("qkrcksrjs@gmail").not.toMatch(regExp)
  expect("qkrcksrjs@gmail.com").toMatch(regExp)
})

it("toThrow", () => {
  // expect(() => new Error("error")).toThrow()
  // Error: Received function did not throw
  expect(() => {
    throw new Error("error")
  }).toThrow()
})
