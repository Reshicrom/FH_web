// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        var taskName = this.getAttribute('data-name'); // retrieve the name of the task from the data attribute
        div.style.display = "none";
        localStorage.removeItem('ToDo#' + taskName); // remove the corresponding entry from the localStorage
    }

}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";


    makeClose(li, inputValue);
    storeElement(inputValue);
}

function makeClose(li, inputValue){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.setAttribute('data-name', inputValue); // add data attribute with the name of the task
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            var taskNumber = div.id.split('-')[1];
            div.style.display = "none";
            localStorage.removeItem('ToDo#' + taskNumber);
            console.log('ToDo#' + taskNumber);
        }
    }
}

function storeElement(name){
    var toDoNumber = 1;
    if(localStorage.getItem("ToDoNumber") != null){
        toDoNumber = parseInt(localStorage.getItem("ToDoNumber")) + 1;
    }
    localStorage.setItem("ToDoNumber", toDoNumber);
    localStorage.setItem('ToDo#'+toDoNumber, name);
    console.log('ToDo#' + toDoNumber);
}
function loadElements(){
    var count = 1;
    var maxNumber = parseInt(localStorage.getItem("ToDoNumber"));
    var t = null;
    var li = null;
    var storedItem;
    for(let i = 0; i<maxNumber; i++){
        li = document.createElement("li");
        storedItem = localStorage.getItem('ToDo#'+count);
        t = document.createTextNode(storedItem);
        li.appendChild(t);
        li.setAttribute('id',  storedItem.id);
        document.getElementById("myUL").appendChild(li);
        makeClose(li, count);
        count++;
    }

}