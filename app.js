tab = []
const addButton = document.querySelector('.addButton');
const input = document.querySelector('.input');
const container = document.querySelector('.container');
let madiv = document.createElement('div');
container.appendChild(madiv);
let tout = document.createElement('button');
tout.innerHTML = 'TOUT';
tout.style.margin = '5px'
tout.style.backgroundColor = 'lime';
tout.style.height = '30px'
tout.style.width = '70px'
tout.style.border = 'solid 2px lime'
let fini = document.createElement('button');
fini.innerHTML = 'TERMINE';
fini.style.margin = '5px'
fini.style.backgroundColor = 'lime';
fini.style.height = '30px'
fini.style.width = '70px'
fini.style.border = 'solid 2px lime'
let AFaire = document.createElement('button');
AFaire.innerHTML = 'A FAIRE';
AFaire.style.margin = '5px'
AFaire.style.backgroundColor = 'lime';
AFaire.style.height = '30px'
AFaire.style.width = '70px'
AFaire.style.border = 'solid 2px lime'
madiv.append(tout, fini, AFaire);
AFaire.addEventListener('click', function(){
    for(i = 0; i < tab.length; i++){
        if(tab[i].style = 'blue'){
            tab[i].style.display = 'none';
        }else{}
    }
})


//-------------------
class item {
    constructor(itemName){
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";
        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        tab.push(itemBox);
        
        let editButton = document.createElement('button');
        editButton.classList.add('fad','fa-pencil');
        editButton.classList.add('editButton');
        let removeButton = document.createElement('button');
        removeButton.classList.add('fad','fa-trash');
        removeButton.classList.add('removeButton');
        let removeButton2 = document.createElement('button');
        removeButton2.classList.add('fa','fa-check-circle', 'removeButton2');
        removeButton2.classList.add('removeButton2');
        container.appendChild(itemBox);
        itemBox.append(input, editButton, removeButton, removeButton2)
        editButton.addEventListener('click', () => this.edit(input));
        removeButton.addEventListener('click', () => this.remove(itemBox));
        removeButton2.addEventListener('click', function(){
            itemBox.style.backgroundColor = 'blue';
        })
    }
    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item){
        container.removeChild(item);
    }
}

function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}
addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
})