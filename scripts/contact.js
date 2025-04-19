// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault();

    const contactSection = document.getElementById("contact-page");

    const thankYouParagraph = document.createElement("p");

    thankYouParagraph.textContent = "Thank you for your message";

    thankYouParagraph.style.fontSize = "24px";

    contactSection.innerHTML = "";
    contactSection.appendChild(thankYouParagraph); // Adds the new paragraph to the page
});

