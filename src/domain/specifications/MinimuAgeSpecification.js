import AgeSpecification from "./AgeSpecification";

export default class MinimuAgeSpecification extends AgeSpecification {
    constructor(baseDate, minimumAge) {
        super(baseDate);
        this.minimumAge = minimumAge;
    }

    isSpecifiedBy(driver) {
        const driverAge = super.calculateAge(driver.birthdate.value);
        return driverAge >= this.minimumAge;
    }
}