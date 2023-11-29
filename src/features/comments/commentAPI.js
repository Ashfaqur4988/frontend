// A mock function to mimic making an async request for data
export function fetchAllComments() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/comments");
    const data = response.json();
    resolve({ data });
  });
}

// A mock function to mimic making an async request for data
export function fetchCommentsByPostId(id) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/posts/${id}/comments`);
    const data = response.json();
    resolve({ data });
  });
}
