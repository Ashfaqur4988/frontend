// A mock function to mimic making an async request for data
export function fetchAllPosts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/posts");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchPostById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/posts?id=" + id);
    const data = await response.json();
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
    const data = await response.json();
    resolve({ data });
  });
}

//delete post
export function deletePost(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/posts/" + itemId, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data: { id: itemId } });
  });
}
