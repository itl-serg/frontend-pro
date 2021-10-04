const url = "https://jsonplaceholder.typicode.com/users";

const createContent = (result) => {
    const users = document.querySelector("#users");

    result.forEach((item) => {
        const div = document.createElement("div");
        const id = document.createElement("h2");
        const name = document.createElement("h3");
        const username = document.createElement("h4");
        const email = document.createElement("p");
        const phone = document.createElement("p");

        id.innerHTML = item.id;
        name.innerHTML = item.name;
        username.innerHTML = item.username;
        email.innerHTML = item.email;
        phone.innerHTML = item.phone;

        div.appendChild(id);
        div.appendChild(name);
        div.appendChild(username);
        div.appendChild(email);
        div.appendChild(phone);

        users.appendChild(div);

        id.className = "id-users";
        name.className = "name";
        username.className = "username";
        email.className = "additional-data";
        phone.className = "additional-data";
    });
};

fetch(url)
    .then((data) => data.json())
    .then((result) => createContent(result))
    .catch((error) => console.log(error));
