const pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 1 second")
  }, 1000)
})

pro.then(res => console.log(res)).catch(err => console.log(err))

function promiseTestFunc(isSuccess) {
  return new Promise((resolve, reject) => {
    if(isSuccess) {
      resolve("Promise resolved successfully")
    } else {
      reject("Promise rejected due to some error")
    }
  })
}

promiseTestFunc(true).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

promiseTestFunc(false).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

// wrong url to see error handling
function getPosts() {
  const response = fetch('https://hh.typicode.com/poss', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({
    //   // title: 'New Post',
    //   // body: 'This is a new post',
    //   // userId: "hjgyugu",
    // }),
  })
  return response
}

getPosts().then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))

function getPostsCorrect() {
  const response = fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return response
}

async function getPost(postId) {
  try {
    console.log("Fetching post with userId > 5 with async await and chaining");
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.log("Fetch Error:", error);
  }
}

getPostsCorrect()
.then(res => res.json())
.then(data => data.find(res => res.userId > 5 ))
.then(data => getPost(data.userId))
.then(data => console.log(data))
.catch(err => console.log(err))


// full response

// Promise resolved successfully
// Promise rejected due to some error
// TypeError: fetch failed
//     at node:internal/deps/undici/undici:13510:13
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
//   [cause]: Error: getaddrinfo ENOTFOUND hh.typicode.com
//       at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:120:26) {
//     errno: -3008,
//     code: 'ENOTFOUND',
//     syscall: 'getaddrinfo',
//     hostname: 'hh.typicode.com'
//   }
// }
// Fetching post with userId > 5 with async await and chaining
// {
//   userId: 1,
//   id: 6,
//   title: 'dolorem eum magni eos aperiam quia',
//   body: 'ut aspernatur corporis harum nihil quis provident sequi\n' +
//     'mollitia nobis aliquid molestiae\n' +
//     'perspiciatis et ea nemo ab reprehenderit accusantium quas\n' +
//     'voluptate dolores velit et doloremque molestiae'
// }
// Promise resolved after 1 second