// A mock function to mimic making an async request for data
export function fetchAllPosts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/posts");
    const data = response.json();
    resolve({ data });
  });
}
