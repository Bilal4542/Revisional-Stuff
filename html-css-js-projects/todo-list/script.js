let inputField = document.querySelector('input')
let submitBtn = document.querySelector('.submit')
let clearAllBtn = document.querySelector('.clearall')
let listItems = document.querySelector('ul')


const handleSubmit = () => {

    let task = inputField.value;

    let newItem = document.createElement('li')
    newItem.innerHTML = ` 
                    <p>${task}</p>
                    <div>
                        <button class='check'><i class="fa-solid fa-check" style="color: green;"></i></button>
                        <button class='delete'><i class="fa-solid fa-trash" style="color: red;"></i></button>
                    </div> `

     if (inputField.value.trim() === "") {
      alert("Please enter something before submitting!");
      return; 
    }

    inputField.value = '';

    let checkTask = newItem.querySelector('.check')
    checkTask.addEventListener('click', ()=>{newItem.querySelector('p').style.textDecoration = 'line-through'}) 
    
    
    let checkDelete = newItem.querySelector('.delete')
    checkDelete.addEventListener('click', ()=> listItems.removeChild(newItem))         

    

    listItems.appendChild(newItem)
    
}
const handleClear = () => {
    listItems.innerHTML = '';
}



submitBtn.addEventListener('click', handleSubmit);
clearAllBtn.addEventListener('click', handleClear);