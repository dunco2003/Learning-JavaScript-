// Change text dynamically
function changeText() {
    let title = document.getElementById("title");
    let description = document.getElementById("description");

    title.textContent = "You Just Changed the Title!";
    description.textContent = "Awesome! Now try the other buttons.";
    description.style.color = "#ffeb3b";
}

// Toggle visibility of the box
function toggleBox() {
    let box = document.getElementById("box");
    box.classList.toggle("hidden");
}

// Add a new item dynamically to the list
function addItem() {
    let itemList = document.getElementById("itemList");
    let newItem = document.createElement("li");
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
}

// Change background color dynamically
function changeBackground() {
    let colors = ["#ff6f61", "#6a0572", "#16a085", "#34495e", "#f39c12"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

