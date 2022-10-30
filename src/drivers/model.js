import resultBuilderModule from "./resultBuilder";

export default (function() {
    const drivers = [];
    return {
        create(adapter) {
            const resultBuilder = resultBuilderModule();
            let success = true;
                    
            if (isEmpty(adapter.getName())) {
                resultBuilder.addRequired('name');
                success = false;
            }

            if (isEmpty(adapter.getBirthdate())) {
                resultBuilder.addRequired('birthdate');
                success = false;
            }

            if (isEmpty(adapter.getFatestLap())) {
                resultBuilder.addRequired('fastestLap');
                success = false;
            }

            
            if (success) {
                createDriver(adapter);
            }

            return resultBuilder.build(success);


        },
        list() {
            return drivers;
        }
    }

    function isEmpty(value) {
        return !value || value.trim().length === 0;
    }

    function createDriver(adapter) {
        drivers.push({
            "name": adapter.getName(),
            "birthdate": adapter.getBirthdate(),
            "fastestLap": adapter.getFatestLap()
        })
    }
});