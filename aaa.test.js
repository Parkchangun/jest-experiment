import { solution } from "./clock"

test("segment to clock", () => {
  // 03:55
  const input1 = [
    [1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 1],
  ]

  expect(solution(input1)).toEqual([0, 3, 5, 5])
})
