const text = document.querySelector("#input_box");
const list = document.querySelector('#list');
const addTask = () => {
    if (text.value === "") {
        alert("Please Fill text");
    } else {
        let li = document.createElement("li");
        li.innerHTML = text.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    text.value = "";
    storeData();
}

list.addEventListener("click", (e) => {
    if (e.target.localName === 'li') {
        e.target.classList.toggle("checked");
        storeData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        storeData();
    }
}, false);

const storeData = () => {
    localStorage.setItem("data", list.innerHTML);
}
const showData = () => {
    list.innerHTML = localStorage.getItem("data");
}
showData();