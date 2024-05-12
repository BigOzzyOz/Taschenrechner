function appendOperations(operation) {
    document.getElementById('result').innerHTML += operation;
}
function deleteScreen() {
    document.getElementById('result').innerHTML = "";
}
function calc() {
    let x = document.getElementById('result');
    let math = eval(x.innerHTML);

    x.innerHTML = math; 
}
function deleteLast() {
    let x = document.getElementById('result');

    if (x.innerHTML.endsWith(' ')) {
        x.innerHTML = x.innerHTML.slice(0, -3);
    } else {
        x.innerHTML = x.innerHTML.slice(0, -1);
    }
}