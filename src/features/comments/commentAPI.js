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

export function createNewComment(comment) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/comments", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function deleteComment(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/comments/" + id, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data: { data: id } });
  });
}

export function updateComment(updatedComment) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/comments/" + updatedComment.id,
      {
        method: "PATCH",
        body: JSON.stringify(updatedComment),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}
