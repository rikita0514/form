//const btn= document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('click');
//     console.log(e.target);
//     document.querySelector('#my-form').style.background='#ccc';
//     document.querySelector('body').classList.add('bg-dark');
// });

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     console.log('click');
//     console.log(e.target);
//     document.querySelector('#my-form').style.background='#ccc';
//     document.querySelector('body').classList.add('bg-dark');
// });
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     console.log('click');
//     console.log(e.target);
//     document.querySelector('#my-form').style.background='#ccc';
//     document.querySelector('body').classList.add('bg-dark');
// });

const myform= document.querySelector('#my-form');
const nameInput= document.querySelector('#name');
const emailInput= document.querySelector('#email');
const msg= document.querySelector('.msg');
const userList= document.querySelector('#users');

myform.addEventListener('submit', onsubmit);
userList.addEventListener('click', removeItem);

function onsubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value===''){
        msg.classList.add('Error');
        msg.innerHTML='Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
        
    }else{
        const li= document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        let myobj = {
            userName: nameInput.value,
            userEmail: emailInput.value
        }
        
        let existingData = localStorage.getItem('userDetail');
        let dataArray = existingData ? JSON.parse(existingData) : [];

        // Add new data entry to the array
        dataArray.push(myobj);

        // Store the updated array back in local storage
        localStorage.setItem(nameInput.value, JSON.stringify(dataArray));

        // creating a delete button
        var deleteButton= document.createElement('button');
        deleteButton.className = 'btn-default btn-outline-secondary btn-sm float-right';
        deleteButton.appendChild(document.createTextNode('Delete'));
        deleteButton.onclick = () => {
            localStorage.removeItem(myobj.userName);
            userList.removeChild(li);
        }
        li.appendChild(deleteButton);

        userList.appendChild(li);
        userList.appendChild(document.createElement('br'));

        

        nameInput.value='';
        emailInput.value='';
    }
};
