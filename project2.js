let tasks = [];
let count = 0;
let btn = document.querySelector('button');
let upIcon = document.querySelector('i.up');
let input = document.querySelector('input');
let span = document.querySelector('span.validation-span');
let downIcon = document.querySelector('i.down');
let x = document.querySelector('.x');
let inputPart = document.querySelector('.card-add-input');
let listPart = document.querySelector('.card-list');
let ol = document.querySelector('ol');

const deleteElement = (id) => {
    tasks.splice(id, 1);
    renderList();
}

const clearInputValue = () => {
    input.value = '';
}

const renderList = () => {

    ol.innerHTML = '';

    tasks.forEach((task, index) => {
        ol.innerHTML += `
            <li>
                <span class='task-inner'>${index+1}.${ task}</span>
             
              <div class='icon'>  <i class="fa-regular fa-circle-xmark delete-btn" onclick="deleteElement(${index})"></i></div>
            </li>`;
    });
}

const filterAZ = () => {
    tasks.sort();
    renderList();
}

const inputListChanger = (e) => {
    
    e.preventDefault();
    if ( input.value.trim().length  ) {
        tasks.push(input.value.trim());
        renderList();
        input.value = '';
    } else {       
        input.value = '';
     
        span.style.display = 'block';
    }

    inputPart.classList.toggle('d-none');
    listPart.classList.remove('d-none');
}

const filterZA = () => {
    tasks.sort((a, b) => b.localeCompare(a));
    renderList();
}

btn.addEventListener('click', inputListChanger);
upIcon.addEventListener('click', filterZA);
downIcon.addEventListener('click', filterAZ);
x.addEventListener('click', clearInputValue);