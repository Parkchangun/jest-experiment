const jestCallback = (id, cb) => {
  setTimeout(() => {
    console.log("wait 1 sec.")
    const user = {
      id,
    }
    cb(user)
  }, 1000)
}

it("callback", (done) => {
  jestCallback(1, (user) => {
    expect(user).toEqual({ id: 1 })
    done() // callback 호출 확인하기 위한 jest 함수 인자로 받아 실행
  })
})

const jestPromise = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("wait 1 sec.")
      const user = {
        id,
      }
      resolve(user)
    }, 1000)
  })
}

it("promise", async () => {
  return jestPromise(1).then((user) => {
    expect(user).toEqual({ id: 1 })
  })
})

it("async await", async () => {
  const user = await jestPromise(1)
  expect(user).toEqual({ id: 1 })
})
