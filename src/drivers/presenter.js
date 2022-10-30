export default (function () {
    const FIELD_MAP = {
        "name": "Name",
        "birthdate": "Birthdate",
        "fastestLap": "Fastest lap"
    }
    return {
        makeDefaultViewModel(model) {
            const viewModel = {
                drivers:  model.list(),
            };
            viewModel.name = "";
            viewModel.birthdate = "";
            viewModel.fastestLap = "";
            return viewModel;
        },
        makeViewModelFromResult(result, model) {
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
                    result.required
                        .map(field => FIELD_MAP[field])
                        .join(", ")
                );

                viewModel.message = {
                    title: "Error while creating driver!",
                    messages: [
                        requiredMessage, invalidMessage
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