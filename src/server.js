import express from "express"
import driversControllerModule from './drivers/controller'
import driversModelModule from "./drivers/model";
import InMemoryDataMapper from "./drivers/data-mapper/InMemoryDataMapper";
import driversPresenterModule from "./drivers/presenter";
import jsonAdpaterModule from "./drivers/adapters/jsonAdapter";

let driversModel = driversModelModule(new InMemoryDataMapper());
let driversPresenter = driversPresenterModule();
let driversController = driversControllerModule(driversModel, driversPresenter);

const app = express();
const port = 8000;

app.use(express.json());

app.get('/drivers', (request, response) => {
    driversController.main(response);
});

app.post('/drivers', (request, response) => {
    let input = jsonAdpaterModule(request.body);
    driversController.create(response, input);
});

app.listen(
    port, () => {
        console.log(`Drivers server started on port ${port}`);
    }
);
