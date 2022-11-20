import html from './drivers.html';
import css from './drivers.css'
import adapterModule from '../adapters/domAdapter';

const parser = new DOMParser();

export default (function (controller) {

    const domElement = makeDomElement();
    const messageElement = domElement.ownerDocument.getElementById("message");
    const tbodyElement = domElement.ownerDocument.getElementById("tbodyElement"); 
    const domFields = {
        name: domElement.ownerDocument.getElementById("name"),
        birthdate: domElement.ownerDocument.getElementById("birthdate"),
        fastestLap: domElement.ownerDocument.getElementById("fatestLap"),
    }
    const adapter = adapterModule(domElement);
    const view = {
        getDomElement() {
            return domElement;
        },
        send(viewModel) {
            messageElement.classList.remove("visible");
            if (viewModel.message) {
                messageElement.classList.add("visible");
                messageElement.childNodes[1].innerText = viewModel.message.title;
                messageElement.childNodes[3].innerHTML = viewModel.message.messages.join("<br>");                
            } 

            if (viewModel.success) {
                for(let key in domFields) {
                    domFields[key].value = "";
                }
            }

            tbodyElement.innerHTML = viewModel.drivers.map(driver => {
                return `<tr><td>${driver.name}</td><td>${driver.birthdate.value}</td><td>${driver.fastestLap}</td></tr>`
            }).join("");

        }
    }    
    appendSubmitListener();

    function makeDomElement() {
        const content = parser.parseFromString(html, "text/html");
        return content.body.firstChild;
    }

    function appendSubmitListener() {
        let form = domElement.ownerDocument.getElementById("createDriverForm");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            controller.create(view, adapter);            
        });
    }

    return view;

});