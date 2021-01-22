const elements = {
    submit: document.getElementsByClassName('submit'),
    clear: document.getElementsByClassName('clear'),
};

const messages = {
    deleteConfirm: 'chcete túto položku odstranit',
};

function addText(){
    let myList = document.querySelector('#list'),
        newList = document.createElement('li'),
        newInputs = document.createElement('input'),
        ol = document.querySelectorAll("li input"),
        inputValue = document.getElementById('Input').value;

    newList.textContent = inputValue;
    myList.appendChild(newList);

    newInputs.type = "checkbox";
    newInputs.className = 'box';
    newList.appendChild(newInputs);

    ol.forEach((newInputs, newList) => newInputs.id = "item-" + newList);

    addEventListener('click', inputRemove => {
        if(inputRemove.target !== newList && inputRemove.target !== newInputs) return;
        if(confirm(messages.deleteConfirm)) myList.removeChild(newList)
    });

    if(inputValue !== ' ') document.getElementById('Input').value = ' ';
}

function clearAllText(){
    let clearAllList = document.getElementById('list');
    while(clearAllList.firstChild !== null) clearAllList.removeChild(clearAllList.firstChild)
}


elements.submit[0].addEventListener('click', addText);
elements.clear[0].addEventListener('click', clearAllText);