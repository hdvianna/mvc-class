export default (function () {
    const FIELD_MAP = {
        "name": "Name",
        "birthdate": "Birthdate",
        "fastestLap": "Fastest lap"
    }
    const VIOLATIONS_MAP = {
        "MINIMUM_AGE": "Age should be equals or greater than 18 years"
    }
    return {
        makeDefault(model) {
            const viewModel = {
                drivers:  model.list(),
            };
            viewModel.name = "";
            viewModel.birthdate = "";
            viewModel.fastestLap = "";
            return viewModel;
        },
        makeFromResult(result, model) {
            const viewModel = {
                drivers:  model.list(),
                success: result.success 
            };
            if (!result.success) {
                let requiredMessage = makeMessageIfNotEmpty(
                    "Mandatory fields: ",
                    result.required
                        .map(field => FIELD_MAP[field])
                        .join(", ")
                );
                let invalidMessage = makeMessageIfNotEmpty(
                    "Invalid fields: ", 
                    result.invalid
                        .map(field => FIELD_MAP[field])
                        .join(", ")
                );
                let violationMessage = makeMessageIfNotEmpty(
                    "Violations: ", 
                    result.violations
                        .map(violation => VIOLATIONS_MAP[violation])
                        .join(", ")
                );

                viewModel.message = {
                    title: "Error while creating driver!",
                    messages: [
                        requiredMessage, invalidMessage, violationMessage
                    ]
                }
            }
            return viewModel;
        }
    }

    function makeMessageIfNotEmpty(prefix, list) {
        let message = "";
        if (list) {
            message = [prefix, list].join(" ");
        }
        return message;
    }
});