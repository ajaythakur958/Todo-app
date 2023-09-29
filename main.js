const inputBox = document.querySelector("#inputBox");
const taskSheet = document.querySelector(".taskSheet");

taskSheet.addEventListener("click", (e) =>{
    console.log(e.target.tagName);
    console.log(e.target.id);
    if (e.target.tagName === "P"){
        e.target.classList.toggle("checked");

    } else if (e.target.id === "del"){
        e.target.parentElement.remove();
        
    } else if (e.target.id === "update"){
        console.log("update");

    }

}, false);

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something");
    } else {
        let task = document.createElement("div");
        task.classList.add("task");
        let text = document.createElement("p");
        text.innerHTML = inputBox.value;
        task.appendChild(text);
        let update = document.createElement("i")
        update.classList.add("fa-solid");
        update.classList.add("fa-pen-to-square");
        update.setAttribute("id", "update");
        task.appendChild(update);
        let del = document.createElement("i");
        del.classList.add("fa-solid");
        del.classList.add("fa-trash");
        del.setAttribute("id", "del");
        task.appendChild(del);
        taskSheet.appendChild(task);
        inputBox.value = "";
    }
}
