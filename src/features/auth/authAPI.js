// A mock function to mimic making an async request for data
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

//login user api
export function login(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch("http://localhost:8080/users?email" + email);
    const data = await response.json();
    console.log({ data });

    if (data.length) {
      if (password === data[0].password) {
        resolve({ data: data[0] });
      } else {
        reject({ message: "wrong credentials" });
      }
    } else {
      reject({ message: "no user found" });
    }
  });
}

export function fetchAllUsers() {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`http://localhost:8080/users`);
    const data = response.json();
    resolve({ data });
  });
}

export function updateUser(personalDetails) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      `http://localhost:8080/users/${personalDetails.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(personalDetails),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}
