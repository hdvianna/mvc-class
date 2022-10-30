import driversViewModule from "./drivers/view/drivers";
import driversControllerModule from "./drivers/controller";
import driversPresenterModule from "./drivers/presenter";
import driversModelModule from "./drivers/model";

let driversModel = driversModelModule();
let driversPresenter = driversPresenterModule();
let driversController = driversControllerModule(driversModel, driversPresenter);
let driversView = driversViewModule(driversController);

document.body.appendChild(driversView.getDomElement());

driversController.init(driversView);

