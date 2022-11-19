
import Driver from "../../domain/entities/Driver";
import dateModule from "../../domain/types/date";

export default class LocalStorageDataMapper {
    
    constructor() {
        this.driversDb = {
            drivers: []
        };
        
    }

    insert(driver) {
        this.driversDb.drivers.push({
            "uuid": driver.uuid,
            "name": driver.name,
            "birthdate": driver.birthdate.value.toISOString(),
            "fastestLap": driver.fastestLap
        });
    }
    
    findAll() {
        return this.driversDb.drivers.map(driver => { 
            return new Driver(driver.name, dateModule(driver.birthdate), driver.fastestLap, driver.uuid)
        }); 
    }
}