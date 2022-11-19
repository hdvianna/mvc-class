import dateModule from '../../domain/types/date';

export default (function(form) {
    
    const document = form.ownerDocument;
    const domFields = {
        name: document.getElementById("name"),
        birthdate: document.getElementById("birthdate"),
        fastestLap: document.getElementById("fatestLap"),
    }

    return {
        getName() {
            return domFields.name.value;
        },
        getBirthdate() {
            return dateModule(domFields.birthdate.value);
        },
        getFatestLap() {
            return domFields.fastestLap.value;
        }
    }

});