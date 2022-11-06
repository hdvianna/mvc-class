import driversControllerModule from '../../src/drivers/controller';
import chance from 'chance';

test('Given the application is set when calling the create port then model.create, presenter.makeFromResult, and output.send are called', () => {
    
    const expectedModelResult = chance().string();;
    const modelCreateMock = jest.fn();
    modelCreateMock.mockReturnValueOnce(expectedModelResult);
    const modelMock = {
        "create": modelCreateMock
    };

    const expectedPresenterResult = chance().string();;
    const presenterMakeFromResultMock = jest.fn();
    presenterMakeFromResultMock.mockReturnValueOnce(expectedPresenterResult);
    const presenterMock = {
        "makeFromResult": presenterMakeFromResultMock
    };

    const adapterMock = {};    
    const viewSendMock = jest.fn();    
    const viewMock = {
        "send": viewSendMock
    }
    
    const driversController = driversControllerModule(modelMock, presenterMock);
    driversController.create(viewMock, adapterMock);

    expect(modelCreateMock).toHaveBeenCalledTimes(1);
    expect(modelCreateMock).toHaveReturnedWith(expectedModelResult);

    expect(presenterMakeFromResultMock).toHaveBeenCalledWith(expectedModelResult, modelMock);
    expect(presenterMakeFromResultMock).toHaveBeenCalledTimes(1);
    expect(presenterMakeFromResultMock).toHaveReturnedWith(expectedPresenterResult);
    
    expect(viewSendMock).toHaveBeenCalledTimes(1);
    expect(viewSendMock).toHaveBeenCalledWith(expectedPresenterResult);


});