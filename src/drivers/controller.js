export default (function(model, presenter) {
    return {
        create(output, input) {
            const result = model.create(input);
            const presentation = presenter.makeFromResult(result, model);
            output.send(presentation);
        },
        main(output) {
            const presentation = presenter.makeDefault(model);
            output.send(presentation);
        }
    }
});