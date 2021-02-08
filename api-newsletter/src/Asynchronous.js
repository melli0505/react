function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 1000);
}

// callback 함수 중첩(지양)
increase(0, (result) => {
  console.log('작업 시작');
  console.log(result);
  increase(result, (result) => {
    console.log(result);
    increase(result, (result) => {
      console.log(result);
      increase(result, (result) => {
        console.log(result);
        console.log('작업 완료');
      });
    });
  });
});

// promise로 call back함수 중첩 방지
function increase2(number) {
  const promise = new Promise((resolve, reject) => {
    // 성공 = resolve, 실패 = reject
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        const e = new Error('NumberTooBig');
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

increase2(0)
  // promise에서 resolve된 값은 .then을 통해 받아온다
  .then((number) => {
    console.log(number);
    return increase2(number); // promise를 리턴하면 실행
  })
  .then((number) => {
    console.log(number);
    return increase2(number);
  })
  .then((number) => {
    console.log(number);
    return increase2(number);
  })
  .then((number) => {
    console.log(number);
    return increase2(number);
  })
  .then((number) => {
    console.log(number);
    return increase2(number);
  })
  .catch((e) => {
    // 도중에 에러가 발생하면 catch
    console.log(e);
  });

// async / await
function increase3(number) {
  const promise = new Promise((resolve, reject) => {
    // 성공 = resolve, 실패 = reject
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        const e = new Error('NumberTooBig');
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

async function runTasks() {
  try {
    let result = await increase3(0);
    console.log(result);
    result = await increase3(result);
    console.log(result);
    result = await increase3(result);
    console.log(result);
    result = await increase3(result);
    console.log(result);
    result = await increase3(result);
    console.log(result);
    result = await increase3(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
