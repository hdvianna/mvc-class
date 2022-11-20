import driversViewModule from "./drivers/view/drivers";
import driversControllerModule from "./drivers/controller";
import driversPresenterModule from "./drivers/presenter";
import driversModelModule from "./drivers/model";
import RemoteDataMapper from "./drivers/data-mapper/RemoteDatabaseMapper"

let driversModel = driversModelModule(new RemoteDataMapper("http://localhost:8000"));
let driversPresenter = driversPresenterModule();
let driversController = driversControllerModule(driversModel, driversPresenter);
let driversView = driversViewModule(driversController);

document.body.appendChild(driversView.getDomElement());

driversController.main(driversView);

