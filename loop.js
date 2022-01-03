function setInput(number) {
    let input = document.getElementById('input').value += number;
}
function calculator() {
    let input = document.getElementById ('input').value;
        result = eval(input);
        document.getElementById('input').value = result;
    
}
function clearInput() {
    let input = document.getElementById('input').value;
    document.getElementById('input').value = "";
    
}