const form = document.getElementById("guest-form");
const input = document.getElementById("guest-name");
const categoryInput = document.getElementById("guest-category");
const list = document.getElementById("guest-list");
let guests = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = input.value.trim();
  const category = categoryInput.value;
  const time = new Date().toLocaleString();

  if (!name) return;
  if (guests.length >= 10) {
    alert("Guest limit is 10!");
    return;
  }

  const guest = {
    id: Date.now(),
    name,
    category,
    attending: true,
    timeAdded: time
  };
  guests.push(guest);

  renderGuest(guest);

  input.value = "";
});

function renderGuest(guest) {
  const li = document.createElement("li");
  li.dataset.id = guest.id;

  const span = document.createElement("span");
  span.textContent = `${guest.name} (${guest.attending ? "Attending" : "Not Attending"})`;

  const tag = document.createElement("span");
  tag.textContent = guest.category;
  tag.className = `tag ${guest.category}`;

  const time = document.createElement("small");
  time.textContent = ` • Added: ${guest.timeAdded}`;

  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle";
  toggleBtn.className = "toggle";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove";

  li.appendChild(span);
  li.appendChild(tag);
  li.appendChild(time);
  li.appendChild(toggleBtn);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);
  list.appendChild(li);
}

list.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  const id = Number(li.dataset.id);
  const guest = guests.find(g => g.id === id);

  if (e.target.classList.contains("remove")) {
    guests = guests.filter(g => g.id !== id);
    li.remove();
  }

  if (e.target.classList.contains("toggle")) {
    guest.attending = !guest.attending;
    const span = li.querySelector("span");
    span.textContent = `${guest.name} (${guest.attending ? "Attending" : "Not Attending"})`;
  }

  if (e.target.classList.contains("edit")) {
    const newName = prompt("Edit guest name:", guest.name);
    if (newName && newName.trim() !== "") {
      guest.name = newName.trim();
      const span = li.querySelector("span");
      span.textContent = `${guest.name} (${guest.attending ? "Attending" : "Not Attending"})`;
    }
  }
});
