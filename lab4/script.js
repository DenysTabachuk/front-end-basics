// 1 task
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function toggleColors(element, clickState) {
    if (!clickState.state) {
        let randomBackgroundColor = getRandomColor();
        let randomTextColor = getRandomColor();

        element.style.backgroundColor = randomBackgroundColor;
        element.style.color = randomTextColor;
        clickState.state = true;
    } else {
        element.style.backgroundColor = "initial";
        element.style.color = "initial";
        clickState.state = false;
    }
}

let firstClickState = { state: false };
let firstClickQueryState = { state: false };


document.getElementById("second-element").addEventListener("click", function() {
    toggleColors(this, firstClickState);
});

document.querySelector(".change-on-click").addEventListener("click", function() {
    toggleColors(this, firstClickQueryState);
});



// 2 task

const uploadButton = document.getElementById('upload-button');
const fileInput = document.getElementById('file-input');
const imageContainer = document.getElementById('image-container');


uploadButton.addEventListener('click', function() {
    fileInput.click();  
})


fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];  
    if (file) {
        const imageBlock = document.createElement('div');
        imageBlock.classList.add('image-block');

        // Додати іконки
        const photoIcons = document.createElement('div');
        photoIcons.classList.add('photo-icons');

        const decreaseSizeIcon = document.createElement('img');
        decreaseSizeIcon.classList.add('icon');
        decreaseSizeIcon.src = 'icons/minus.png';
        decreaseSizeIcon.onclick = function() { reduceImage(this) };
        
        const increaseSizeIcon = document.createElement('img');
        increaseSizeIcon.classList.add('icon');
        increaseSizeIcon.src = 'icons/plus.png';
        increaseSizeIcon.onclick = function() { enlargeImage(this) };

        const deleteIcon = document.createElement('img');
        deleteIcon.classList.add('icon');
        deleteIcon.src = 'icons/trash.png';
        deleteIcon.onclick = function() { removeImage(this) };

        photoIcons.appendChild(decreaseSizeIcon);
        photoIcons.appendChild(increaseSizeIcon);
        photoIcons.appendChild(deleteIcon);

         // Створити посилання
         const link = document.createElement('a');
         link.href = 'https://kyivcity.gov.ua';  // Замість example.com вкажіть потрібну URL
         link.target = '_blank';  // Відкрити в новій вкладці
 
         // Створити зображення
         const img = document.createElement('img');
         img.classList.add('zoomable-image');
         img.src = URL.createObjectURL(file);  // Створюємо URL для зображення
         img.alt = 'Вибране фото';
         img.width = 600;  // Можете налаштувати ширину за замовчуванням
         img.classList.add("added-image");


         // Додати зображення до посилання
         link.appendChild(img);



        // Додати елементи до блоку
        imageBlock.appendChild(photoIcons);
        imageBlock.appendChild(link);

        // Додати блок на сторінку
        imageContainer.appendChild(imageBlock);
        console.log("додано");
    }
});



// icons functionality

function enlargeImage(iconElement) {
    console.log("clicked +")
    const container = iconElement.closest('.image-block'); 
    let image = container.querySelector('a img'); 

    if (image.width * 1.1 > window.innerWidth - 60 ) {
        alert('Зображення вже достатньо велике, при повторномному збільшенні зображення може бути ширшим за ваш екран.');
        return; 
    }
    else{
        image.width = image.width * 1.1;
        console.log( image.width );
    }  
}

function reduceImage(iconElement) {
    console.log("clicked -")
    const container = iconElement.closest('.image-block'); 
    const image = container.querySelector('a img'); 

    var currentWidth = image.width;

    if (currentWidth < 270 ) {
        alert('Зображення вже достатньо мале для подальшого зменшення.');
        return; 
    }
    else{
        image.width = currentWidth * 0.9;
        console.log( image.width );
    }  
}


function removeImage(iconElement){
    console.log("clicked remove")
    const imageBlock = iconElement.closest('.image-block');
    if (imageBlock) {
        imageBlock.remove(); 
    }
}
