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

//update post
export function updatePost(newUpdatedPost) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/posts/" + newUpdatedPost.id,
      {
        method: "PATCH",
        body: JSON.stringify(newUpdatedPost),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

//get post by user id
export function fetchPostsByUserId(userId) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`http://localhost:8080/users/${userId}/posts`);
    const data = await response.json();
    resolve({ data });
  });
}
