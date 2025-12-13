// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// It allows handling asynchronous operations more elegantly than traditional callback functions.

// Promises have three states:
// - Pending: Initial state, neither fulfilled nor rejected.
// - Fulfilled: The operation completed successfully, and the promise has a resulting value.
// - Rejected: The operation failed, and the promise has a reason for the failure.

// promises are resolved the problem of "callback hell" by allowing chaining of asynchronous operations.

let Issuccess = false
const promise = new Promise((resolve, reject) => {
  if (Issuccess) {
    resolve("success ho gaya")
  } else {
    reject("Reject ho gya")
  }
})

promise.then(res => {
  console.log(res)
}).catch(err => console.log(err))

const promiseOne = new Promise((resolve, reject) => {
  // do an async operation
  setTimeout(() => {
    console.log("Async operation complete after 2 seconds")
    resolve("Hum resove ho gaye after 2 seconds")
  }, 2000)
})

promiseOne.then(res => {
  console.log(res)
}).catch(err => console.log(err))

new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2")
    resolve("Task 2 complete")
  }, 3000)
}).then(res =>
  console.log(res)).catch(err => console.log(err))

// Promise Chaining
// Promises can be chained to perform sequential asynchronous operations.

const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching user data...")
      resolve({ id: 1, name: "Arun" })
    }, 1000)
  })
}

const fetchUserPosts = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching posts for user ${userId}...`)
      resolve([{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }])
    }, 1000)
  })
}

fetchUserData()
  .then(user => {
    console.log("User data:", user)
    return fetchUserPosts(user.id)
  })
  .then(posts => {
    console.log("User posts:", posts)
  })
  .catch(error => {
    console.log("Error:", error)
  })

// Async/Await
// Async/await is syntactic sugar over promises, making asynchronous code look synchronous.

async function getUserData() {
  try {
    const user = await fetchUserData()
    console.log("Async/Await - User data:", user)
    const posts = await fetchUserPosts(user.id)
    console.log("Async/Await - User posts:", posts)
  } catch (error) {
    console.log("Async/Await - Error:", error)
  }
}

getUserData()

// Fetch API
// The Fetch API provides an interface for fetching resources (including across the network).

// Basic fetch example
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })
  .then(data => {
    console.log("Fetch API - Post data:", data)
  })
  .catch(error => {
    console.log("Fetch API - Error:", error)
  })

// Fetch with async/await
async function fetchPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    console.log("Fetch API with Async/Await - Post data:", data)
  } catch (error) {
    console.log("Fetch API with Async/Await - Error:", error)
  }
}

fetchPost()

// Fetch with POST request
async function createPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'New Post',
        body: 'This is a new post',
        userId: 1,
      }),
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    console.log("Fetch API POST - Created post:", data)
  } catch (error) {
    console.log("Fetch API POST - Error:", error)
  }
}

createPost()

// Promise.all - Running multiple promises in parallel
const promiseA = new Promise((resolve) => setTimeout(() => resolve('A'), 1000))
const promiseB = new Promise((resolve) => setTimeout(() => resolve('B'), 2000))
const promiseC = new Promise((resolve) => setTimeout(() => resolve('C'), 500))

Promise.all([promiseA, promiseB, promiseC])
  .then(values => {
    console.log("Promise.all results:", values) // ['A', 'B', 'C']
  })
  .catch(error => {
    console.log("Promise.all error:", error)
  })

// Promise.race - Returns the first promise that resolves or rejects
Promise.race([promiseA, promiseB, promiseC])
  .then(value => {
    console.log("Promise.race result:", value) // 'C' (fastest)
  })
  .catch(error => {
    console.log("Promise.race error:", error)
  })
