let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "modurator":
    console.log("Modurator User");
    break;
  default:
    console.log("Unknown User");
}

if (role === "guest") console.log("Guest User");
else if (role === "modurator") console.log("Modurator User");
else console.log("Unknown User");
