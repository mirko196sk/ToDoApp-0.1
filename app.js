//consts with html tag
const submit = document.getElementsByClassName('submit');
const clear = document.getElementsByClassName('clear');

//all listeners for function 
submit[0].addEventListener('click', addText);
clear[0].addEventListener('click', clearAllText);

//the function adds text and a list of created elements > li> input
function addText(){
    //creating new element li for element list
    let myList = document.querySelector('#list');
    let newList = document.createElement('li');
    const input = document.getElementById('Input').value;
    newList.textContent = input;
    myList.appendChild(newList);

    //creating new element input type="chackbox" for element li
    let newInputs = document.createElement('input');
    newInputs.type = "checkbox";
    newInputs.className = 'box';
    newList.appendChild(newInputs);

    /*******************************************************
    *let ul = document.querySelectorAll("ul li")          *   
    *ul.forEach((row, index) => row.id = "item-" + index) *
    *******************************************************/
    //each input gets a unique ID
    let ol = document.querySelectorAll("li input")
    ol.forEach((newInputs, newList) => newInputs.id = "item-" + newList)    
    
    //if you select some item in the list and confirm, it will be remove
    addEventListener('click', inputRemove => {
        if(inputRemove.target !== newList && inputRemove.target !== newInputs){
            return
        }

        let question = confirm('chcete túto položku odstranit?')
    
        if(question === true){
            myList.removeChild(newList)
        } else if(question === false){
            //do nothing
        }

    });
    
    
    // after clicking on Send, the message is added to the LI field and deleted on the input
    if(input !== ' '){
        const input = document.getElementById('Input').value = ' ';
    }
}


//for function click in CL clearing all items in list
function clearAllText(){
    //after clicking on the CL loop, it will delete all items
    let clearAllList = document.getElementById('list');

    while(clearAllList.firstChild !== ' '){
        clearAllList.removeChild(clearAllList.firstChild)
    }
}
