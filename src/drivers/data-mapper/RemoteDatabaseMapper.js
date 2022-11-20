import Driver from "../../domain/entities/Driver";
import dateModule from "../../domain/types/date";

const driversPath = "/drivers";

export default class RemoteDatabaseMapper {
    
    constructor(server) {
        this.server = server;        
    }

    async insert(driver) {
        let body = {
            "name": driver.name,
            "birthdate": driver.birthdate.value.toISOString(),
            "fastestLap": driver.fastestLap
        };
        return await fetch(getResource(this.server, driversPath), {
            "method": "POST",
            "headers": {
                "Content-Type":"application/json",
            },
            "body": JSON.stringify(body) 
        }).catch(error => {
            return error;
        });
    }
    
    async findAll() {
        return await fetch(getResource(this.server, driversPath), {
            "method": "GET"
        }).then(response => {
            return response.json();
        }).then(body => {
            return body.drivers.map(driver => { 
                return new Driver(driver.name, dateModule(driver.birthdate.value), driver.fastestLap, driver.uuid)
            });
        }).catch((error) => {
            return [];
        });
    }
}

function getResource(server, path) {
    return `${server}${path}`;
}