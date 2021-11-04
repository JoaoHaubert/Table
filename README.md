# Table
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table 4</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Table 4</h1>
    </header>
    <section>
        <div>
            Type a number:
            <input type="number" name="txtn" id="txtn">
            <input type="button" value="Calculate" onclick="verify()">
            <p></p>
        </div>
        <div>
            <select name="table" id="table" size="40"></select>
        </div>
    </section>
    <footer>
        <p>&copy; JoaoHaubert</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>

/*-----CSS-----*/

body {
    background: rgb(8, 102, 90);
    font: normal 16pt arial;
   
}

header {
    color:white;
    text-align: center;
}

section {
    background: white;
    border-radius: 15px;
    padding:20px;
    width: 500px;
    margin:auto;
    box-shadow: 10px 10px 15px rgba(10, 10, 10, 0.61);
    



}

footer {
    color:white;
    text-align: center;
    font-style: italic;

}

/*-----JAVASCRIPT-----*/

function verify(){
    
    let num = document.getElementById('txtn')
    
    let tab = document.getElementById('table')
    
    if(num.value.length == 0){
        window.alert('Type a valid number, please')
    } else {
        let n = Number(num.value)
        
        tab.innerHTML = ''
        
        for(let c = 1; c <= 40; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}
