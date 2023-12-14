// new likes
export function addLike(likeData) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("http://localhost:8080/likes", {
      method: "POST",
      body: JSON.stringify(likeData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

// new likes
export function deleteLike(indexToBeDeleted) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      `http://localhost:8080/likes/${indexToBeDeleted}`,
      {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}
