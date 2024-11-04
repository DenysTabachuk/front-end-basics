function createTextElement(tag, textContent, className = "") {
    const element = document.createElement(tag);
    element.textContent = textContent;
    if (className) element.className = className;
    return element;
}

function createUserProfileBlock(user) {
    const userProfileDiv = document.createElement('div');
    userProfileDiv.className = "user-profile";

    // profile image
    const img = document.createElement('img');
    img.src = user.picture.large;
    userProfileDiv.appendChild(img);

    // container for text info
    const userTextInfo = document.createElement('div');
    userTextInfo.className = "user-text-info";

    // name
    userTextInfo.appendChild(createTextElement('b', "Name:"));
    userTextInfo.appendChild(createTextElement('large', `${user.name.first} ${user.name.last}`));
    userTextInfo.appendChild(document.createElement('br'));

    // cell number
    userTextInfo.appendChild(createTextElement('b', "Cell number:"));
    userTextInfo.appendChild(createTextElement('large', user.cell));
    userTextInfo.appendChild(document.createElement('br'));

    // country and city
    userTextInfo.appendChild(createTextElement('b', "Country:"));
    userTextInfo.appendChild(createTextElement('large', user.location.country));
    userTextInfo.appendChild(document.createElement('br'));
    userTextInfo.appendChild(createTextElement('b', "Sity:"));
    userTextInfo.appendChild(createTextElement('large', user.location.city));

    userProfileDiv.appendChild(userTextInfo);
    return userProfileDiv;
}

const getUsersButton = document.getElementById("get-users-button");
const userContainer = document.getElementById("users-container");
const statusField = document.getElementById("status-field");


let users = [];
getUsersButton.addEventListener("click", () => {
    fetch('https://randomuser.me/api/?results=14')
        .then((response) => response.json())
        .then((data) => {
            users = data.results;
       
            userContainer.innerHTML = "";
            users.forEach(user => {
                const userProfile = createUserProfileBlock(user);
                userContainer.appendChild(userProfile);
            });

            statusField.textContent = "Success";
        })
        .catch((error) => {
            console.error('Помилка при завантаженні даних:', error);
            statusField.textContent = "Error during loading data";
        });
});