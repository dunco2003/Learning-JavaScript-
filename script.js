// Change text content dynamically
function changeText() {
    let title = document.getElementById("title");
    let description = document.getElementById("description");

    title.textContent = "You Just Changed the Title!";
    description.textContent = "Great! Now try the other buttons.";
    description.style.color = "#ffeb3b";
}

// Toggle box visibility with smooth animation
function toggleBox() {
    let box = document.getElementById("box");

    if (box.style.opacity === "0") {
        box.style.opacity = "1";
        box.style.transform = "scale(1)";
    } else {
        box.style.opacity = "0";
        box.style.transform = "scale(0.5)";
    }
}

// Add a new item dynamically to the list
function addItem() {
    let itemList = document.getElementById("itemList");
    let newItem = document.createElement("li");
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
}
