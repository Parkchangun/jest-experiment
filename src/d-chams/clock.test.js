import { solution } from "./clock"

test("segment to clock", () => {
  // 00:00
  const input1 = [
    [1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0],
  ]

  // 13:52
  const input2 = [
    [0, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 1],
  ]

  expect(solution(input1)).toEqual([0, 0, 0, 0])

  expect(solution(input2)).toEqual([1, 3, 5, 2])
})
