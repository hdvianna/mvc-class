export default (function(model, presenter) {
    return {
        create(view, adapter) {
            const result = model.create(adapter);
            const viewModel = presenter.makeViewModelFromResult(result, model);
            view.updateViewModel(viewModel);
        },
        init(view) {
            const viewModel = presenter.makeDefaultViewModel(model);
            view.updateViewModel(viewModel);
        }
    }
});