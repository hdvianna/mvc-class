export default (function(model, presenter) {
    return {
        async create(output, input) {
            const result = await model.create(input);
            const presentation = await presenter.makeFromResult(result, model);
            output.send(presentation);
        },
        async main(output) {
            const presentation = await presenter.makeDefault(model);
            output.send(presentation);
        }
    }
});