const orderCountElements = document.querySelectorAll(".js--order-count");
const productCountElements = document.querySelectorAll(".js--product-count");
const amountCountElements = document.querySelectorAll(".js--amount-count");
const amountPerCountElements = document.querySelectorAll(".js--ac-count");

const getPercentage = (index, p1, p2, elem) => {
    if (p1?.innerHTML && p2?.innerHTML) {
        let x1 = +p1.innerHTML.split(",").join("");
        let x2 = +p2.innerHTML.split(",").join("");
        let result = ((x2 - x1) / x1) * 100;
        document.querySelector(`#js--${elem}-percentage-${index}`).innerHTML += `(${result.toFixed(1)}%)`;
        document.querySelector(`#js--${elem}-percentage-${index}`).classList.add(`text-${result > 0 ? 'green' : 'red'}-500`);
    } else {
        document.querySelector(
            `#js--${elem}-percentage-${index}`
        ).innerHTML += `(N/A)`;
        document
            .querySelector(`#js--${elem}-percentage-${index}`)
            .classList.add("text-red-500");
    }
};

const elementsLoop = (elements, identifier) => {
    for (let i = elements.length; i > 0; i--) {
        getPercentage(i, elements[i], elements[i - 1], identifier);
    }
};

elementsLoop(orderCountElements, "order");

elementsLoop(amountCountElements, "amount");

elementsLoop(amountPerCountElements, "ac");

elementsLoop(productCountElements, "product");
