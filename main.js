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

    let nameEl = document.createElement("h2");
    nameEl.classList.add("customerName");

    let text = document.createTextNode(`${capitalizeFirstLetter(customer.name.title)} ${capitalizeFirstLetter(customer.name.first)} ${capitalizeFirstLetter(customer.name.last)}`)
    nameEl.appendChild(text);
    customerDiv.appendChild(nameEl);
    directory.appendChild(customerDiv);
}
