export default class AgeSpecification {
    constructor(baseDate) {
        this.baseDate = baseDate;
    }

    calculateAge(birthdate) {
        let intBaseDate = dateToInt(this.baseDate);
        let intBirthdate = dateToInt(birthdate);

        return (intBaseDate -intBirthdate)/10000;

        function dateToInt(date) {
            const yearString = (date.getUTCFullYear()+"").padStart(4,"0");
            const monthString = (date.getUTCMonth()+"").padStart(2,"0");
            const dateString = (date.getUTCDate()+"").padStart(2,"0");
            const stringDate = `${yearString}${monthString}${dateString}`;
            return parseInt(stringDate);
        }
    }

    
}