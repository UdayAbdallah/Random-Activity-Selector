let doing = [
  "Go for a run",
  "Read a book",
  "Watch a documentary",
  "Cook a new recipe",
  "Try a new hobby",
  "Visit a museum",
  "Learn a new skill",
];

function addName() {
  const newName = document.getElementById("addName").value.trim();
  if (newName != "") doing.push(newName);
  document.getElementById("addName").value = "";
}

function selectName() {
  const randomIndex = Math.floor(Math.random() * doing.length);
  const selectedName = doing[randomIndex];
  document.getElementById("result").innerHTML = selectedName;
}
