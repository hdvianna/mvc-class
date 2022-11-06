import driversControllerModule from '../../src/drivers/controller';
import chance from 'chance';

test('Given the application is set when calling the create port then model.create, presenter.makeFromResult, and output.send are called', () => {
    
    const expectedModelResult = chance().string();
    const modelMock = makeModelMock(expectedModelResult);

    const expectedPresenterResult = chance().string();
    const presenterMock = makePresenterMock(expectedPresenterResult);

    const adapterMock = {};    
    const viewMock = makeViewMock();
    
    const driversController = driversControllerModule(modelMock, presenterMock);
    driversController.create(viewMock, adapterMock);

    expect(modelMock.create).toHaveBeenCalledTimes(1);
    expect(modelMock.create).toHaveReturnedWith(expectedModelResult);

    expect(presenterMock.makeFromResult).toHaveBeenCalledWith(expectedModelResult, modelMock);
    expect(presenterMock.makeFromResult).toHaveBeenCalledTimes(1);
    expect(presenterMock.makeFromResult).toHaveReturnedWith(expectedPresenterResult);
    
    expect(viewMock.send).toHaveBeenCalledTimes(1);
    expect(viewMock.send).toHaveBeenCalledWith(expectedPresenterResult);

});


function makeModelMock(expectedModelResult) {    
    const modelCreateMock = jest.fn();
    modelCreateMock.mockReturnValueOnce(expectedModelResult);
    return {
        "create": modelCreateMock
    };
}

function makePresenterMock(expectedPresenterResult) {
    const presenterMakeFromResultMock = jest.fn();
    presenterMakeFromResultMock.mockReturnValueOnce(expectedPresenterResult);
    return {
        "makeFromResult": presenterMakeFromResultMock
    };
}

function makeViewMock() {
    const viewSendMock = jest.fn();    
    return {
        "send": viewSendMock
    }
}