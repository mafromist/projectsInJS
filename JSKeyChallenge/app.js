/* Tip from Riley 
/// 
    document.addEventListener("keypress", event => {
    console.log(event);
})
///
Program: 

When Pressed any key

For Style
    a.When pressed key, add event listener to class=frontContainer display:none
    b. Also remove display: none from container-later class
For Content
    a. add the pressed key(eventWhich) text content to id=eventWhich, it will .mainKey and 3rd child of .keyText
    b. change the textContent on #eventCode as the pressed key's JS code
    c. change the textContent on  #eventKey as the pressed key's JS keynamed
Defining required HTML elements
    1. .frontTitle
    2. .container-Later
    3. #eventWhich
    4. #eventKey
    5. #eventCode

    */

const frontContainer = document.querySelector(".frontContainer");
const containerLater = document.querySelector(".container-later");
const eventWhich = document.querySelector("#eventWhich");
const bigKey = document.querySelector("#bigKey");
const eventKey = document.querySelector("#eventKey");
const eventCode = document.querySelector("#eventCode");


document.addEventListener("keydown", event => {
    console.log(event);
    frontContainer.remove();
    containerLater.style.display = "block";
    eventKey.textContent =  `${event.key}`;
    bigKey.textContent =  `${event.keyCode}`;
    eventWhich.textContent =  `${event.keyCode}`;
    eventCode.textContent =  `${event.code}`;

    if(event.code == "Space"){
        eventKey.textContent =  `Space Character`;
    }
});