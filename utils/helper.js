export function saveBugs(data) {
  localStorage.setItem("bugs", JSON.stringify(data));
}
