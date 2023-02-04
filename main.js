console.log("linked");

let directory = document.querySelector("#container");

for (let itemInArray of customers) {
    buildCustomerHtml(itemInArray)
}

// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function buildCustomerHtml(customer) {
    let customerDiv = document.createElement("div");
    customerDiv.classList.add("customer-block");

    let img = document.createElement("img");
    img.src = (`${customer.picture.thumbnail}`);

    let picture = document.createElement("h1");

    picture.appendChild(img);
    customerDiv.appendChild(picture);

    let nameEl = document.createElement("h2");
    nameEl.classList.add("customerName");

    let textName = document.createTextNode(`${capitalizeFirstLetter(customer.name.title)} ${capitalizeFirstLetter(customer.name.first)} ${capitalizeFirstLetter(customer.name.last)}`)
    nameEl.appendChild(textName);
    customerDiv.appendChild(nameEl);
    directory.appendChild(customerDiv);

    let emailEl = document.createElement("p");
    emailEl.classList.add("customerEmail");

    let textEmail = document.createTextNode(`${customer.email}`);
    emailEl.appendChild(textEmail);
    customerDiv.appendChild(emailEl);

    let addressEl = document.createElement("p");
    addressEl.classList.add("addressElement");

    let textAddress = document.createTextNode(`${customer.location.street.number} ${customer.location.street.name}`);
    addressEl.appendChild(textAddress);
    customerDiv.appendChild(addressEl);

    let addressElTwo = document.createElement("p");
    addressElTwo.classList.add("addressElement");

    let textAddressTwo = document.createTextNode(`${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`)
    addressElTwo.appendChild(textAddressTwo);
    customerDiv.appendChild(addressElTwo);

    // let dateOfBirthEl = document.createElement("p");
    // dateOfBirthEl.classList.add("DOBelement");

    // let textDob = document.createTextNode(`${moment(customer.dob.date).format("MMM Do YY")}`)
    // dateOfBirthEl.appendChild(textDob);
    // customerDiv.appendChild(dateOfBirthEl);





}


