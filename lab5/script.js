// task1
let  infoWindow; 

const  fullnameInput = document.getElementById('fullname-input');
const  emailInput = document.getElementById('email-input');
const  birthdateInput = document.getElementById('birthdate-input');
const  addressInput = document.getElementById('address-input');
const  telegramInput = document.getElementById('telegram-input');

const defaultBorderStyle = "1px solid grey";
const invalidBorderStyle = "2px solid red";

const sumbitButton = document.getElementById("submit-button");

sumbitButton.addEventListener('click', function(event) {
    event.preventDefault();
    changeBordersToDefoult();
    let isValid =  chechIfFormFieldsValid();
  
    if (isValid) {
        if (!infoWindow || infoWindow.closed) {
            infoWindow = window.open("", "InfoWindow", "width=400,height=300");
        }

        updateInfoWindow();
    }
    else{
        alert("Певні поля форми не заповнені, або заповнені не згідно шаблону. Тепер вони виділені червоним.")
    }
});


function chechIfFormFieldsValid(){
    const fullnamePattern = /^[A-Za-zА-Яа-я\s]{3,} [A-Za-zА-Яа-я\s]\.[A-Za-zА-Яа-я\s]\.$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com)$/;
    const birthdatePattern = /^\d{2}\.\d{2}\.\d{4}$/;
    const addressPattern = /^(м\.|смт\.|с\.)\s[А-ЯҐЄІЇа-яґєії\s]+$/;
    const telegramPattern = /^@\w+$/;

    let isValid = true;
    if (!fullnamePattern.test(fullnameInput.value)) {
        fullnameInput.style.border = invalidBorderStyle;
        isValid = false;
    }
    if (!emailPattern.test(emailInput.value)) {
        emailInput.style.border = invalidBorderStyle;
        isValid = false;
    }
    if (!birthdatePattern.test(birthdateInput.value)) {
        birthdateInput.style.border = invalidBorderStyle;
        isValid = false;
    }
    if (!addressPattern.test(addressInput.value)) {
        addressInput.style.border = invalidBorderStyle;
        isValid = false;
    }
    if (!telegramPattern.test(telegramInput.value)) {
        telegramInput.style.border = invalidBorderStyle;
        isValid = false;
    }
    
    return isValid;
}

function changeBordersToDefoult(){
    fullnameInput.style.border =defaultBorderStyle;
    emailInput.style.border = defaultBorderStyle;
    birthdateInput.style.border = defaultBorderStyle;
    addressInput.style.border = defaultBorderStyle;
    telegramInput.style.border = defaultBorderStyle;
}


function updateInfoWindow(fullname, email, birthdate, address, telegram) {
    infoWindow.document.body.innerHTML = `
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 20px; 
            }
            button {
                padding: 10px;
                background-color: #405cf5;
                border-radius: 6px;
                color: white;
            }
            .align-center-container {
                display: flex;
                justify-content: center; 
                margin-top: 20px;
            }
            .success{
                color:green;
            }
        </style>

        <h2 class = "success">Ви успішно зареєстровані.</h2>
        <h3>Введена інформація:</h3>
        <p><strong>ПІБ:</strong> ${fullnameInput.value}</p>
        <p><strong>Email:</strong> ${emailInput.value}</p>
        <p><strong>Дата народження:</strong> ${birthdateInput.value}</p>
        <p><strong>Адреса:</strong> ${addressInput.value}</p>
        <p><strong>Telegram:</strong> ${telegramInput.value}</p>
        <div class="align-center-container"><button onclick="window.close();">Закрити</button></div>
    `;
}





// task 2

const myCell = document.getElementById('myVarianCell');
const colorPicker = document.getElementById('color-picker');
const table = document.getElementById("myTable");
const clearButton = document.getElementById('clear-button');


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function colorTheRow(rowIndex){
    for (let i = 0; i < table.rows[0].cells.length; i++)
    {
        let cell = table.rows[rowIndex].cells[i];
        cell.style.backgroundColor = colorPicker.value;
    }
}

function clearCells(){
    const cells = document.querySelectorAll('td');
    
    cells.forEach(cell => {
        cell.style.backgroundColor = ''; 
    });
}


myCell.addEventListener('mouseover', function() {
    this.style.backgroundColor = getRandomColor();
});

myCell.addEventListener('click', function() {
    this.style.backgroundColor = colorPicker.value; 
});


myCell.addEventListener("dblclick", function() {
    rowIndex = 0 ;
    colorTheRow(rowIndex)
  });

clearButton.addEventListener('click', clearCells);
