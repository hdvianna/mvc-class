
import Driver from "../../domain/entities/Driver";
import dateModule from "../../domain/types/date";

export default class LocalStorageDataMapper {
    
    constructor() {
        this.driversDb = {
            drivers: []
        };
        
        let driversDbJson = localStorage.getItem("drivers-db-json");        
        if (driversDbJson) {
            this.driversDb = JSON.parse(driversDbJson);
        }
    }

    insert(driver) {
        this.driversDb.drivers.push({
            "uuid": driver.uuid,
            "name": driver.name,
            "birthdate": driver.birthdate.value.toISOString(),
            "fastestLap": driver.fastestLap
        });
        this.persist();
    }
    
    findAll() {
        return this.driversDb.drivers.map(driver => { 
            return new Driver(driver.name, dateModule(driver.birthdate), driver.fastestLap, driver.uuid)
        }); 
    }

    persist() {
        localStorage.setItem("drivers-db-json", JSON.stringify(this.driversDb));
    }
}