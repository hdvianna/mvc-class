import dateModule from '../../domain/types/date';

export default (function(json) {    
    return {
        getName() {
            return json.name;
        },
        getBirthdate() {
            return dateModule(json.birthdate);
        },
        getFatestLap() {
            return json.fastestLap;
        }
    }

});