const loadUsers = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((data) => displayUsers(data.results));
};

const displayUsers = (users) => {
  console.log(users);
  const userContainer = document.getElementById("lover-container");
  for (let user of users) {
    const div = document.createElement("div");
    div.classList.add("lover");
    div.innerHTML = `
    <h3>Lovers Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
    <p> <span class="email">email: </span> ${user.email}</p>
    <p> <span class="email">Gender: </span> ${user.gender}</p>
    <p><span class = "email">Location:</span>: city:  ${user.location.city} Country: ${user.location.country}</p>
    `;
    userContainer.appendChild(div);
  }
};
loadUsers();
