let index = 1;
let tbody = document.getElementsByTagName('tbody')
let canCreate = true;

function create(){

    if(canCreate){
        tbody[0].innerHTML += `
    <tr>
        <td>${index}</td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td>
            <button id="save" onclick='save(this)'>save</button>
            <button id="cancel" onclick="cancel(this)">cancel</button>
        </td>
    </tr>
    `
    }
    canCreate = false
}

function save(save){
    let inputs = document.querySelectorAll('input')
    inputs.forEach(function(a){
        a.parentElement.innerHTML = a.value;
    })
    canCreate = !canCreate
    save.innerText = 'edit'
    //edit function ekle
    save.setAttribute('onclick','edit(this)')
    //cancel buttonun sec ve remove et
    let cancelButton = save.nextElementSibling
    cancelButton.innerText = 'remove'
    cancelButton.setAttribute('onclick','remove(this)')
}

function cancel(btn){
    btn.closest('tr').remove()
    canCreate = !canCreate
}

function remove(cancel){
    cancel.closest('tr').remove()
}


function edit(edt){
    let tr = edt.closest('tr');
    [...tr.children].forEach(function (key,value){
        // value => index
        // console.log(key,value)
        if(value !=0 && value !=4){
            key.innerHTML = `<input type ="text" value="${key.innerHTML}">`
            
        }
    })
    // edite basdiqdan sonra save functionu otururem yeniden
    edt.innerText = 'save'
    edt.setAttribute('onclick','save(this)')
    canCreate = !canCreate

    // remove da cancel'e qayidsin gerek
    let cancelButton = edt.nextElementSibling
    cancelButton.innerText = 'cancel'
    cancelButton.setAttribute('onclick','cancel(this)')
}