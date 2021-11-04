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