import resultBuilderModule from "./resultBuilder";
import Driver from "../domain/entities/Driver";
import MinimuAgeSpecification from "../domain/specifications/MinimuAgeSpecification";

export default (function(dataMapper) {
    return {
        create(adapter) {
            const inputResultBuilder = resultBuilderModule();
                    
            if (isEmpty(adapter.getName())) {
                inputResultBuilder.addRequired('name');
            }

            if (adapter.getBirthdate().isEmpty) {
                inputResultBuilder.addRequired('birthdate');
            } else if (!adapter.getBirthdate().isValid) {
                inputResultBuilder.addInvalid('birthdate');
            }

            if (isEmpty(adapter.getFatestLap())) {
                inputResultBuilder.addRequired('fastestLap');
            }

            if (!inputResultBuilder.success()) {
                return inputResultBuilder.build();
            }

            const ruleResultBuilder = resultBuilderModule();

            const minimuAgeSpecification = new MinimuAgeSpecification(new Date(), 18);
            let driver = new Driver(adapter.getName(), adapter.getBirthdate(), adapter.getFatestLap());

            if (!minimuAgeSpecification.isSpecifiedBy(driver)) {
                ruleResultBuilder.addViolation("MINIMUM_AGE");
            }
            
            if (!ruleResultBuilder.success()) {
                return ruleResultBuilder.build();
            }                

            create(driver);
            return ruleResultBuilder.build();


        },
        list() {
            return dataMapper.findAll();
        }
    }

    function isEmpty(value) {
        return !value || value.trim().length === 0;
    }

    function create(driver) {
        dataMapper.insert(driver);
    }
});