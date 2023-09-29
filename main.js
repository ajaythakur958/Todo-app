const inputBox = document.querySelector("#inputBox");
const taskSheet = document.querySelector(".taskSheet");

taskSheet.addEventListener("click", (e) =>{
    console.log(e.target.tagName);
    console.log(e.target.classList);
    if (e.target.tagName === "P"){
        e.target.classList.toggle("checked");

    } else if (e.target.classList[1] === "fa-trash"){
        e.target.parentElement.remove();
        
    } else if (e.target.classList === "update"){
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
        task.appendChild(update);
        let del = document.createElement("i");
        del.classList.add("fa-solid");
        del.classList.add("fa-trash");
        task.appendChild(del);
        taskSheet.appendChild(task);
        inputBox.value = "";
    }
}

function saveData(){
    localStorage.setItem("data", taskSheet.innerHTML);
}

function showTask(){
    localStorage.getItem("data");
    console.log(data);
}

showTask();

