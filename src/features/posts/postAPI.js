// A mock function to mimic making an async request for data
export function fetchAllPosts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/posts");
    const data = response.json();
    resolve({ data });
  });
}

export function fetchPostById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/posts?id=" + id);
    const data = response.json();
    resolve({ data });
  });
}

export function createNewStatus(post) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: { "content-type": "application/json" },
    });
    const data = response.json();
    resolve({ data });
  });
}
