
function saveDynamicDataToFile() {

    var userInput = document.getElementById("myInput").value;

    var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "dynamic.txt");
}