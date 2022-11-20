
import Driver from "../../domain/entities/Driver";
import dateModule from "../../domain/types/date";

export default class InMemoryDataMapper {
    
    constructor() {
        this.driversDb = {
            drivers: []
        };
        
    }

    async insert(driver) {
        this.driversDb.drivers.push({
            "uuid": driver.uuid,
            "name": driver.name,
            "birthdate": driver.birthdate.value.toISOString(),
            "fastestLap": driver.fastestLap
        });
    }
    
    async findAll() {        
        let list = this.driversDb.drivers.map(driver => { 
            return new Driver(driver.name, dateModule(driver.birthdate), driver.fastestLap, driver.uuid)
        }); 
        return list;  
    }
}