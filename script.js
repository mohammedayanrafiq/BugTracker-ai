let bugs = [];

function addBug() {
  let text = document.getElementById("bugInput").value;
  let priority = document.getElementById("priority").value;

  if (!text) return;

  bugs.push({ text, priority, status: "Open" });
  renderBugs();
}

function renderBugs() {
  let list = document.getElementById("bugList");
  list.innerHTML = "";

  bugs.forEach((b, i) => {
    let li = document.createElement("li");
    li.textContent = `${b.text} [${b.priority}] - ${b.status}`;
    li.onclick = () => toggleStatus(i);
    list.appendChild(li);
  });
}

function toggleStatus(index) {
  bugs[index].status =
    bugs[index].status === "Open" ? "Fixed" : "Open";
  renderBugs();
}
