const inputBox = document.querySelector("#inputBox");
const taskSheet = document.querySelector(".taskSheet");
const modal = document.querySelector(".editModal");
const textArea = document.querySelector("#editText");

taskSheet.addEventListener("click", (e) =>{
    if (e.target.tagName === "P"){
        e.target.classList.toggle("checked");

    } else if (e.target.classList[1] === "fa-trash"){
        e.target.parentElement.remove();
        
    } else if (e.target.classList[1] === "fa-pen-to-square"){
        modal.classList.add("active");
        e.target.previousElementSibling.setAttribute("id", "currentElem");
        textArea.value = e.target.previousElementSibling.innerHTML;

    }

}, false);

modal.addEventListener("click", (e) => {
    if (e.target.classList[1] === "fa-xmark" ){
        e.target.parentElement.parentElement.classList.remove("active");
        const currentElem = document.querySelector("#currentElem");
        currentElem.removeAttribute("id","currentElem");
        
    } else if (e.target.classList[1] === "fa-check"){
        e.target.parentElement.parentElement.classList.remove("active");
        const currentElem = document.querySelector("#currentElem");
        currentElem.innerHTML = e.target.previousElementSibling.value;
        currentElem.removeAttribute("id","currentElem");
        console.log(currentElem);
    } else if (e.target.classList[0] === "editModal"){
        e.target.classList.remove("active");
    }
})

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

