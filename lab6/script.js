let users = [];

fetch('https://randomuser.me/api/?results=14')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    users = data.results;
    const userContainer = document.getElementById("users-container");

    for(let i = 0 ; i < users.length; i++)
        {
            const userProfileDiv = document.createElement('div');
            userProfileDiv.className = "user-profile";
            

            const img = document.createElement('img');
            img.src = users[i].picture.large;
           


            const userTextInfo = document.createElement('div');
            userTextInfo.className = "user-text-info";


            var mybr = document.createElement('br');
           

            // name
            const nameLabel = document.createElement('b');
            nameLabel.textContent = "Name:"; 

            const userName = document.createElement("large");
            userName.textContent =  users[i].name.first + " " + users[i].name.last ;

            //phone number
            const cellLabel = document.createElement('b');
            cellLabel.textContent = "Cell number:"; 

            const userCellNumber = document.createElement("p");
            userCellNumber.textContent = users[i].cell;
            
            // location
            const contryLabel = document.createElement('b');
            contryLabel.textContent = "Country:"; 

            const userCountry = document.createElement("p");
            userCountry.textContent = users[i].location.country;
            const userCity = document.createElement("p");
            userCity.textContent = users[i].location.city;


            userTextInfo.appendChild(nameLabel);           
            userTextInfo.appendChild(userName);

            userTextInfo.appendChild(document.createElement('br'));
            userTextInfo.appendChild(cellLabel);
            userTextInfo.appendChild(userCellNumber)

            userTextInfo.appendChild(contryLabel)
            userTextInfo.appendChild(userCountry)
            userTextInfo.appendChild(userCity)
            

            userProfileDiv.appendChild(img);
            userProfileDiv.appendChild(userTextInfo)
            userContainer.appendChild(userProfileDiv)


            
    }
});
  





