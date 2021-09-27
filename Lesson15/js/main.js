const url = "https://jsonplaceholder.typicode.com/users";

const createContent = (result) => {
    const users = document.querySelector(".users");
    result.forEach((item) => {
        const div = document.createElement("div");
        const name = document.createElement("h3");
        const username = document.createElement("h4");

        const email = document.createElement("p");

        name.innerHTML = item.name;
        username.innerHTML = item.username;
        email.innerHTML = item.email;

        div.appendChild(name);
        div.appendChild(username);
        div.appendChild(email);
        users.appendChild(div);
    });
};

fetch(url)
    .then((data) => data.json())
    .then((result) => createContent(result))
    .catch((error) => console.log(error));
