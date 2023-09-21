//promises
//there are three states
//fulfilled
//pending
//rejected

// fetch('www.google.com').then.catch.finally

//creating promise

const promiseOne = new Promise(function (resolve, reject) {
  //do an async call
  //DB calls,cryptography,network
  setTimeout(function () {
    console.log("aync task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ user: "izhaar" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;

    if (!error) {
      resolve({ username: "izhaar", pass: "123" });
    } else {
      console.log("ERROR");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .finally("Either resolved or rejected");

//async await doesnt handle catch

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;

    if (!error) {
      resolve({ username: "java", pass: "123" });
    } else {
      console.log("ERROR js went wrong");
    }
  }, 1000);
});

async function consumePromise() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise();

//consumeing api
//way 1
// async function getAllUsers(){
//     try {
//         const response= await fetch('')
//         const data =await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }

// getAllUsers()

//way 2

fetch("")
  .then((response) => console.log(response))
  .then((data) => console.log(data))
  .catch("error", error);
