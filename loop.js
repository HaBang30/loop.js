function convert() {
    let amount = document.getElementById ('amount').value;
    let fromcurrency = document.getElementById('fromcurrency').value;
    let tocurrency = document.getElementById('tocurrency').value;
        result = amount * tocurrency / fromcurrency;
        document.getElementById("result").innerHTML = result
    
}