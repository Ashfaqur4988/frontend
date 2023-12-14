// new likes
export function savePosts(likeData) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch("http://localhost:8080/saved", {
      method: "POST",
      body: JSON.stringify(likeData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

// new likes
export function unSavePosts(indexToBeDeleted) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      `http://localhost:8080/saved/${indexToBeDeleted}`,
      {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}
